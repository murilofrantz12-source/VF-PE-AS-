const FLOW_WHATSAPP = "5545991444489";

const featuredParts = [
  {
    id: "dedo-plataforma-6286531",
    productId: "dedo-plataforma-lateral-6286531",
    name: "Dedo da plataforma lateral",
    code: "6286531",
    group: "Dedos",
    region: "Plataforma de corte | lateral",
    description: "Ajuda na condução da cultura na lateral da plataforma durante a alimentação inicial.",
    image: "assets/products/dedo-grosso-6286531.png",
  },
  {
    id: "dedo-plataforma-6286532",
    productId: "dedo-plataforma-central-6286532",
    name: "Dedo da plataforma central",
    code: "6286532",
    group: "Dedos",
    region: "Plataforma de corte | central",
    description: "Item de reposição aplicado na região central da plataforma para condução uniforme do material.",
    image: "assets/products/dedo-duplo-6286532.png",
  },
  {
    id: "dedo-plataforma-6308502",
    productId: "dedo-plataforma-menor-6308502",
    name: "Dedo da plataforma menor",
    code: "6308502",
    group: "Dedos",
    region: "Plataforma de corte | início/enrosação",
    description: "Peça alternativa para aplicação no início da plataforma, auxiliando a entrada do material.",
    image: "assets/products/dedo-corte-lateral-6308502.png",
  },
  {
    id: "kit-reparo-rotor-ah219761",
    productId: "kit-reparo-rotor-dianteiro-ah219761",
    name: "Kit reparo do rotor dianteiro",
    code: "AH219761",
    group: "Rotor",
    region: "Rotor | dianteiro | JD 9470",
    description: "Kit com 3 peças para manutenção na região dianteira do rotor, ponto importante de desgaste.",
    image: "assets/products/kit-reparo-jd-9470-diant-ah219761-1.png",
  },
  {
    id: "kit-reparo-rotor-ah219762",
    productId: "kit-reparo-rotor-traseiro-ah219762",
    name: "Kit reparo do rotor traseiro",
    code: "AH219762",
    group: "Rotor",
    region: "Rotor | traseiro | JD 9470",
    description: "Kit com 3 peças para reposição na região traseira do rotor em aplicações compatíveis.",
    image: "assets/products/kit-reparo-jd-9470-tras-ah219762.png",
  },
  {
    id: "kit-reparo-rotor-ah216568",
    productId: "kit-reparo-rotor-dianteiro-ah216568",
    name: "Kit reparo do rotor dianteiro",
    code: "AH216568",
    group: "Rotor",
    region: "Rotor | dianteiro | JD 9650/9670",
    description: "Conjunto similar à original para reparo dianteiro do rotor em máquinas STS e Série S compatíveis.",
    image: "assets/products/kit-reparo-jd-9670-diant-ah216568.png",
  },
  {
    id: "kit-reparo-rotor-ah216569",
    productId: "kit-reparo-rotor-traseiro-ah216569",
    name: "Kit reparo do rotor traseiro",
    code: "AH216569",
    group: "Rotor",
    region: "Rotor | traseiro | JD 9650/9670",
    description: "Item de reposição para manutenção da região traseira do rotor, em ponto de alto desgaste.",
    image: "assets/products/kit-reparo-jd-9670-tras-ah216569.png",
  },
  {
    id: "capa-batedor-ah234023",
    productId: "capa-batedor-9470-ah234023",
    name: "Capa do batedor",
    code: "AH234023",
    group: "Batedor",
    region: "Batedor | JD 9470",
    description: "Peça alternativa/similar aplicada na região do batedor para proteção e composição do conjunto.",
    image: "assets/products/capa-batedor-9470-ah234023.png",
  },
  {
    id: "capa-batedor-ah214671",
    productId: "capa-batedor-jd-9670-ah214671",
    name: "Capa do batedor",
    code: "AH214671",
    group: "Batedor",
    region: "Batedor | JD 9670",
    description: "Item similar à original aplicado no batedor, auxiliando proteção e continuidade do fluxo interno.",
    image: "assets/products/capa-batedor-jd-9670-ah214671.png",
  },
];

const flowSteps = [
  {
    id: "plataforma",
    label: "Plataforma",
    kicker: "Etapa 01",
    title: "A colheita começa na plataforma",
    heading: "Plataforma",
    text:
      "A plataforma é o ponto de entrada do material na colheitadeira. É aqui que a cultura é captada e conduzida para dentro da máquina.",
    visual: "platform",
    parts: [],
    context: "Entrada do material",
  },
  {
    id: "dedos",
    label: "Dedos",
    kicker: "Etapa 02",
    title: "Os dedos conduzem o material",
    heading: "Dedos da plataforma",
    text:
      "Os dedos ajudam a conduzir o material na entrada da máquina e são fundamentais na alimentação inicial da colheita.",
    visual: "fingers",
    parts: ["dedo-plataforma-6286531", "dedo-plataforma-6286532", "dedo-plataforma-6308502"],
    context: "Ponto visual de reposição",
  },
  {
    id: "alimentacao",
    label: "Alimentação",
    kicker: "Etapa 03",
    title: "O material entra na máquina",
    heading: "Alimentação / entrada",
    text:
      "Depois da plataforma, o material segue para a alimentação interna, iniciando o percurso dentro da colheitadeira.",
    visual: "feed",
    parts: [],
    context: "Conexão do fluxo",
  },
  {
    id: "rotor",
    label: "Rotor",
    kicker: "Etapa 04",
    title: "Rotor em foco",
    heading: "Rotor",
    text:
      "O rotor é uma das regiões mais importantes do processamento e também um dos principais pontos de desgaste da máquina.",
    visual: "rotor",
    parts: [
      "kit-reparo-rotor-ah219761",
      "kit-reparo-rotor-ah219762",
      "kit-reparo-rotor-ah216568",
      "kit-reparo-rotor-ah216569",
    ],
    context: "Trilha e separação",
  },
  {
    id: "batedor",
    label: "Batedor",
    kicker: "Etapa 05",
    title: "O fluxo segue pelo batedor",
    heading: "Batedor / trilha",
    text:
      "As capas do batedor são aplicadas nessa região do fluxo interno, compondo e protegendo o conjunto.",
    visual: "beater",
    parts: ["capa-batedor-ah234023", "capa-batedor-ah214671"],
    context: "Proteção do conjunto",
  },
  {
    id: "peneira",
    label: "Peneira",
    kicker: "Etapa 06",
    title: "Separação e limpeza",
    heading: "Peneira / separação / limpeza",
    text:
      "Nesta fase, a máquina realiza a separação e limpeza do material, distinguindo grãos, palha e resíduos.",
    visual: "cleaning",
    parts: [],
    context: "Parte inferior da máquina",
  },
  {
    id: "final",
    label: "Final",
    kicker: "Etapa 07",
    title: "Resumo do caminho completo",
    heading: "Visão final do fluxo",
    text:
      "A VF oferece peças em pontos estratégicos do fluxo da colheitadeira, ajudando na manutenção e reposição dos principais conjuntos.",
    visual: "summary",
    parts: [],
    context: "Mapa completo",
  },
];

const flowRoot = document.querySelector("[data-machine-flow]");
const tourFrame = document.querySelector("[data-tour-frame]");
const tourScene = document.querySelector("[data-tour-scene]");
const timeline = document.querySelector("[data-flow-timeline]");
const featuredGrid = document.querySelector("[data-featured-parts]");
const stageParts = document.querySelector("[data-stage-parts]");
const stepKicker = document.querySelector("[data-step-kicker]");
const stepTitle = document.querySelector("[data-step-title]");
const stepHeading = document.querySelector("[data-step-heading]");
const stepText = document.querySelector("[data-step-text]");
const tourBadge = document.querySelector("[data-tour-badge]");
const startButton = document.querySelector("[data-flow-start]");
const playButton = document.querySelector("[data-flow-play]");
const nextButton = document.querySelector("[data-flow-next]");
const prevButton = document.querySelector("[data-flow-prev]");

let activeStepIndex = 0;
let playTimer = null;

function quoteUrl(message) {
  return `https://wa.me/${FLOW_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function productUrl(part) {
  return `produto.html?id=${part.productId}`;
}

function quoteMessage(part) {
  return `Olá, quero solicitar orçamento da peça ${part.name} código ${part.code}. Região: ${part.region}.`;
}

function partsForStep(step) {
  return step.parts
    .map((partId) => featuredParts.find((part) => part.id === partId))
    .filter(Boolean);
}

const flowCoordinates = {
  platform: [
    [9, 68],
    [17, 66],
    [25, 64],
    [33, 61],
    [41, 58],
    [49, 55],
    [57, 51],
    [65, 48],
    [73, 45],
  ],
  fingers: [
    [8, 57],
    [16, 57],
    [24, 57],
    [32, 56],
    [40, 56],
    [48, 56],
    [56, 56],
    [64, 55],
    [72, 55],
  ],
  feed: [
    [8, 72],
    [16, 68],
    [24, 63],
    [32, 58],
    [40, 53],
    [48, 48],
    [56, 43],
    [64, 38],
    [72, 34],
  ],
  rotor: [
    [16, 53],
    [23, 49],
    [30, 46],
    [37, 44],
    [44, 44],
    [51, 46],
    [58, 50],
    [65, 54],
    [72, 57],
  ],
  beater: [
    [12, 56],
    [20, 52],
    [28, 49],
    [36, 49],
    [44, 51],
    [52, 54],
    [60, 57],
    [68, 59],
    [76, 60],
  ],
  cleaning: [
    [42, 23],
    [44, 31],
    [46, 39],
    [48, 47],
    [50, 55],
    [52, 63],
    [54, 71],
    [56, 78],
    [58, 84],
  ],
  summary: [
    [11, 16],
    [16, 21],
    [22, 27],
    [28, 33],
    [34, 39],
    [40, 45],
    [47, 51],
    [54, 57],
    [61, 63],
    [68, 69],
    [75, 73],
    [82, 76],
    [88, 78],
    [92, 80],
  ],
};

function renderFlowParticles(visual = "platform") {
  const coords = flowCoordinates[visual] || flowCoordinates.platform;
  return coords
    .map(([x, y], index) => `<i style="--x:${x}%; --y:${y}%; --delay:${(index * 0.22).toFixed(2)}s"></i>`)
    .join("");
}

function renderSceneVisual(step) {
  const flow = renderFlowParticles(step.visual);

  const templates = {
    platform: `
      <div class="tour-visual tour-visual-platform">
        <div class="tour-machine-context">
          <span>Plataforma de corte</span>
          <span>Entrada da cultura</span>
        </div>
        <div class="tour-crop" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <div class="tour-platform">
          <div class="tour-header-backplate"></div>
          <div class="tour-reel"><i></i><i></i><i></i><i></i></div>
          <div class="tour-cutterbar"></div>
          <div class="tour-auger"></div>
        </div>
        <div class="tour-flow-path platform-path">${flow}</div>
      </div>
    `,
    fingers: `
      <div class="tour-visual tour-visual-fingers">
        <div class="tour-region-label">Local dos dedos na plataforma</div>
        <div class="tour-finger-row">
          <span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <div class="tour-finger-detail">
          <b>Barra de corte</b>
          <small>dedos distribuídos na entrada</small>
        </div>
        <div class="tour-finger-products">
          ${partsForStep(step)
            .map(
              (part) => `
                <figure>
                  <img src="${part.image}" alt="${part.name}" loading="lazy" />
                  <figcaption>${part.name}</figcaption>
                </figure>
              `
            )
            .join("")}
        </div>
        <div class="tour-flow-path fingers-path">${flow}</div>
      </div>
    `,
    feed: `
      <div class="tour-visual tour-visual-feed">
        <div class="tour-feed-chain">
          <i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
        <div class="tour-feed-mouth">Plataforma</div>
        <div class="tour-feed-channel">
          <span>Canal de alimentação</span>
        </div>
        <div class="tour-feed-entry">Interior</div>
        <div class="tour-flow-path feed-path">${flow}</div>
      </div>
    `,
    rotor: `
      <div class="tour-visual tour-visual-rotor">
        <div class="tour-cutaway-card">
          <span>Alimentação</span>
          <strong>Rotor / trilha</strong>
          <span>Separação</span>
        </div>
        <div class="tour-rotor-housing"></div>
        <div class="tour-concave-grid"><i></i><i></i><i></i><i></i><i></i></div>
        <div class="tour-rotor-cylinder">
          <i></i><i></i><i></i><i></i><i></i>
        </div>
        <div class="tour-wear-zones">
          <span>Dianteiro</span>
          <span>Traseiro</span>
        </div>
        <div class="tour-flow-path rotor-path">${flow}</div>
      </div>
    `,
    beater: `
      <div class="tour-visual tour-visual-beater">
        <div class="tour-beater-housing"></div>
        <div class="tour-beater-drum">
          <i></i><i></i><i></i><i></i>
        </div>
        <div class="tour-cover-plates">
          <span>Capa do batedor</span>
          <span>Proteção do conjunto</span>
        </div>
        <div class="tour-flow-path beater-path">${flow}</div>
      </div>
    `,
    cleaning: `
      <div class="tour-visual tour-visual-cleaning">
        <div class="tour-fall-zone">
          <span>grãos</span><span>palha</span><span>resíduos</span>
        </div>
        <div class="tour-cleaning-fan"><i></i><i></i><i></i></div>
        <div class="tour-sieves">
          <i></i><i></i><i></i><i></i>
        </div>
        <div class="tour-grain-tray"></div>
        <div class="tour-flow-path cleaning-path">${flow}</div>
      </div>
    `,
    summary: `
      <div class="tour-visual tour-visual-summary">
        <div class="tour-summary-map">
          ${flowSteps
            .map(
              (item, index) => `
                <span class="${index <= activeStepIndex ? "done" : ""}">
                  <b>${String(index + 1).padStart(2, "0")}</b>
                  ${item.label}
                </span>
              `
            )
            .join("")}
        </div>
        <div class="tour-flow-path summary-path">${flow}</div>
      </div>
    `,
  };

  return `
    <div class="tour-scene-copy">
      <p>${step.context}</p>
      <strong>${step.heading}</strong>
    </div>
    ${templates[step.visual] || templates.platform}
  `;
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

function renderStageParts(step) {
  const parts = partsForStep(step);

  if (!parts.length) {
    stageParts.innerHTML = `
      <div class="tour-context-card">
        <p class="eyebrow">Contexto do funcionamento</p>
        <h3>Sem peça comercial forte nesta etapa</h3>
        <p>
          Esta fase aparece para manter o caminho do material claro. Se precisa
          identificar uma peça dessa região, fale com a equipe VF.
        </p>
        <a class="button secondary" href="${quoteUrl(`Olá, quero identificar uma peça na etapa ${step.label} do fluxo da colheitadeira.`)}" target="_blank" rel="noreferrer">Falar com a VF</a>
      </div>
    `;
    return;
  }

  stageParts.innerHTML = `
    <div class="tour-stage-header">
      <p class="eyebrow">Peças VF nesta região</p>
      <strong>Primeiro reconheça o local. Depois confira a peça.</strong>
    </div>
    <div class="tour-stage-grid">
      ${parts.map(renderPartCard).join("")}
    </div>
  `;
}

function renderPartCard(part) {
  return `
    <article class="tour-part-card">
      <div class="tour-part-meta">
        <span>${part.region}</span>
        <h3>${part.name}</h3>
        <strong class="tour-part-code">${part.code}</strong>
      </div>
      <div class="tour-part-image">
        <img src="${part.image}" alt="${part.name} ${part.code}" loading="lazy" />
      </div>
      <p class="tour-part-description">${part.description}</p>
      <div class="tour-part-actions">
        <a class="button primary" href="${quoteUrl(quoteMessage(part))}" target="_blank" rel="noreferrer">Solicitar orçamento</a>
        <a class="button secondary" href="${quoteUrl(`Olá, quero falar no WhatsApp sobre a peça ${part.code}.`)}" target="_blank" rel="noreferrer">Falar no WhatsApp</a>
      </div>
    </article>
  `;
}

function renderFeaturedCards() {
  featuredGrid.innerHTML = featuredParts.map(renderPartCard).join("");
}

function setWhatsAppLinks() {
  document.querySelectorAll("[data-flow-whatsapp]").forEach((link) => {
    const message = link.dataset.message || "Olá, quero falar com a VF Peças Agrícolas.";
    link.href = quoteUrl(message);
    link.target = "_blank";
    link.rel = "noreferrer";
  });
}

function setStep(index) {
  activeStepIndex = Math.max(0, Math.min(flowSteps.length - 1, Number(index) || 0));
  const step = flowSteps[activeStepIndex];

  tourFrame.dataset.step = step.id;
  stepKicker.textContent = step.kicker;
  stepTitle.textContent = step.title;
  stepHeading.textContent = step.heading;
  stepText.textContent = step.text;
  tourBadge.textContent = step.label;
  tourScene.innerHTML = renderSceneVisual(step);
  renderStageParts(step);

  document.querySelectorAll("[data-flow-step]").forEach((button) => {
    const isActive = Number(button.dataset.flowStep) === activeStepIndex;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-current", isActive ? "step" : "false");
  });

  if (prevButton) prevButton.disabled = activeStepIndex === 0;
  if (nextButton) nextButton.textContent = activeStepIndex === flowSteps.length - 1 ? "Reiniciar" : "Próxima etapa";
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
  }, 5200);
}

renderTimeline();
renderFeaturedCards();
setWhatsAppLinks();
setStep(0);

timeline.addEventListener("click", (event) => {
  const button = event.target.closest("[data-flow-step]");
  if (!button) return;
  stopAutoPlay();
  setStep(button.dataset.flowStep);
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
