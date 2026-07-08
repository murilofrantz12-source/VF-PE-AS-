const VF_STORE_KEYS = {
  customer: "vfCustomer",
  orders: "vfOrders",
};

function createVFClient() {
  if (!window.supabase || !window.VF_SUPABASE?.url || !window.VF_SUPABASE?.anonKey) {
    return null;
  }

  return window.supabase.createClient(window.VF_SUPABASE.url, window.VF_SUPABASE.anonKey);
}

function mapRemoteOrder(order) {
  return {
    id: order.id,
    createdAt: order.created_at,
    customer: order.customer_snapshot,
    items: order.items || [],
    total: Number(order.total || 0),
    status: order.status || "novo",
    internalNote: order.internal_note || "",
    adminShipping: order.admin_shipping || {},
    checkout: order.checkout || {},
  };
}

function mapCustomer(row, user) {
  return {
    id: row?.id || null,
    userId: row?.user_id || user?.id || null,
    name: row?.name || user?.user_metadata?.name || "Cliente VF",
    whatsapp: row?.whatsapp || user?.user_metadata?.whatsapp || "",
    email: row?.email || user?.email || "",
    city: row?.city || user?.user_metadata?.city || "A informar",
    isAuthenticated: Boolean(user?.id),
  };
}

window.VFStore = {
  client: createVFClient(),

  readCustomer() {
    try {
      return JSON.parse(localStorage.getItem(VF_STORE_KEYS.customer)) || null;
    } catch {
      return null;
    }
  },

  saveCustomer(customer) {
    localStorage.setItem(VF_STORE_KEYS.customer, JSON.stringify(customer));
    return customer;
  },

  clearCustomer() {
    localStorage.removeItem(VF_STORE_KEYS.customer);
  },

  async getSessionUser() {
    if (!this.client) return null;

    const { data, error } = await this.client.auth.getUser();
    if (error) return null;
    return data?.user || null;
  },

  async readCustomerProfile(user) {
    if (!this.client || !user?.id) return null;

    const { data, error } = await this.client
      .from("customers")
      .select("*")
      .eq("user_id", user.id)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async saveCustomerProfile(customer, user) {
    if (!this.client || !user?.id) return customer;

    const payload = {
      user_id: user.id,
      name: customer.name || user.user_metadata?.name || "Cliente VF",
      whatsapp: customer.whatsapp || user.user_metadata?.whatsapp || "",
      email: customer.email || user.email || null,
      city: customer.city || user.user_metadata?.city || null,
    };

    const { data, error } = await this.client
      .from("customers")
      .upsert(payload, { onConflict: "user_id" })
      .select("*")
      .single();

    if (error) throw error;
    const saved = mapCustomer(data, user);
    this.saveCustomer(saved);
    return saved;
  },

  async hydrateCustomerFromSession() {
    if (!this.client) return this.readCustomer();

    const user = await this.getSessionUser();
    if (!user) {
      const localCustomer = this.readCustomer();
      if (localCustomer?.isAuthenticated) this.clearCustomer();
      return this.readCustomer();
    }

    const profile = await this.readCustomerProfile(user);
    const customer = profile
      ? mapCustomer(profile, user)
      : await this.saveCustomerProfile(mapCustomer(null, user), user);

    this.saveCustomer(customer);
    return customer;
  },

  async signUpCustomer(customer, password) {
    if (!this.client) throw new Error("Supabase nao configurado.");

    const email = String(customer.email || "").trim().toLowerCase();
    const { data, error } = await this.client.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: customer.name,
          whatsapp: customer.whatsapp,
          city: customer.city,
        },
      },
    });

    if (error) throw error;

    const user = data?.user || null;
    if (!data?.session) {
      const pending = {
        ...customer,
        email,
        userId: user?.id || null,
        isAuthenticated: false,
        needsEmailConfirmation: true,
      };
      this.saveCustomer(pending);
      return pending;
    }

    return this.saveCustomerProfile({ ...customer, email }, user);
  },

  async signInCustomer(email, password) {
    if (!this.client) throw new Error("Supabase nao configurado.");

    const { data, error } = await this.client.auth.signInWithPassword({
      email: String(email || "").trim().toLowerCase(),
      password,
    });

    if (error) throw error;

    const user = data?.user || null;
    const profile = await this.readCustomerProfile(user);
    const customer = profile
      ? mapCustomer(profile, user)
      : await this.saveCustomerProfile(mapCustomer(null, user), user);

    this.saveCustomer(customer);
    return customer;
  },

  async signOutCustomer() {
    this.clearCustomer();
    if (this.client) await this.client.auth.signOut();
  },

  readOrders() {
    try {
      return JSON.parse(localStorage.getItem(VF_STORE_KEYS.orders)) || [];
    } catch {
      return [];
    }
  },

  saveOrder(order) {
    const orders = this.readOrders();
    orders.unshift(order);
    localStorage.setItem(VF_STORE_KEYS.orders, JSON.stringify(orders));
    this.saveOrderRemote(order);
    return order;
  },

  clearOrders() {
    localStorage.removeItem(VF_STORE_KEYS.orders);
  },

  deleteOrderLocal(orderId) {
    const orders = this.readOrders().filter((order) => order.id !== orderId);
    localStorage.setItem(VF_STORE_KEYS.orders, JSON.stringify(orders));
  },

  updateOrderStatusLocal(orderId, status) {
    const orders = this.readOrders().map((order) =>
      order.id === orderId ? { ...order, status } : order
    );
    localStorage.setItem(VF_STORE_KEYS.orders, JSON.stringify(orders));
    return orders.find((order) => order.id === orderId) || null;
  },

  updateOrderInternalNoteLocal(orderId, internalNote) {
    const orders = this.readOrders().map((order) =>
      order.id === orderId ? { ...order, internalNote } : order
    );
    localStorage.setItem(VF_STORE_KEYS.orders, JSON.stringify(orders));
    return orders.find((order) => order.id === orderId) || null;
  },

  updateOrderShippingLocal(orderId, adminShipping) {
    const orders = this.readOrders().map((order) =>
      order.id === orderId ? { ...order, adminShipping } : order
    );
    localStorage.setItem(VF_STORE_KEYS.orders, JSON.stringify(orders));
    return orders.find((order) => order.id === orderId) || null;
  },

  async updateOrderStatus(orderId, status) {
    this.updateOrderStatusLocal(orderId, status);

    if (!this.client) return null;

    const { data, error } = await this.client
      .from("orders")
      .update({ status })
      .eq("id", orderId)
      .select("*")
      .single();

    if (error) throw error;
    return data;
  },

  async updateOrderInternalNote(orderId, internalNote) {
    this.updateOrderInternalNoteLocal(orderId, internalNote);

    if (!this.client) return null;

    const { data, error } = await this.client
      .from("orders")
      .update({ internal_note: internalNote })
      .eq("id", orderId)
      .select("*")
      .single();

    if (error) throw error;
    return data;
  },

  async updateOrderShipping(orderId, adminShipping) {
    this.updateOrderShippingLocal(orderId, adminShipping);

    if (!this.client) return null;

    const { data, error } = await this.client
      .from("orders")
      .update({ admin_shipping: adminShipping })
      .eq("id", orderId)
      .select("*")
      .single();

    if (error) throw error;
    return data;
  },

  async deleteOrder(orderId) {
    this.deleteOrderLocal(orderId);

    if (!this.client) return null;

    const { error } = await this.client.from("orders").delete().eq("id", orderId);

    if (error) throw error;
    return true;
  },

  async saveOrderRemote(order) {
    if (!this.client) return null;

    try {
      const user = await this.getSessionUser();
      let customer = order.customer || {};
      let customerId = customer.id || null;

      if (user?.id) {
        customer = await this.saveCustomerProfile(customer, user);
        customerId = customer.id;
      } else {
        const { data: customerRows, error: customerError } = await this.client
          .from("customers")
          .insert({
            name: customer.name || "Cliente VF",
            whatsapp: customer.whatsapp || "",
            email: customer.email || null,
            city: customer.city || null,
          })
          .select("id")
          .limit(1);

        if (customerError) throw customerError;
        customerId = customerRows?.[0]?.id || null;
      }

      const { error: orderError } = await this.client.from("orders").insert({
        id: order.id,
        customer_id: customerId,
        customer_snapshot: customer,
        items: order.items,
        total: order.total || 0,
        status: order.status || "novo",
        checkout: order.checkout || {},
        created_at: order.createdAt,
      });

      if (orderError) throw orderError;
      return order;
    } catch (error) {
      console.warn("Pedido salvo localmente, mas ainda nao foi enviado ao Supabase.", error);
      return null;
    }
  },

  async signInAdmin(email, password) {
    if (!this.client) throw new Error("Supabase nao configurado.");

    const { data, error } = await this.client.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  },

  async readRemoteOrders() {
    if (!this.client) return null;

    const { data, error } = await this.client
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data.map(mapRemoteOrder);
  },

  async readCustomerOrders(customer) {
    const localOrders = this.readOrders().filter(
      (order) =>
        order.customer?.email === customer?.email ||
        order.customer?.whatsapp === customer?.whatsapp
    );

    if (!this.client) return localOrders;

    try {
      const user = await this.getSessionUser();
      if (!user?.id) return localOrders;

      const profile = await this.readCustomerProfile(user);
      const query = this.client
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      const { data, error } = profile?.id
        ? await query.eq("customer_id", profile.id)
        : await query.eq("customer_snapshot->>email", user.email || "");

      if (error) throw error;
      return data.map(mapRemoteOrder);
    } catch {
      return localOrders;
    }
  },
};
