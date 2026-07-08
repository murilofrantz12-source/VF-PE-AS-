const FLOW_WHATSAPP = "5545991444489";
const flowRoot = document.querySelector("[data-machine-flow]");
const flowStage = document.querySelector("[data-flow-stage]");
const panels = Array.from(document.querySelectorAll("[data-flow-panel]"));
const timelineButtons = Array.from(document.querySelectorAll("[data-step-target]"));
const startButton = document.querySelector("[data-flow-start]");
const playButton = document.querySelector("[data-flow-play]");
const nextButton = document.querySelector("[data-flow-next]");
const prevButton = document.querySelector("[data-flow-prev]");
const quoteLinks = Array.from(document.querySelectorAll("[data-flow-quote]"));

let activeStep = "intro";
let playTimer = null;

function quoteUrl(message) {
  return `https://wa.me/${FLOW_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function normalizeStep(step) {
  if (step === "intro") return "intro";
  const number = Number(step);
  if (Number.isNaN(number)) return 0;
  return Math.max(0, Math.min(6, number));
}

function currentStepNumber() {
  return activeStep === "intro" ? -1 : Number(activeStep);
}

function setStep(step) {
  activeStep = normalizeStep(step);
  flowStage.dataset.step = String(activeStep);

  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.flowPanel === String(activeStep));
  });

  timelineButtons.forEach((button) => {
    const target = Number(button.dataset.stepTarget);
    const isActive = activeStep !== "intro" && target === Number(activeStep);
    button.classList.toggle("active", isActive);
    if (button.closest(".machine-timeline")) {
      button.setAttribute("aria-current", isActive ? "step" : "false");
    }
    if (button.classList.contains("machine-hotspot")) {
      button.classList.toggle(
        "active",
        (Number(activeStep) === 1 && target === 1) ||
          (Number(activeStep) === 3 && target === 3) ||
          (Number(activeStep) === 5 && target === 5)
      );
    }
  });

  if (prevButton) prevButton.disabled = activeStep === "intro" || Number(activeStep) <= 0;
  if (nextButton) nextButton.textContent = Number(activeStep) >= 6 ? "Reiniciar" : "Avançar";
}

function stopAutoPlay() {
  if (playTimer) window.clearInterval(playTimer);
  playTimer = null;
  if (playButton) playButton.textContent = "Assistir automático";
}

function nextStep() {
  const current = currentStepNumber();
  if (current >= 6) {
    stopAutoPlay();
    setStep(0);
    return;
  }
  setStep(current + 1);
}

function previousStep() {
  const current = currentStepNumber();
  setStep(Math.max(0, current - 1));
}

function startAutoPlay() {
  stopAutoPlay();
  if (activeStep === "intro") setStep(0);
  if (playButton) playButton.textContent = "Pausar automático";
  playTimer = window.setInterval(() => {
    if (currentStepNumber() >= 6) {
      stopAutoPlay();
      return;
    }
    nextStep();
  }, 4200);
}

quoteLinks.forEach((link) => {
  const message = link.dataset.message || "Olá, quero falar com um especialista da VF Peças Agrícolas.";
  link.href = quoteUrl(message);
  link.target = "_blank";
  link.rel = "noreferrer";
});

timelineButtons.forEach((button) => {
  button.addEventListener("click", () => {
    stopAutoPlay();
    setStep(button.dataset.stepTarget);
  });
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

setStep("intro");
