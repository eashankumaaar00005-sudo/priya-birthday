const unlockBtn = document.getElementById("unlockBtn");
const lockScreen = document.getElementById("lockScreen");
const birthdayStage = document.getElementById("birthdayStage");
const finalBtn = document.getElementById("finalBtn");

unlockBtn.addEventListener("click", () => {
  // Hide lock screen
  lockScreen.style.display = "none";

  // Show birthday animation stage
  birthdayStage.classList.add("show");

  // Final button appears after cake/birthday animation
  setTimeout(() => {
    finalBtn.classList.add("show");
  }, 6500);
});

finalBtn.addEventListener("click", () => {
  window.location.href = "surprise.html";
});
