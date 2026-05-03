const openBtn = document.getElementById("openBtn");
const lockScreen = document.getElementById("lockScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const birthdayContent = document.querySelector(".birthday-content");
const cinematicText = document.querySelector(".cinematic-text");
const mainBtn = document.getElementById("mainBtn");

// quick confetti burst
document.querySelectorAll(".confetti-layer span").forEach((el,i)=>{
  el.style.animationDuration = (4 + Math.random()*3) + "s";
  el.style.opacity = 1;
});

if (openBtn && lockScreen && birthdayScreen && birthdayContent && mainBtn) {
  openBtn.addEventListener("click", () => {
    lockScreen.classList.add("hide-lock");

    setTimeout(() => {
      birthdayScreen.classList.add("show");
    }, 600);

    setTimeout(() => {
  if (cinematicText) cinematicText.classList.add("hide");
  birthdayContent.classList.add("show");

  const cakeStage = document.querySelector(".intro-cake-stage");
  const candle = document.querySelector(".intro-cake-stage > .cake");

  if (cakeStage) cakeStage.classList.add("start");
  if (candle) candle.classList.add("drop");

  setTimeout(() => {
    mainBtn.classList.add("show");
  }, 3500);

}, 3600);

    setTimeout(() => {
      const cakeStage = document.querySelector(".intro-cake-stage");
      if (cakeStage) cakeStage.classList.add("zoom");
    }, 3600);

   const cremaAnim = document.getElementById("crema");

if (cremaAnim) {
  cremaAnim.addEventListener("endEvent", () => {
    const candle = document.querySelector(".intro-cake-stage > .cake");
    if (candle) candle.classList.add("drop");

    const cakeStage = document.querySelector(".intro-cake-stage");
    if (cakeStage) cakeStage.classList.add("glow");
  });
}

    setTimeout(() => {
      const flash = document.getElementById("flash");
      if (flash) flash.classList.add("active");
    }, 3900);

    setTimeout(() => {
      const cakeStage = document.querySelector(".intro-cake-stage");
      if (cakeStage) cakeStage.classList.add("glow");
    }, 4500);
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
