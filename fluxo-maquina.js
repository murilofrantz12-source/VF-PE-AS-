const FLOW_WHATSAPP = "5545991444489";

const flowSteps = [
  {
    id: "plataforma",
    label: "Plataforma",
    kicker: "Etapa 01",
    title: "Plataforma / alimentação",
    text:
      "A plataforma é o primeiro contato da máquina com o material. É aqui que os dedos e componentes de alimentação ajudam a conduzir a cultura para dentro da colheitadeira.",
    relatedGroups: ["Plataforma"],
  },
  {
    id: "alimentacao",
    label: "Alimentação",
    kicker: "Etapa 02",
    title: "Entrada do material",
    text:
      "O material segue da plataforma para a parte interna. A regularidade nessa entrada ajuda a manter o fluxo contínuo e reduz paradas durante a operação.",
    relatedGroups: ["Plataforma"],
  },
  {
    id: "rotor",
    label: "Rotor",
    kicker: "Etapa 03",
    title: "Rotor / trilha",
    text:
      "No rotor acontece uma das etapas mais importantes do processamento. É uma região de alto desgaste, por isso os kits de reparo são peças estratégicas para manutenção e reposição.",
    relatedGroups: ["Rotor"],
  },
  {
    id: "batedor",
    label: "Batedor",
    kicker: "Etapa 04",
    title: "Sistema do batedor",
    text:
      "O batedor auxilia na continuidade do fluxo interno do material. As capas do batedor são peças importantes para proteção, condução e funcionamento adequado dessa região.",
    relatedGroups: ["Batedor"],
  },
  {
    id: "separacao",
    label: "Separação",
    kicker: "Etapa 05",
    title: "Separação do material",
    text:
      "Após a trilha, o material segue para separação, onde a máquina começa a direcionar grãos, palha e resíduos para caminhos diferentes dentro do sistema.",
    relatedGroups: ["Rotor", "Batedor"],
  },
  {
    id: "limpeza",
    label: "Limpeza",
    kicker: "Etapa 06",
    title: "Limpeza e condução",
    text:
      "A etapa de limpeza ajuda a refinar o resultado do processamento e depende do fluxo interno estável para manter rendimento e qualidade no campo.",
    relatedGroups: [],
  },
  {
    id: "saida",
    label: "Saída",
    kicker: "Etapa 07",
    title: "Graneleiro, descarga e palha",
    text:
      "Depois do processamento, o grão segue para armazenamento/descarga e a palha ou resíduo segue para a saída da máquina.",
    relatedGroups: [],
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
    position: { x: 42, y: 41 },
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
    position: { x: 47, y: 38 },
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
    position: { x: 54, y: 48 },
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
    position: { x: 62, y: 46 },
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
    position: { x: 57, y: 39 },
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
    position: { x: 66, y: 51 },
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
    position: { x: 14, y: 70 },
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
    position: { x: 20, y: 64 },
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
    position: { x: 26, y: 68 },
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
          <span>${part.code}</span>
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
    <h3>${part.name}</h3>
    <dl>
      <div>
        <dt>Código</dt>
        <dd>${part.code}</dd>
      </div>
      <div>
        <dt>Aplicação</dt>
        <dd>${part.application}</dd>
      </div>
      <div>
        <dt>Função</dt>
        <dd>${part.function}</dd>
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
      (step, index) => `
        <article>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <h2>${step.title}</h2>
          <p>${step.text}</p>
        </article>
      `
    )
    .join("");
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
    setActivePart(relatedParts[0].id);
  } else if (!options.keepPart) {
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
setActivePart(activePartId);

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
