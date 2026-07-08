const FLOW_WHATSAPP = "5545991444489";

const flowSteps = [
  {
    id: "plataforma",
    label: "Plataforma",
    kicker: "Etapa 01",
    title: "A cultura entra pela plataforma",
    text:
      "A plataforma é o ponto inicial do processo. É nela que a cultura é captada e conduzida para dentro da máquina.",
    relatedGroups: [],
    regionTitle: "Plataforma de corte",
    regionText: "A cultura é captada na frente da máquina e começa a ser direcionada para o alimentador.",
    regionType: "platform",
  },
  {
    id: "dedos",
    label: "Dedos",
    kicker: "Etapa 02",
    title: "Dedos da plataforma em destaque",
    text:
      "Os dedos da plataforma ajudam na condução do material, sendo componentes importantes na entrada e alimentação inicial.",
    relatedGroups: ["Plataforma"],
    regionTitle: "Dedos da plataforma",
    regionText: "Os dedos ficam distribuídos na barra da plataforma e ajudam a guiar a cultura no início do fluxo.",
    regionType: "fingers",
  },
  {
    id: "alimentacao",
    label: "Alimentação",
    kicker: "Etapa 03",
    title: "Material sendo puxado para dentro",
    text:
      "Depois do corte, o material é conduzido pelo alimentador para a parte interna da colheitadeira. Um fluxo regular reduz acúmulo e melhora a continuidade da operação.",
    relatedGroups: [],
    regionTitle: "Alimentador interno",
    regionText: "O material sai da plataforma e sobe pelo canal de alimentação até chegar aos conjuntos internos.",
    regionType: "feed",
  },
  {
    id: "rotor",
    label: "Rotor",
    kicker: "Etapa 04",
    title: "Rotor / trilha",
    text:
      "No rotor acontece uma das etapas mais importantes do processamento. É uma região de alto desgaste, por isso os kits de reparo são peças estratégicas para manutenção e reposição.",
    relatedGroups: ["Rotor"],
    regionTitle: "Rotor / trilha",
    regionText: "Região central de processamento, com alto desgaste e necessidade de manutenção bem acompanhada.",
    regionType: "rotor",
  },
  {
    id: "batedor",
    label: "Batedor",
    kicker: "Etapa 05",
    title: "Batedor e capas em destaque",
    text:
      "O batedor auxilia na continuidade do fluxo interno do material. As capas do batedor são peças importantes para proteção, condução e funcionamento adequado dessa região.",
    relatedGroups: ["Batedor"],
    regionTitle: "Batedor",
    regionText: "Ponto de continuidade do fluxo após a trilha, com peças aplicadas na proteção e condução do conjunto.",
    regionType: "batedor",
  },
  {
    id: "limpeza",
    label: "Separação e limpeza",
    kicker: "Etapa 06",
    title: "Separação e limpeza",
    text:
      "Nessa etapa, a máquina realiza a separação do grão e dos resíduos, conduzindo o material para as próximas fases do processo.",
    relatedGroups: [],
    regionTitle: "Peneira / separação / limpeza",
    regionText: "O fluxo desce para a parte inferior, onde grãos, palha e resíduos são separados e conduzidos.",
    regionType: "cleaning",
  },
  {
    id: "saida",
    label: "Saída",
    kicker: "Etapa 07",
    title: "Saída e visão geral do caminho",
    text:
      "Depois do processamento, o grão segue para armazenamento/descarga e a palha ou resíduo segue para a saída da máquina.",
    relatedGroups: [],
    regionTitle: "Saída do fluxo",
    regionText: "A apresentação fecha mostrando o caminho completo percorrido pelo material dentro da máquina.",
    regionType: "exit",
  },
];

const featuredParts = [
  {
    id: "capa-batedor-ah234023",
    productId: "capa-batedor-9470-ah234023",
    name: "Capa do batedor",
    code: "AH234023",
    group: "Batedor",
    application: "JD 9470 | STS 9470, STS 9570, S540, S550",
    function:
      "Peça alternativa/similar aplicada na região do batedor, ponto importante para proteção e condução do material.",
    image: "assets/products/capa-batedor-9470-ah234023.png",
    position: { x: 40, y: 46 },
    tone: "batedor",
    emphasis: true,
  },
  {
    id: "capa-batedor-ah214671",
    productId: "capa-batedor-jd-9670-ah214671",
    name: "Capa do batedor",
    code: "AH214671",
    group: "Batedor",
    application: "JD 9670 | STS 9670, STS 9770 e Série S",
    function:
      "Item de reposição similar à original aplicado no batedor para auxiliar proteção, durabilidade e continuidade do fluxo interno.",
    image: "assets/products/capa-batedor-jd-9670-ah214671.png",
    position: { x: 44, y: 43 },
    tone: "batedor",
    emphasis: true,
  },
  {
    id: "kit-reparo-rotor-ah219761",
    productId: "kit-reparo-rotor-dianteiro-ah219761",
    name: "Kit reparo do rotor dianteiro",
    code: "AH219761",
    group: "Rotor",
    application: "JD 9470 | STS 9470, STS 9570, S540, S550",
    function:
      "Kit com 3 peças para manutenção da região dianteira do rotor, um dos principais pontos de desgaste da máquina.",
    image: "assets/products/kit-reparo-jd-9470-diant-ah219761-1.png",
    position: { x: 52, y: 50 },
    tone: "rotor",
    emphasis: true,
  },
  {
    id: "kit-reparo-rotor-ah219762",
    productId: "kit-reparo-rotor-traseiro-ah219762",
    name: "Kit reparo do rotor traseiro",
    code: "AH219762",
    group: "Rotor",
    application: "JD 9470 | STS 9470, STS 9570, S430, S440, S540, S550",
    function:
      "Kit de reposição aplicado na região traseira do rotor para recuperação e manutenção do sistema.",
    image: "assets/products/kit-reparo-jd-9470-tras-ah219762.png",
    position: { x: 59, y: 48 },
    tone: "rotor",
    emphasis: true,
  },
  {
    id: "kit-reparo-rotor-ah216568",
    productId: "kit-reparo-rotor-dianteiro-ah216568",
    name: "Kit reparo do rotor dianteiro",
    code: "AH216568",
    group: "Rotor",
    application: "JD 9650/9670 | STS 9650, 9670, 9750, 9770 e Série S",
    function:
      "Conjunto similar à original para reparo dianteiro do rotor em aplicações STS e Série S compatíveis.",
    image: "assets/products/kit-reparo-jd-9670-diant-ah216568.png",
    position: { x: 55, y: 42 },
    tone: "rotor",
    emphasis: true,
  },
  {
    id: "kit-reparo-rotor-ah216569",
    productId: "kit-reparo-rotor-traseiro-ah216569",
    name: "Kit reparo do rotor traseiro",
    code: "AH216569",
    group: "Rotor",
    application: "JD 9650/9670 | STS 9650, 9670, 9750, 9770 e Série S",
    function:
      "Item de reposição para a região traseira do rotor, indicado para manutenção em ponto de alto desgaste.",
    image: "assets/products/kit-reparo-jd-9670-tras-ah216569.png",
    position: { x: 64, y: 52 },
    tone: "rotor",
    emphasis: true,
  },
  {
    id: "dedo-plataforma-6286531",
    productId: "dedo-plataforma-lateral-6286531",
    name: "Dedo da plataforma lateral",
    code: "6286531",
    group: "Plataforma",
    application: "Plataforma de corte | Lateral",
    function:
      "Peça alternativa para reposição lateral da plataforma, ajudando na condução uniforme da cultura no corte.",
    image: "assets/products/dedo-grosso-6286531.png",
    position: { x: 11, y: 70 },
    tone: "plataforma",
    emphasis: true,
  },
  {
    id: "dedo-plataforma-6286532",
    productId: "dedo-plataforma-central-6286532",
    name: "Dedo da plataforma central",
    code: "6286532",
    group: "Plataforma",
    application: "Plataforma de corte | Central",
    function:
      "Dedo central para reposição na plataforma, com função importante na alimentação uniforme do material.",
    image: "assets/products/dedo-duplo-6286532.png",
    position: { x: 18, y: 66 },
    tone: "plataforma",
    emphasis: true,
  },
  {
    id: "dedo-plataforma-6308502",
    productId: "dedo-plataforma-menor-6308502",
    name: "Dedo da plataforma menor",
    code: "6308502",
    group: "Plataforma",
    application: "Plataforma de corte | Início/enrosação",
    function:
      "Peça alternativa de reposição para aplicação no início/enrosação da plataforma. Código encontrado no cadastro atual como 6308502.",
    image: "assets/products/dedo-corte-lateral-6308502.png",
    position: { x: 25, y: 67 },
    tone: "plataforma",
    emphasis: true,
  },
];

const flowRoot = document.querySelector("[data-machine-flow]");
const flowStage = document.querySelector("[data-flow-stage]");
const hotspotLayer = document.querySelector("[data-flow-hotspots]");
const timeline = document.querySelector("[data-flow-timeline]");
const featuredGrid = document.querySelector("[data-featured-parts]");
const mobileSequence = document.querySelector(".machine-mobile-sequence");
const partCard = document.querySelector("[data-active-part-card]");
const regionVisual = document.querySelector("[data-region-visual]");
const regionTitle = document.querySelector("[data-region-title]");
const regionText = document.querySelector("[data-region-text]");
const stepKicker = document.querySelector("[data-step-kicker]");
const stepTitle = document.querySelector("[data-step-title]");
const stepText = document.querySelector("[data-step-text]");
const startButton = document.querySelector("[data-flow-start]");
const playButton = document.querySelector("[data-flow-play]");
const nextButton = document.querySelector("[data-flow-next]");
const prevButton = document.querySelector("[data-flow-prev]");

let activeStepIndex = 0;
let activePartId = featuredParts[0].id;
let playTimer = null;

function quoteUrl(message) {
  return `https://wa.me/${FLOW_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function productUrl(part) {
  return `produto.html?id=${part.productId}`;
}

function quoteMessage(part) {
  return `Olá, quero solicitar orçamento da peça ${part.name} código ${part.code}. Aplicação: ${part.application}.`;
}

function partsForStep(step) {
  return featuredParts.filter((part) => step.relatedGroups.includes(part.group));
}

function renderStepParts(parts, step) {
  if (!parts.length) {
    renderPartCard({
      id: "general",
      name: step.title,
      code: "Fluxo",
      group: "Processo",
      application: step.label,
      function: step.text,
      productId: "",
      tone: "neutral",
    });
    return;
  }

  partCard.innerHTML = `
    <p class="eyebrow">Peças VF nesta etapa</p>
    <h3>${step.label}</h3>
    <p class="machine-part-note">O fluxo chegou nesta região. Primeiro identifique o local na máquina; depois confira os itens aplicados aqui.</p>
    <div class="machine-stage-parts">
      ${parts
        .map(
          (part) => `
            <button class="${part.id === activePartId ? "active" : ""}" type="button" data-stage-part="${part.id}">
              <img src="${part.image}" alt="" aria-hidden="true" loading="lazy" />
              <span>
                <b>${part.name}</b>
                <small>${part.code}</small>
              </span>
            </button>
          `
        )
        .join("")}
    </div>
    <div class="machine-panel-actions">
      <a class="button primary" href="${quoteUrl(`Olá, quero orçamento das peças da etapa ${step.label} no Fluxo da Máquina da VF.`)}" target="_blank" rel="noreferrer">Solicitar orçamento</a>
    </div>
  `;
}

function setWhatsAppLinks() {
  document.querySelectorAll("[data-flow-whatsapp]").forEach((link) => {
    const message = link.dataset.message || "Olá, quero falar com a VF Peças Agrícolas.";
    link.href = quoteUrl(message);
    link.target = "_blank";
    link.rel = "noreferrer";
  });
}

function renderTimeline() {
  timeline.innerHTML = flowSteps
    .map(
      (step, index) => `
        <li>
          <button type="button" data-flow-step="${index}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            ${step.label}
          </button>
        </li>
      `
    )
    .join("");
}

function renderHotspots() {
  hotspotLayer.innerHTML = featuredParts
    .map(
      (part) => `
        <button
          class="machine-hotspot tone-${part.tone}"
          style="left: ${part.position.x}%; top: ${part.position.y}%"
          type="button"
          data-part-id="${part.id}"
          aria-label="${part.name} ${part.code}"
        >
          <span aria-hidden="true"></span>
        </button>
      `
    )
    .join("");
}

function renderPartCard(part) {
  const actions = part.productId
    ? `
      <a class="button primary" href="${quoteUrl(quoteMessage(part))}" target="_blank" rel="noreferrer">Solicitar orçamento</a>
      <a class="button secondary" href="${quoteUrl(`Olá, quero falar no WhatsApp sobre a peça ${part.code}.`)}" target="_blank" rel="noreferrer">Falar no WhatsApp</a>
      <a class="button secondary" href="${productUrl(part)}">Ver peça</a>
    `
    : `
      <a class="button primary" href="${quoteUrl("Olá, quero falar com a VF sobre peças aplicadas no fluxo da colheitadeira.")}" target="_blank" rel="noreferrer">Falar com especialista</a>
      <a class="button secondary" href="index.html#catalogo">Ver catálogo</a>
    `;

  partCard.innerHTML = `
    <p class="eyebrow">${part.group} | ${part.code}</p>
    <div class="machine-part-visual">
      ${part.image ? `<img src="${part.image}" alt="${part.name} ${part.code}" loading="lazy" />` : `<span>${part.group}</span>`}
    </div>
    <h3>${part.name}</h3>
    <dl>
      <div>
        <dt>Onde fica</dt>
        <dd>${part.application}</dd>
      </div>
      <div>
        <dt>Função</dt>
        <dd>${part.function}</dd>
      </div>
      <div>
        <dt>Código</dt>
        <dd>${part.code}</dd>
      </div>
    </dl>
    <p class="machine-part-note">Peça alternativa / similar à original. Confirme aplicação pelo modelo da máquina antes do envio.</p>
    <div class="machine-panel-actions">
      ${actions}
    </div>
  `;
}

function renderFeaturedCards() {
  featuredGrid.innerHTML = featuredParts
    .map(
      (part) => `
        <article class="machine-feature-card tone-${part.tone}">
          <img src="${part.image}" alt="${part.name} ${part.code}" loading="lazy" />
          <span>${part.group}</span>
          <h3>${part.name}</h3>
          <strong>${part.code}</strong>
          <p><b>Aplicação:</b> ${part.application}</p>
          <p><b>Função:</b> ${part.function}</p>
          <a class="button primary" href="${quoteUrl(quoteMessage(part))}" target="_blank" rel="noreferrer">Orçar esta peça</a>
        </article>
      `
    )
    .join("");
}

function renderMobileSequence() {
  mobileSequence.innerHTML = flowSteps
    .map(
      (step, index) => {
        const parts = partsForStep(step);
        const partsMarkup = parts.length
          ? `
            <div class="machine-mobile-parts">
              ${parts
                .map(
                  (part) => `
                    <a href="${quoteUrl(quoteMessage(part))}" target="_blank" rel="noreferrer">
                      <img src="${part.image}" alt="" aria-hidden="true" loading="lazy" />
                      <span>
                        <b>${part.name}</b>
                        <small>${part.code}</small>
                      </span>
                    </a>
                  `
                )
                .join("")}
            </div>
          `
          : "";

        return `
        <article>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <h2>${step.title}</h2>
          <strong>${step.regionTitle}</strong>
          <p>${step.text}</p>
          ${partsMarkup}
        </article>
      `;
      }
    )
    .join("");
}

function renderRegion(step) {
  if (!regionVisual || !regionTitle || !regionText) return;
  regionVisual.className = `machine-region-visual region-${step.regionType}`;
  regionVisual.innerHTML = `
    <span>${step.regionTitle}</span>
    <i></i>
  `;
  regionTitle.textContent = step.regionTitle;
  regionText.textContent = step.regionText;
}

function setActivePart(partId) {
  const part = featuredParts.find((item) => item.id === partId) || featuredParts[0];
  activePartId = part.id;
  renderPartCard(part);
  document.querySelectorAll("[data-part-id]").forEach((hotspot) => {
    hotspot.classList.toggle("active", hotspot.dataset.partId === part.id);
  });
}

function setStep(index, options = {}) {
  activeStepIndex = Math.max(0, Math.min(flowSteps.length - 1, Number(index) || 0));
  const step = flowSteps[activeStepIndex];
  const relatedParts = partsForStep(step);

  flowStage.dataset.step = step.id;
  stepKicker.textContent = step.kicker;
  stepTitle.textContent = step.title;
  stepText.textContent = step.text;
  renderRegion(step);

  document.querySelectorAll("[data-flow-step]").forEach((button) => {
    const isActive = Number(button.dataset.flowStep) === activeStepIndex;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-current", isActive ? "step" : "false");
  });

  document.querySelectorAll("[data-part-id]").forEach((hotspot) => {
    const part = featuredParts.find((item) => item.id === hotspot.dataset.partId);
    const isRelated = part && step.relatedGroups.includes(part.group);
    hotspot.classList.toggle("related", Boolean(isRelated));
  });

  if (relatedParts.length && !options.keepPart) {
    activePartId = relatedParts[0].id;
    renderStepParts(relatedParts, step);
    document.querySelectorAll("[data-part-id]").forEach((hotspot) => {
      hotspot.classList.toggle("active", hotspot.dataset.partId === activePartId);
    });
  } else if (!options.keepPart) {
    renderStepParts([], step);
    document.querySelectorAll("[data-part-id]").forEach((hotspot) => hotspot.classList.remove("active"));
  }

  if (prevButton) prevButton.disabled = activeStepIndex === 0;
  if (nextButton) nextButton.textContent = activeStepIndex === flowSteps.length - 1 ? "Reiniciar" : "Avançar";
}

function stopAutoPlay() {
  if (playTimer) window.clearInterval(playTimer);
  playTimer = null;
  if (playButton) playButton.textContent = "Assistir automático";
}

function nextStep() {
  if (activeStepIndex >= flowSteps.length - 1) {
    setStep(0);
    return;
  }
  setStep(activeStepIndex + 1);
}

function previousStep() {
  setStep(activeStepIndex - 1);
}

function startAutoPlay() {
  stopAutoPlay();
  playButton.textContent = "Pausar automático";
  playTimer = window.setInterval(() => {
    if (activeStepIndex >= flowSteps.length - 1) {
      stopAutoPlay();
      return;
    }
    nextStep();
  }, 4700);
}

renderTimeline();
renderHotspots();
renderFeaturedCards();
renderMobileSequence();
setWhatsAppLinks();
setStep(0);

timeline.addEventListener("click", (event) => {
  const button = event.target.closest("[data-flow-step]");
  if (!button) return;
  stopAutoPlay();
  setStep(button.dataset.flowStep);
});

hotspotLayer.addEventListener("click", (event) => {
  const button = event.target.closest("[data-part-id]");
  if (!button) return;
  stopAutoPlay();
  const part = featuredParts.find((item) => item.id === button.dataset.partId);
  if (part) {
    const stepIndex = flowSteps.findIndex((step) => step.relatedGroups.includes(part.group));
    if (stepIndex >= 0) setStep(stepIndex, { keepPart: true });
    setActivePart(part.id);
  }
});

partCard.addEventListener("click", (event) => {
  const button = event.target.closest("[data-stage-part]");
  if (!button) return;
  stopAutoPlay();
  setActivePart(button.dataset.stagePart);
});

startButton?.addEventListener("click", () => {
  stopAutoPlay();
  setStep(0);
  flowRoot?.scrollIntoView({ behavior: "smooth", block: "start" });
});

playButton?.addEventListener("click", () => {
  if (playTimer) {
    stopAutoPlay();
    return;
  }
  startAutoPlay();
});

nextButton?.addEventListener("click", () => {
  stopAutoPlay();
  nextStep();
});

prevButton?.addEventListener("click", () => {
  stopAutoPlay();
  previousStep();
});
