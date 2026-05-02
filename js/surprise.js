let heartTimer;
let slideshowStarted = false;
let slideIndex = 0;

const slides = [
  {
    img: "./assets/images/photo1.webp",
    text: "Aapki Khushi Kabhi Kam Na Ho, Aap Jo Chaho Wo Kar Pao."
  },
  {
    img: "./assets/images/photo2.webp",
    text: "Some smiles become part of the heart."
  },
  {
    img: "./assets/images/photo3.webp",
    text: "Some people make life feel warmer."
  }
];

/* Fade / Reveal Animation */
const revealItems = document.querySelectorAll(
  ".fade, section, .memory-card, .quote-card, .reason, .slideshow, .letter-image-card, .secret, .final, .eom-cake-card"
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.16
});

revealItems.forEach((item) => {
  item.classList.add("reveal");
  revealObserver.observe(item);
});

/* Hearts */
function startHearts() {
  if (heartTimer) return;

  heartTimer = setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 92 + "vw";
    h.style.fontSize = (14 + Math.random() * 10) + "px";

    document.body.appendChild(h);
    setTimeout(() => h.remove(), 5000);
  }, 450);
}

/* Slideshow */
function startSlideshow() {
  if (slideshowStarted) return;
  slideshowStarted = true;

  const img = document.getElementById("slideImage");
  const text = document.getElementById("slideText");

  if (!img || !text) return;

  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;

    img.style.opacity = "0";

    setTimeout(() => {
      img.src = slides[slideIndex].img;
      text.innerText = slides[slideIndex].text;
      img.style.opacity = "1";
    }, 400);
  }, 3000);
}

/* Secret Box */
function showSecret() {
  const box = document.getElementById("secretBox");
  if (!box) return;

  box.style.display = "block";
  box.scrollIntoView({ behavior: "smooth", block: "center" });
}

/* Music Button */
const music = document.getElementById("music");

function startMusic() {
  if (!music) return;

  music.volume = 0.8;

  music.play().catch(() => {
    // fallback: user interaction ka wait
  });
}

/* Try on load */
window.addEventListener("load", startMusic);

/* Fallback: first interaction */
["click", "touchstart", "scroll"].forEach(event => {
  window.addEventListener(event, () => {
    startMusic();
  }, { once: true });
});

/* Start */
window.addEventListener("load", () => {
  startHearts();
  startSlideshow();

  document.querySelectorAll(".fade").forEach((el) => {
    el.classList.add("show");
  });
});
