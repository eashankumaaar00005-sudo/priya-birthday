const openBtn = document.getElementById("openBtn");
const lockScreen = document.getElementById("lockScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const birthdayContent = document.querySelector(".birthday-content");
const cinematicText = document.querySelector(".cinematic-text");
const mainBtn = document.getElementById("mainBtn");

const cakeStage = document.querySelector(".intro-cake-stage");
const candle = document.querySelector(".intro-cake-stage > .cake");
const cakeSvg = document.querySelector(".intro-cake-stage svg");

function wait(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

function forceReflow(el){
  if (el) void el.offsetWidth;
}

async function startCakeSequence(){
  birthdayContent.classList.add("show");

  // reset animation state
  if (cakeStage) cakeStage.classList.remove("start", "zoom", "glow");
  if (candle) candle.classList.remove("drop");

  forceReflow(cakeStage);
  forceReflow(candle);
  forceReflow(cakeSvg);

  // start cake only after screen is visible
  await wait(120);

  if (cakeStage) {
    cakeStage.classList.add("start");
    cakeStage.classList.add("zoom");
  }

  // candle after cake starts
  await wait(2100);

  if (candle) candle.classList.add("drop");

  await wait(900);

  if (cakeStage) cakeStage.classList.add("glow");

  await wait(700);

  mainBtn.classList.add("show");
}

if (openBtn && lockScreen && birthdayScreen && birthdayContent && mainBtn) {
  openBtn.addEventListener("click", async () => {
    lockScreen.classList.add("hide-lock");

    await wait(650);
    birthdayScreen.classList.add("show");

    // cinematic text duration
    await wait(3000);

    if (cinematicText) cinematicText.classList.add("hide");

    // wait for fade-out to complete
    await wait(500);

    startCakeSequence();
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
