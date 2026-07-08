const BUSINESS = {
  whatsappNumber: "5545991444489",
};

const products = window.VF_PRODUCTS || [];
const productPage = document.querySelector("[data-product-page]");
const params = new URLSearchParams(window.location.search);
const product = products.find((item) => item.id === params.get("id") || item.code === params.get("codigo"));

function money(value) {
  return Number(value || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function whatsappUrl(message) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function productType(item) {
  return item.quantity === "Kit com 3 peças" ? "Kit" : "Peça";
}

function renderProductPage() {
  if (!product) {
    productPage.innerHTML = `
      <section class="product-page-empty">
        <p class="eyebrow">Produto não encontrado</p>
        <h1>Não encontramos esta peça.</h1>
        <p>Volte ao catálogo para escolher uma peça disponível.</p>
        <a class="button primary" href="index.html#catalogo">Ver catálogo</a>
      </section>
    `;
    return;
  }

  document.title = `${product.name} | VF Peças Agrícolas`;
  document.querySelector('meta[name="description"]').setAttribute(
    "content",
    `${product.name}, código ${product.code}, ${product.note}. Compatível com ${product.compatibility}.`
  );

  const message = [
    "Olá, quero comprar esta peça no site da VF Peças Agrícolas:",
    "",
    `Peça: ${product.name}`,
    `Código: ${product.code}`,
    `Tipo: ${productType(product)}`,
    `Valor: ${money(product.price)}`,
    `Compatível com: ${product.compatibility}`,
    `Aplicação: ${product.application}`,
  ].join("\n");

  productPage.innerHTML = `
    <section class="product-page-hero">
      <div class="product-page-visual">
        <img src="${product.image}" alt="${product.alt}" />
      </div>
      <div class="product-page-content">
        <p class="eyebrow">${product.tag}</p>
        <h1>${product.name}</h1>
        <div class="product-page-code">
          <span>Código</span>
          <strong>${product.code}</strong>
        </div>
        <strong class="price product-page-price">${money(product.price)}</strong>
        <p>${product.spec}</p>
        <dl class="product-details product-page-details">
          <div>
            <dt>Compatível com</dt>
            <dd>${product.compatibility}</dd>
          </div>
          <div>
            <dt>Aplicação</dt>
            <dd>${product.application}</dd>
          </div>
          <div>
            <dt>Quantidade</dt>
            <dd>${product.quantity}</dd>
          </div>
          <div>
            <dt>Observação</dt>
            <dd>${product.note}</dd>
          </div>
        </dl>
        <div class="product-page-actions">
          <a class="button primary" href="index.html#catalogo">Adicionar pelo catálogo</a>
          <a class="button secondary" href="${whatsappUrl(message)}" target="_blank" rel="noreferrer">Falar no WhatsApp</a>
        </div>
      </div>
    </section>
  `;
}

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = whatsappUrl("Olá, quero falar sobre peças agrícolas da VF Peças Agrícolas.");
  link.target = "_blank";
  link.rel = "noreferrer";
});

renderProductPage();
