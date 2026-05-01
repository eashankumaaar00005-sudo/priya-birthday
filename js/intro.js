const unlockBtn = document.getElementById("unlockBtn");
const lockScreen = document.getElementById("lockScreen");
const birthdayStage = document.getElementById("birthdayStage");
const finalBtn = document.getElementById("finalBtn");

unlockBtn.addEventListener("click", () => {
  unlockBtn.disabled = true;

  lockScreen.style.display = "none";
  birthdayStage.classList.add("show");

  setTimeout(() => {
    finalBtn.classList.add("show");
  }, 6500);
});
