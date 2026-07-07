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

  async saveOrderRemote(order) {
    if (!this.client) return null;

    try {
      const customer = order.customer || {};
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

      const customerId = customerRows?.[0]?.id || null;
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

    return data.map((order) => ({
      id: order.id,
      createdAt: order.created_at,
      customer: order.customer_snapshot,
      items: order.items || [],
      total: Number(order.total || 0),
      status: order.status || "novo",
      internalNote: order.internal_note || "",
      checkout: order.checkout || {},
    }));
  },

  async readCustomerOrders(customer) {
    const localOrders = this.readOrders().filter(
      (order) =>
        order.customer?.email === customer?.email ||
        order.customer?.whatsapp === customer?.whatsapp
    );

    if (!this.client) return localOrders;

    try {
      const { data, error } = await this.client
        .from("orders")
        .select("*")
        .or(
          `customer_snapshot->>email.eq.${customer.email || ""},customer_snapshot->>whatsapp.eq.${customer.whatsapp || ""}`
        )
        .order("created_at", { ascending: false });

      if (error) throw error;

      return data.map((order) => ({
        id: order.id,
        createdAt: order.created_at,
        customer: order.customer_snapshot,
        items: order.items || [],
        total: Number(order.total || 0),
        status: order.status || "novo",
        internalNote: order.internal_note || "",
        checkout: order.checkout || {},
      }));
    } catch {
      return localOrders;
    }
  },
};
