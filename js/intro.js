const openBtn = document.getElementById("openBtn");
const lockScreen = document.getElementById("lockScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const mainBtn = document.getElementById("mainBtn");

if (openBtn && lockScreen && birthdayScreen && mainBtn) {
  openBtn.addEventListener("click", () => {
    openBtn.disabled = true;

    lockScreen.classList.add("hide-lock");

    setTimeout(() => {
      lockScreen.style.display = "none";
      birthdayScreen.classList.add("show");
    }, 650);

    setTimeout(() => {
      mainBtn.classList.add("show");
    }, 5200);
  });

  mainBtn.addEventListener("click", () => {
    document.body.classList.add("page-exit");

    setTimeout(() => {
      window.location.href = "surprise.html?music=1";
    }, 650);
  });
}
