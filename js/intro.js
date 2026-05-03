const openBtn = document.getElementById("openBtn");
const lockScreen = document.getElementById("lockScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const birthdayContent = document.querySelector(".birthday-content");
const cinematicText = document.querySelector(".cinematic-text");
const mainBtn = document.getElementById("mainBtn");

if (openBtn && lockScreen && birthdayScreen && birthdayContent && mainBtn) {
  openBtn.addEventListener("click", () => {
    lockScreen.classList.add("hide-lock");

    setTimeout(() => {
      birthdayScreen.classList.add("show");
    }, 600);

    // cinematic text timing
    setTimeout(() => {
      if (cinematicText) cinematicText.classList.add("hide");

      // wait for cinematic fade-out (.5s), then start cake
      setTimeout(() => {
        birthdayContent.classList.add("show");

        const cakeStage = document.querySelector(".intro-cake-stage");
        const candle = document.querySelector(".intro-cake-stage > .cake");

        if (cakeStage) {
          cakeStage.classList.add("start");
          cakeStage.classList.add("zoom");
        }

        if (candle) {
          candle.classList.add("drop");
        }

        setTimeout(() => {
          if (cakeStage) cakeStage.classList.add("glow");
        }, 2300);

        setTimeout(() => {
          mainBtn.classList.add("show");
        }, 3500);

      }, 500);

    }, 3600);
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
