const openBtn = document.getElementById("openBtn");
const lockScreen = document.getElementById("lockScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const birthdayContent = document.querySelector(".birthday-content");
const mainBtn = document.getElementById("mainBtn");

if (openBtn && lockScreen && birthdayScreen && birthdayContent) {
  openBtn.addEventListener("click", () => {
    lockScreen.classList.add("hide-lock");

    setTimeout(() => {
      birthdayScreen.classList.add("show");
    }, 600);

    setTimeout(() => {
      birthdayContent.classList.add("show");
    }, 3200);
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
