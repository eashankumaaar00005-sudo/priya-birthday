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

    setTimeout(() => {
      if (cinematicText) cinematicText.classList.add("hide");
      birthdayContent.classList.add("show");
      mainBtn.classList.add("show");
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
