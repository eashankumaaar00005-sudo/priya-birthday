const openBtn = document.getElementById("openBtn");
const lockScreen = document.getElementById("lockScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const birthdayContent = document.querySelector(".birthday-content");

openBtn.addEventListener("click", () => {
  // fade out lock
  lockScreen.classList.add("hide-lock");

  setTimeout(() => {
    birthdayScreen.classList.add("show");
  }, 600);

  // cinematic delay before showing content
  setTimeout(() => {
    birthdayContent.classList.add("show");
  }, 3200); // important timing
});

  mainBtn.addEventListener("click", () => {
    document.body.classList.add("page-exit");

    setTimeout(() => {
      window.location.href = "surprise.html?music=1";
    }, 650);
  });
}
