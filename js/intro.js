const openBtn = document.getElementById("openBtn");
const lockScreen = document.getElementById("lockScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const birthdayContent = document.querySelector(".birthday-content");
const cinematicText = document.querySelector(".cinematic-text");
const boxBtn = document.getElementById("boxBtn");
const mainBtn = document.getElementById("mainBtn");

const cakeStage = document.querySelector(".intro-cake-stage");
const candle = document.querySelector(".intro-cake-stage > .cake");

function wait(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

function forceReflow(el){
  if (el) void el.offsetWidth;
}

if (openBtn && lockScreen && birthdayScreen) {
  openBtn.addEventListener("click", async () => {
    lockScreen.classList.add("hide-lock");

    await wait(650);
    birthdayScreen.classList.add("show");
  });
}

if (boxBtn && birthdayContent) {
  boxBtn.addEventListener("click", async () => {
    if (cinematicText) cinematicText.classList.add("hide");

    await wait(500);

    birthdayContent.classList.add("show");

    if (cakeStage) {
      cakeStage.classList.remove("start", "zoom", "glow");
      void cakeStage.offsetWidth;
      cakeStage.classList.add("start", "zoom");
    }

    if (candle) {
      candle.classList.remove("drop");
      void candle.offsetWidth;
    }

    await wait(2200);

    if (candle) candle.classList.add("drop");

    await wait(900);

    if (cakeStage) cakeStage.classList.add("glow");

    await wait(1200);

    if (mainBtn) mainBtn.classList.add("show");
  });
}

if (mainBtn) {
  mainBtn.addEventListener("click", () => {
    document.body.classList.add("page-exit");

    setTimeout(() => {
      window.location.href = "surprise.html?music=1";
    }, 650);
  });
}
