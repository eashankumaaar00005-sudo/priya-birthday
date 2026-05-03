const openBtn = document.getElementById("openBtn");
const lockScreen = document.getElementById("lockScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const birthdayContent = document.querySelector(".birthday-content");
const cinematicText = document.querySelector(".cinematic-text");
const mainBtn = document.getElementById("mainBtn");
const music = document.getElementById("bgMusic");

if (music) {
  music.volume = 0;
  music.play().catch(()=>{});

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.5) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
  
if (openBtn && lockScreen && birthdayScreen && birthdayContent && mainBtn) {
  openBtn.addEventListener("click", () => {
    lockScreen.classList.add("hide-lock");

    setTimeout(() => {
      birthdayScreen.classList.add("show");
    }, 600);

    setTimeout(() => {
      if (cinematicText) cinematicText.classList.add("hide");
      birthdayContent.classList.add("show");
      mainBtn.classList.add("show");
    }, 3600);

    setTimeout(() => {
      const cakeStage = document.querySelector(".intro-cake-stage");
      if (cakeStage) cakeStage.classList.add("zoom");
    }, 3600);

    setTimeout(() => {
      const candle = document.querySelector(".intro-cake-stage > .cake");
      if (candle) candle.classList.add("drop");
    }, 3900);
setTimeout(() => {
  const pop = document.getElementById("popSound");
  if (pop) {
    pop.currentTime = 0;
    pop.volume = 0.6;
    pop.play().catch(()=>{});
  }
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
