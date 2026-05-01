const unlockBtn = document.getElementById("unlockBtn");
const lockScreen = document.getElementById("lockScreen");
const birthdayStage = document.getElementById("birthdayStage");
const finalBtn = document.getElementById("finalBtn");

unlockBtn.addEventListener("click", () => {
  unlockBtn.disabled = true;

  lockScreen.classList.add("fade-out");

  setTimeout(() => {
    lockScreen.style.display = "none";
    birthdayStage.classList.add("show");
  }, 700);

  setTimeout(() => {
    finalBtn.classList.add("show");
  }, 7200);
});

finalBtn.addEventListener("click", () => {
  document.body.classList.add("page-exit");

  setTimeout(() => {
    window.location.href = "surprise.html";
  }, 650);
});
