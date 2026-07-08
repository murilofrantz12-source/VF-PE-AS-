const BUSINESS = {
  whatsappNumber: "5545991444489",
  instagramUrl: "",
};

const products = [
  {
    id: "capa-batedor-9470-ah234023",
    name: "Capa do batedor AH234023",
    category: "batedor",
    tag: "Similar ao original",
    code: "AH234023",
    compatibility: "STS 9470, STS 9570, S540, S550",
    application: "Batedor",
    quantity: "1 peça",
    note: "Similar ao original",
    image: "assets/products/capa-batedor-9470-ah234023.png",
    alt: "Capa de batedor verde 9470 AH234023 com ressaltos e pontos de fixação",
    spec: "Capa do batedor para reposição em colheitadeiras compatíveis.",
    price: 450,
  },
  {
    id: "capa-batedor-jd-9670-ah214671",
    name: "Capa do batedor AH214671",
    category: "batedor",
    tag: "Similar ao original",
    code: "AH214671",
    compatibility: "STS 9670, STS 9770, S660, S670, S680, S690, S760, S770, S780, S790",
    application: "Batedor",
    quantity: "1 peça",
    note: "Similar ao original",
    image: "assets/products/capa-batedor-jd-9670-ah214671.png",
    alt: "Capa de batedor verde JD 9670 AH214671 com apoios distribuídos",
    spec: "Capa do batedor para reposição em colheitadeiras compatíveis.",
    price: 530,
  },
  {
    id: "dedo-plataforma-lateral-6286531",
    name: "Dedo da plataforma lateral 6286531",
    category: "dedos",
    tag: "Similar ao original",
    code: "6286531",
    compatibility: "Compatibilidade sob consulta",
    application: "Lateral",
    quantity: "Unidade",
    note: "Similar ao original",
    image: "assets/products/dedo-grosso-6286531.png",
    alt: "Dedo da plataforma lateral 6286531 preto com estrutura reforçada e duas pontas",
    spec: "Dedo da plataforma lateral para reposição na plataforma de corte.",
    price: 50,
  },
  {
    id: "dedo-plataforma-central-6286532",
    name: "Dedo da plataforma central 6286532",
    category: "dedos",
    tag: "Similar ao original",
    code: "6286532",
    compatibility: "Compatibilidade sob consulta",
    application: "Central",
    quantity: "Unidade",
    note: "Similar ao original",
    image: "assets/products/dedo-duplo-6286532.png",
    alt: "Dedo da plataforma central 6286532 preto com duas pontas e reforço vermelho",
    spec: "Dedo da plataforma central para reposição na plataforma de corte.",
    price: 50,
  },
  {
    id: "dedo-plataforma-menor-6308502",
    name: "Dedo da plataforma menor 6308502",
    category: "dedos",
    tag: "Similar ao original",
    code: "6308502",
    compatibility: "Compatibilidade sob consulta",
    application: "Início/enrosação",
    quantity: "Unidade",
    note: "Similar ao original",
    image: "assets/products/dedo-corte-lateral-6308502.png",
    alt: "Dedo da plataforma menor 6308502 preto com corpo reforçado e duas pontas",
    spec: "Dedo da plataforma menor para aplicação no início/enrosação.",
    price: 50,
  },
  {
    id: "kit-reparo-rotor-dianteiro-ah219761",
    name: "Kit reparo do rotor AH219761",
    category: "kits",
    tag: "Similar ao original",
    code: "AH219761",
    compatibility: "STS 9470, STS 9570, S540, S550",
    application: "Dianteiro",
    quantity: "Kit com 3 peças",
    note: "Similar ao original",
    image: "assets/products/kit-reparo-jd-9470-diant-ah219761-1.png",
    alt: "Kit reparo do rotor dianteiro AH219761 com furos de fixação",
    spec: "Kit reparo do rotor para aplicação dianteira.",
    price: 2200,
  },
  {
    id: "kit-reparo-rotor-traseiro-ah219762",
    name: "Kit reparo do rotor AH219762",
    category: "kits",
    tag: "Similar ao original",
    code: "AH219762",
    compatibility: "STS 9470, STS 9570, S430, S440, S540, S550",
    application: "Traseiro",
    quantity: "Kit com 3 peças",
    note: "Similar ao original",
    image: "assets/products/kit-reparo-jd-9470-tras-ah219762.png",
    alt: "Kit reparo do rotor traseiro AH219762 com furos de fixação",
    spec: "Kit reparo do rotor para aplicação traseira.",
    price: 2200,
  },
  {
    id: "kit-reparo-rotor-dianteiro-ah216568",
    name: "Kit reparo do rotor AH216568",
    category: "kits",
    tag: "Similar ao original",
    code: "AH216568",
    compatibility: "STS 9650, STS 9670, STS 9750, STS 9770, S660, S670, S680, S690, S760, S770, S780, S790",
    application: "Dianteiro",
    quantity: "Kit com 3 peças",
    note: "Similar ao original",
    image: "assets/products/kit-reparo-jd-9670-diant-ah216568.png",
    alt: "Peça preta curva do kit reparo JD 9670 dianteiro AH216568",
    spec: "Kit reparo do rotor para aplicação dianteira.",
    price: 2200,
  },
  {
    id: "kit-reparo-rotor-traseiro-ah216569",
    name: "Kit reparo do rotor AH216569",
    category: "kits",
    tag: "Similar ao original",
    code: "AH216569",
    compatibility: "STS 9650, STS 9670, STS 9750, STS 9770, S660, S670, S680, S690, S760, S770, S780, S790",
    application: "Traseiro",
    quantity: "Kit com 3 peças",
    note: "Similar ao original",
    image: "assets/products/kit-reparo-jd-9670-tras-ah216569.png",
    alt: "Peça preta curva do kit reparo JD 9670 traseiro AH216569 com aba de fixação",
    spec: "Kit reparo do rotor para aplicação traseira.",
    price: 2100,
  },
];

const state = {
  filter: "todos",
  search: "",
  cart: [],
  customer: readCustomer(),
  lastOrderId: "",
  accountIntent: "checkout",
};

const catalogFamilies = [
  {
    category: "batedor",
    title: "Capas do batedor",
    description: "Capas unitárias para reposição no batedor de colheitadeiras compatíveis.",
  },
  {
    category: "kits",
    title: "Kits reparo rotor",
    description: "Kits com 3 peças para reparo dianteiro ou traseiro do rotor.",
  },
  {
    category: "dedos",
    title: "Dedos da plataforma",
    description: "Dedos unitários para plataforma de corte, com compatibilidade sob consulta.",
  },
];

const productGrid = document.querySelector("[data-products]");
const cartCount = document.querySelector("[data-cart-count]");
const cartPanel = document.querySelector("[data-cart-panel]");
const cartItems = document.querySelector("[data-cart-items]");
const cartEmpty = document.querySelector("[data-cart-empty]");
const customerSummary = document.querySelector("[data-customer-summary]");
const overlay = document.querySelector("[data-overlay]");
const cartWhatsApp = document.querySelector("[data-cart-whatsapp]");
const quoteForm = document.querySelector("[data-quote-form]");
const productModal = document.querySelector("[data-product-modal]");
const productDetail = document.querySelector("[data-product-detail]");
const floatingWhatsApp = document.querySelector(".floating-whatsapp");
const footer = document.querySelector(".footer");
const accountModal = document.querySelector("[data-account-modal]");
const ordersModal = document.querySelector("[data-orders-modal]");
const clientOrders = document.querySelector("[data-client-orders]");
const confirmationModal = document.querySelector("[data-confirmation-modal]");
const confirmationDetail = document.querySelector("[data-confirmation-detail]");
const loginForm = document.querySelector("[data-login-form]");
const registerForm = document.querySelector("[data-register-form]");
const checkoutForm = document.querySelector("[data-checkout-form]");
const orderReview = document.querySelector("[data-order-review]");
const accountStatus = document.querySelector("[data-account-status]");
const loginLabel = document.querySelector("[data-login-label]");

function readCustomer() {
  return window.VFStore?.readCustomer() || null;
}

function saveCustomer(customer) {
  state.customer = customer;
  window.VFStore?.saveCustomer(customer);
  renderAccountShortcut();
}

function renderAccountShortcut() {
  if (!loginLabel) return;
  loginLabel.textContent = state.customer ? "Minha conta" : "Entrar";
}

function readOrders() {
  return window.VFStore?.readOrders() || [];
}

function saveOrderSnapshot(checkout = {}) {
  const order = {
    id: `VF-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    customer: state.customer,
    checkout,
    items: state.cart.map((item) => ({
      id: item.id,
      name: item.name,
      code: item.code,
      application: item.application,
      quantity: item.quantity,
      amount: item.amount,
      unitPrice: item.price,
      subtotal: item.price * item.amount,
    })),
    total: cartTotal(),
  };

  return window.VFStore?.saveOrder(order) || order;
}

function whatsappUrl(message) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function money(value) {
  return Number(value || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function orderStatusLabel(status = "novo") {
  const labels = {
    novo: "Novo",
    "em atendimento": "Em atendimento",
    pago: "Pago",
    enviado: "Enviado",
    concluido: "Concluído",
    cancelado: "Cancelado",
    arquivado: "Arquivado",
  };

  return labels[status] || status;
}

function formatDate(date) {
  return new Date(date).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function itemSubtotal(item) {
  return item.price * item.amount;
}

function cartTotal() {
  return state.cart.reduce((total, item) => total + itemSubtotal(item), 0);
}

function checkoutCityUf(checkout = {}) {
  return checkout.state ? `${checkout.city || "A informar"}-${checkout.state}` : checkout.city || "A informar";
}

function checkoutAddressLine(checkout = {}) {
  const number = checkout.number ? `, ${checkout.number}` : "";
  return `${checkout.address || "A informar"}${number}`;
}

function productMessage(product) {
  return [
    "Olá, quero falar com um vendedor sobre esta peça:",
    "",
    `Peça: ${product.name}`,
    `Código: ${product.code}`,
    `Valor unitário: ${money(product.price)}`,
    `Compatível com: ${product.compatibility}`,
    `Posição/aplicação: ${product.application}`,
    `Quantidade: ${product.quantity}`,
    `Observação: ${product.note}`,
    "",
    "Modelo da máquina:",
    "Cidade: Toledo-PR",
  ].join("\n");
}

function quantityLabel(product, amount) {
  const unit = product.quantity === "Kit com 3 peças" ? "kit" : "peça";
  return `${amount} ${unit}${amount > 1 ? "s" : ""}`;
}

function productType(product) {
  return product.quantity === "Kit com 3 peças" ? "Kit" : "Peça";
}

function cartMessage(intent = "confirmar", orderId = "", checkout = {}) {
  const list = state.cart.length
    ? state.cart
        .map((item) => `- ${item.name} | Código ${item.code} | ${item.application} | Quantidade: ${quantityLabel(item, item.amount)} | Unitário: ${money(item.price)} | Subtotal: ${money(itemSubtotal(item))}`)
        .join("\n")
    : "Ainda não escolhi as peças.";

  const intro =
    intent === "pedido"
      ? "Olá, quero finalizar este pedido:"
      : "Olá, quero falar com um vendedor sobre este pedido:";

  const orderLine = orderId ? `\nPedido: ${orderId}` : "";

  const customer = state.customer
    ? [
        "",
        "Cliente:",
        `Nome: ${state.customer.name}`,
        `WhatsApp: ${state.customer.whatsapp}`,
        `E-mail: ${state.customer.email}`,
        `Cidade/UF: ${state.customer.city}`,
      ].join("\n")
    : "";

  const checkoutLines = Object.keys(checkout).length
    ? [
        "",
        "Entrega e pagamento:",
        `CPF/CNPJ: ${checkout.document || "A informar"}`,
        `CEP: ${checkout.zipCode || "A informar"}`,
        `Endereço: ${checkoutAddressLine(checkout)}`,
        `Bairro: ${checkout.district || "A informar"}`,
        `Cidade/UF: ${checkoutCityUf(checkout)}`,
        `Pagamento: ${checkout.payment || "A combinar"}`,
        `Observação da máquina: ${checkout.machineNote || "Sem observação"}`,
        "Frete e prazo: a confirmar após análise do endereço e transportadora.",
      ].join("\n")
    : "";

  const total = state.cart.length ? `\n\nTotal estimado: ${money(cartTotal())}` : "";

  return `${intro}${orderLine}\n${list}${total}${customer}${checkoutLines}`;
}

function renderProducts() {
  const term = state.search.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesFilter =
      state.filter === "todos" ||
      product.category === state.filter ||
      (state.filter === "jd" && /(^|[\\s,/])s\\d{3}|sts/i.test(product.compatibility)) ||
      (state.filter === "plataforma" && product.category === "dedos") ||
      (state.filter === "confirmar" && product.compatibility.toLowerCase().includes("sob consulta"));
    const matchesSearch =
      !term ||
      `${product.name} ${product.spec} ${product.tag} ${product.code} ${product.compatibility} ${product.application} ${product.quantity} ${product.note}`
        .toLowerCase()
        .includes(term);
    return matchesFilter && matchesSearch;
  });

  const productCard = (product) => `
        <article class="product-card" data-category="${product.category}" data-product-id="${product.id}">
          <div class="product-visual">
            <img src="${product.image}" alt="${product.alt}" loading="lazy" />
          </div>
          <div>
            <span class="tag">${product.tag}</span>
            <h3>${product.name}</h3>
            <strong class="product-code">${product.code}</strong>
            <dl class="product-details">
              <div>
                <dt>Aplicação/máquina</dt>
                <dd>${product.application}</dd>
              </div>
              <div>
                <dt>Compatível com</dt>
                <dd>${product.compatibility}</dd>
              </div>
              <div>
                <dt>Quantidade</dt>
                <dd>${product.quantity}</dd>
              </div>
            </dl>
            <p>${product.spec}</p>
            ${product.quantity === "Kit com 3 peças" ? `<p class="product-note">Kit com 3 peças</p>` : ""}
          </div>
          <div class="product-meta">
            <strong class="price">${money(product.price)}</strong>
          </div>
          <div class="card-actions">
            <label class="quantity-field">
              <span>Quantidade</span>
              <input type="number" min="1" step="1" value="1" inputmode="numeric" data-quantity="${product.id}" />
            </label>
            <button class="button primary" type="button" data-add="${product.id}">Adicionar ao pedido</button>
          </div>
        </article>
      `;

  const visibleFamilies = catalogFamilies
    .map((family) => ({
      ...family,
      products: filtered.filter((product) => product.category === family.category),
    }))
    .filter((family) => family.products.length);

  productGrid.innerHTML = visibleFamilies
    .map(
      (family) => `
        <section class="catalog-family" aria-labelledby="family-${family.category}">
          <div class="family-heading">
            <div>
              <p class="eyebrow">${family.products.length} ${family.products.length > 1 ? "itens" : "item"}</p>
              <h3 id="family-${family.category}">${family.title}</h3>
            </div>
            <p>${family.description}</p>
          </div>
          <div class="family-grid">
            ${family.products.map(productCard).join("")}
          </div>
        </section>
      `
    )
    .join("");

  if (!filtered.length) {
    productGrid.innerHTML = `<p class="cart-empty">Nenhuma peça encontrada com esse filtro.</p>`;
  }
}

function renderCart() {
  cartCount.textContent = state.cart.reduce((total, item) => total + item.amount, 0);
  cartEmpty.textContent = state.lastOrderId
    ? `Pedido ${state.lastOrderId} enviado. Seu carrinho está vazio.`
    : "Seu carrinho ainda está vazio.";
  cartEmpty.hidden = state.cart.length > 0;
  customerSummary.innerHTML = state.customer
    ? `<strong>Pedido vinculado a ${state.customer.name}</strong>${state.customer.city} | ${state.customer.whatsapp}`
    : `<strong>Conta necessária para finalizar</strong>Entre ou crie uma conta para salvar o pedido no seu cadastro.`;

  cartItems.innerHTML = state.cart
    .map(
      (item) => `
        <div class="cart-line">
          <div>
            <strong>${item.name}</strong>
            <div class="cart-line-meta">
              <span>Código ${item.code}</span>
              <span>${productType(item)}</span>
              <span>${money(item.price)} cada</span>
            </div>
            <div class="cart-stepper" aria-label="Quantidade de ${item.name}">
              <button type="button" aria-label="Diminuir ${item.name}" data-decrease="${item.id}">-</button>
              <strong>${quantityLabel(item, item.amount)}</strong>
              <button type="button" aria-label="Aumentar ${item.name}" data-increase="${item.id}">+</button>
            </div>
            <strong class="cart-line-total">${money(itemSubtotal(item))}</strong>
          </div>
          <button type="button" aria-label="Remover ${item.name}" data-remove="${item.id}">x</button>
        </div>
      `
    )
    .join("");

  if (state.cart.length) {
    cartItems.innerHTML += `
      <div class="cart-total">
        <span>Total estimado</span>
        <strong>${money(cartTotal())}</strong>
      </div>
    `;
  }

  cartWhatsApp.href = whatsappUrl(cartMessage());
}

function openCart() {
  cartPanel.classList.add("open");
  overlay.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartPanel.classList.remove("open");
  if (
    !productModal.classList.contains("open") &&
    !accountModal.classList.contains("open") &&
    !ordersModal.classList.contains("open") &&
    !confirmationModal.classList.contains("open")
  ) {
    overlay.classList.remove("open");
  }
  cartPanel.setAttribute("aria-hidden", "true");
}

function openProductDetail(product) {
  productDetail.innerHTML = `
    <div class="product-detail">
      <div class="product-detail-visual">
        <img src="${product.image}" alt="${product.alt}" />
      </div>
      <div class="product-detail-content">
        <span class="tag">${product.tag}</span>
        <h2>${product.name}</h2>
        <strong class="product-code">${product.code}</strong>
        <strong class="price product-detail-price">${money(product.price)}</strong>
        <p>${product.spec}</p>
        <dl class="product-details product-detail-list">
          <div>
            <dt>Compatível com</dt>
            <dd>${product.compatibility}</dd>
          </div>
          <div>
            <dt>Aplicação/máquina</dt>
            <dd>${product.application}</dd>
          </div>
          <div>
            <dt>Quantidade</dt>
            <dd>${product.quantity}</dd>
          </div>
        </dl>
        ${product.quantity === "Kit com 3 peças" ? `<p class="product-note">Kit com 3 peças</p>` : ""}
        <a class="button secondary" href="${whatsappUrl(productMessage(product))}" target="_blank" rel="noreferrer">Falar com vendedor</a>
      </div>
    </div>
  `;
  productModal.classList.add("open");
  overlay.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
}

function closeProductDetail() {
  productModal.classList.remove("open");
  if (
    !cartPanel.classList.contains("open") &&
    !accountModal.classList.contains("open") &&
    !ordersModal.classList.contains("open") &&
    !confirmationModal.classList.contains("open")
  ) {
    overlay.classList.remove("open");
  }
  productModal.setAttribute("aria-hidden", "true");
  productDetail.innerHTML = "";
}

function openAccountModal(tab = "register", intent = "checkout") {
  state.accountIntent = intent;
  setAccountTab(tab);
  accountModal.classList.add("open");
  overlay.classList.add("open");
  accountModal.setAttribute("aria-hidden", "false");
}

function closeAccountModal() {
  accountModal.classList.remove("open");
  if (
    !cartPanel.classList.contains("open") &&
    !productModal.classList.contains("open") &&
    !ordersModal.classList.contains("open") &&
    !confirmationModal.classList.contains("open")
  ) {
    overlay.classList.remove("open");
  }
  accountModal.setAttribute("aria-hidden", "true");
}

function setAccountTab(tab) {
  checkoutForm.hidden = true;
  orderReview.hidden = true;
  document.querySelectorAll("[data-account-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.accountTab === tab);
  });

  document.querySelectorAll("[data-account-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.accountPanel !== tab;
  });
}

function showCheckoutForm() {
  document.querySelectorAll("[data-account-panel]").forEach((panel) => {
    panel.hidden = true;
  });
  document.querySelectorAll("[data-account-tab]").forEach((button) => button.classList.remove("active"));
  checkoutForm.hidden = false;
  orderReview.hidden = true;
  accountStatus.textContent = "Complete os dados de entrega, pagamento e máquina para finalizar.";
}

function showOrderReview(checkout) {
  checkoutForm.hidden = true;
  orderReview.hidden = false;
  orderReview.dataset.checkout = JSON.stringify(checkout);
  accountStatus.textContent = "Revise os dados antes de confirmar o pedido.";

  orderReview.innerHTML = `
    <div class="checkout-title">
      <strong>Resumo final do pedido</strong>
      <span>Confira as informações antes de enviar.</span>
    </div>
    <div class="review-block">
      <strong>Itens</strong>
      <ul>
        ${state.cart
          .map(
            (item) =>
              `<li>${quantityLabel(item, item.amount)} - ${item.code} | ${item.name} | ${money(itemSubtotal(item))}</li>`
          )
          .join("")}
      </ul>
    </div>
    <div class="review-total">
      <span>Total estimado</span>
      <strong>${money(cartTotal())}</strong>
    </div>
    <div class="review-block">
      <strong>Cliente</strong>
      <p>${state.customer.name} | ${state.customer.whatsapp}</p>
      <p>${state.customer.email} | ${state.customer.city}</p>
    </div>
    <div class="review-block">
      <strong>Entrega e pagamento</strong>
      <p>CPF/CNPJ: ${checkout.document}</p>
      <p>CEP: ${checkout.zipCode}</p>
      <p>Endereço: ${checkoutAddressLine(checkout)}</p>
      <p>Bairro: ${checkout.district}</p>
      <p>Cidade/UF: ${checkoutCityUf(checkout)}</p>
      <p>Pagamento: ${checkout.payment}</p>
      <p>Máquina/observação: ${checkout.machineNote || "Sem observação"}</p>
      <p>Frete e prazo serão confirmados após análise do endereço e transportadora.</p>
    </div>
    <div class="review-actions">
      <button class="button secondary" type="button" data-edit-checkout>Editar dados</button>
      <button class="button primary" type="button" data-confirm-order>Confirmar pedido</button>
    </div>
  `;
}

function renderClientOrders(orders) {
  if (!orders.length) {
    clientOrders.innerHTML = `
      <div class="client-order empty-state">
        <strong>Nenhum pedido enviado ainda</strong>
        <p>Quando você confirmar uma compra pelo site, ela sai do carrinho e aparece aqui com o status.</p>
      </div>
    `;
    return;
  }

  clientOrders.innerHTML = orders
    .map(
      (order) => `
        <article class="client-order">
          <div>
            <span class="order-date">${formatDate(order.createdAt)}</span>
            <h3>Pedido ${order.id}</h3>
            <p>${order.items.length} ${order.items.length === 1 ? "item" : "itens"} | Total ${money(order.total)}</p>
          </div>
          <strong class="client-order-status">${orderStatusLabel(order.status)}</strong>
          <ul>
            ${order.items
              .map(
                (item) => `
                  <li>
                    ${item.amount}x ${item.code} - ${item.name}
                  </li>
                `
              )
              .join("")}
          </ul>
          <p class="client-order-note">
            Frete, prazo e compatibilidade seguem para confirmação quando necessário.
          </p>
        </article>
      `
    )
    .join("");
}

async function openOrdersModal() {
  if (!state.customer) {
    openAccountModal("login", "orders");
    accountStatus.textContent = "Entre para visualizar seus pedidos enviados.";
    return;
  }

  ordersModal.classList.add("open");
  overlay.classList.add("open");
  ordersModal.setAttribute("aria-hidden", "false");
  clientOrders.innerHTML = `<p class="cart-empty">Carregando pedidos...</p>`;

  const orders = await window.VFStore.readCustomerOrders(state.customer);
  renderClientOrders(orders);
}

function closeOrdersModal() {
  ordersModal.classList.remove("open");
  if (
    !cartPanel.classList.contains("open") &&
    !productModal.classList.contains("open") &&
    !accountModal.classList.contains("open") &&
    !confirmationModal.classList.contains("open")
  ) {
    overlay.classList.remove("open");
  }
  ordersModal.setAttribute("aria-hidden", "true");
}

function closeConfirmationModal() {
  confirmationModal.classList.remove("open");
  if (
    !cartPanel.classList.contains("open") &&
    !productModal.classList.contains("open") &&
    !accountModal.classList.contains("open") &&
    !ordersModal.classList.contains("open")
  ) {
    overlay.classList.remove("open");
  }
  confirmationModal.setAttribute("aria-hidden", "true");
}

function openOrderConfirmation(order, checkout, whatsappMessage) {
  confirmationDetail.innerHTML = `
    <div class="confirmation-hero">
      <span class="confirmation-mark" aria-hidden="true">OK</span>
      <p class="eyebrow">Pedido recebido</p>
      <h2>Seu pedido foi enviado com sucesso.</h2>
      <p>
        Recebemos sua solicitação e vamos conferir compatibilidade, frete e prazo
        antes do envio.
      </p>
    </div>
    <div class="confirmation-summary">
      <div>
        <span>Número do pedido</span>
        <strong>${order.id}</strong>
      </div>
      <div>
        <span>Total estimado</span>
        <strong>${money(order.total)}</strong>
      </div>
    </div>
    <div class="confirmation-block">
      <strong>Itens do pedido</strong>
      <ul>
        ${order.items
          .map((item) => `<li>${item.amount}x ${item.code} - ${item.name}</li>`)
          .join("")}
      </ul>
    </div>
    <div class="confirmation-steps">
      <strong>Próximos passos</strong>
      <ol>
        <li>Vamos analisar os dados do pedido e a compatibilidade das peças.</li>
        <li>Frete e prazo serão confirmados após análise do endereço e transportadora.</li>
        <li>Se necessário, um vendedor chama você pelo WhatsApp para confirmar detalhes.</li>
      </ol>
    </div>
    <div class="confirmation-actions">
      <button class="button primary" type="button" data-view-orders>Ver meus pedidos</button>
      <a class="button secondary" href="${whatsappUrl(whatsappMessage)}" target="_blank" rel="noreferrer">
        Falar no WhatsApp
      </a>
    </div>
  `;

  confirmationModal.classList.add("open");
  overlay.classList.add("open");
  confirmationModal.setAttribute("aria-hidden", "false");
}

function submitFinalOrder(checkout = {}) {
  if (!state.cart.length) {
    openCart();
    return;
  }

  if (!state.customer) {
    openAccountModal("register", "checkout");
    return;
  }

  const order = saveOrderSnapshot(checkout);
  const whatsappMessage = cartMessage("pedido", order.id, checkout);
  state.cart = [];
  state.lastOrderId = order.id;
  closeAccountModal();
  renderCart();
  openOrderConfirmation(order, checkout, whatsappMessage);
}

document.addEventListener("click", (event) => {
  const addId = event.target.closest("[data-add]")?.dataset.add;
  const removeId = event.target.closest("[data-remove]")?.dataset.remove;
  const increaseId = event.target.closest("[data-increase]")?.dataset.increase;
  const decreaseId = event.target.closest("[data-decrease]")?.dataset.decrease;
  const productCard = event.target.closest(".product-card");

  if (
    productCard &&
    !event.target.closest("a, button, input, label") &&
    !event.target.closest(".card-actions")
  ) {
    const product = products.find((item) => item.id === productCard.dataset.productId);
    if (product) openProductDetail(product);
  }

  if (addId) {
    const product = products.find((item) => item.id === addId);
    const quantityInput = document.querySelector(`[data-quantity="${addId}"]`);
    const amount = Math.max(1, Number.parseInt(quantityInput?.value, 10) || 1);
    const existing = state.cart.find((item) => item.id === addId);

    if (existing) {
      existing.amount += amount;
    } else {
      state.cart.push({ ...product, amount });
    }

    renderCart();
    openCart();
  }

  if (removeId) {
    const index = state.cart.findIndex((item) => item.id === removeId);
    if (index >= 0) state.cart.splice(index, 1);
    renderCart();
  }

  if (increaseId) {
    const item = state.cart.find((product) => product.id === increaseId);
    if (item) item.amount += 1;
    renderCart();
  }

  if (decreaseId) {
    const item = state.cart.find((product) => product.id === decreaseId);
    if (item) item.amount -= 1;
    state.cart = state.cart.filter((product) => product.amount > 0);
    renderCart();
  }

  if (event.target.closest("[data-open-cart]")) openCart();
  if (event.target.closest("[data-open-login]")) {
    if (state.customer) {
      openOrdersModal();
    } else {
      openAccountModal("login", "orders");
      accountStatus.textContent = "Entre para visualizar seus pedidos ou finalizar uma compra.";
    }
  }
  if (event.target.closest("[data-close-cart]")) closeCart();
  if (event.target.closest("[data-close-product]")) closeProductDetail();
  if (event.target.closest("[data-close-account]")) closeAccountModal();
  if (event.target.closest("[data-open-orders]")) openOrdersModal();
  if (event.target.closest("[data-close-orders]")) closeOrdersModal();
  if (event.target.closest("[data-close-confirmation]")) closeConfirmationModal();
  if (event.target.closest("[data-view-orders]")) {
    closeConfirmationModal();
    openOrdersModal();
  }
  if (event.target === overlay) {
    closeCart();
    closeProductDetail();
    closeAccountModal();
    closeOrdersModal();
    closeConfirmationModal();
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((button) => button.classList.remove("active"));
    filterButton.classList.add("active");
    renderProducts();
  }

  if (event.target.closest("[data-send-order]")) {
    submitFinalOrder();
  }

  if (event.target.closest("[data-edit-checkout]")) {
    orderReview.hidden = true;
    checkoutForm.hidden = false;
    accountStatus.textContent = "Ajuste os dados e revise o pedido novamente.";
  }

  if (event.target.closest("[data-confirm-order]")) {
    const checkout = JSON.parse(orderReview.dataset.checkout || "{}");
    submitFinalOrder(checkout);
  }

  const accountTab = event.target.closest("[data-account-tab]")?.dataset.accountTab;
  if (accountTab) {
    setAccountTab(accountTab);
  }
});

document.querySelector("#search").addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProducts();
});

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = whatsappUrl("Olá, quero falar sobre peças agrícolas da VF Peças Agrícolas.");
  link.target = "_blank";
  link.rel = "noreferrer";
});

if (floatingWhatsApp && footer && "IntersectionObserver" in window) {
  const footerObserver = new IntersectionObserver(
    ([entry]) => {
      floatingWhatsApp.classList.toggle("is-hidden", entry.isIntersecting);
    },
    { threshold: 0.08 }
  );

  footerObserver.observe(footer);
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(loginForm);
  const login = data.get("login");
  const saved = readCustomer();

  saveCustomer({
    name: saved?.name || "Cliente VF",
    whatsapp: saved?.whatsapp || login,
    email: saved?.email || login,
    city: saved?.city || "A informar",
  });

  if (state.accountIntent === "orders") {
    closeAccountModal();
    openOrdersModal();
  } else {
    showCheckoutForm();
  }
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(registerForm);

  saveCustomer({
    name: data.get("nome"),
    whatsapp: data.get("whatsapp"),
    email: data.get("email"),
    city: data.get("cidade"),
  });

  if (state.accountIntent === "orders") {
    closeAccountModal();
    openOrdersModal();
  } else {
    showCheckoutForm();
  }
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(checkoutForm);

  const checkout = {
    document: data.get("documento"),
    zipCode: data.get("cep"),
    address: data.get("endereco"),
    number: data.get("numero"),
    district: data.get("bairro"),
    city: data.get("cidade"),
    state: String(data.get("uf") || "").toUpperCase(),
    payment: data.get("pagamento"),
    machineNote: data.get("observacao") || "",
  };

  showOrderReview(checkout);
});

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(quoteForm);
  const message = `Olá, quero um orçamento.\nNome: ${data.get("nome")}\nPerfil: ${data.get("perfil")}\nPeças, códigos ou modelo da máquina: ${data.get("pecas")}`;
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
});

renderProducts();
renderCart();
renderAccountShortcut();
