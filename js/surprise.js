let heartTimer;
let slideshowStarted = false;
let slideIndex = 0;

const slides = [
  { img:"photo1.jpg", text:"Some memories stay forever." },
  { img:"photo2.jpg", text:"Some smiles become part of the heart." },
  { img:"photo3.jpg", text:"Some people make life feel warmer." }
];

const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

faders.forEach(el=>observer.observe(el));



function startHearts(){
  if(heartTimer) return;

  heartTimer = setInterval(()=>{
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 92 + "vw";
    h.style.fontSize = (14 + Math.random() * 10) + "px";

    const colors = ["#ff7ab7","#ffd0df","#ff4f9a","#ffc0cb"];
    h.style.color = colors[Math.floor(Math.random()*colors.length)];

    document.body.appendChild(h);
    setTimeout(()=>h.remove(),5000);
  },300);
}

function startSlideshow(){
  if(slideshowStarted) return;
  slideshowStarted = true;

  const img = document.getElementById("slideImage");
  const text = document.getElementById("slideText");

  if(!img || !text){
    console.log("Slideshow image/text not found");
    return;
  }

  setInterval(()=>{
    slideIndex = (slideIndex + 1) % slides.length;

    img.style.opacity = "0";

    setTimeout(()=>{
      img.src = slides[slideIndex].img;
      text.innerText = slides[slideIndex].text;
      img.style.opacity = "1";
    },400);
  },2800);
}

function showSecret(){
  const box = document.getElementById("secretBox");
  if(!box) return;

  box.style.display = "block";
  box.scrollIntoView({behavior:"smooth", block:"center"});
}window.addEventListener("load", () => {
  const music = document.getElementById("music");
  if (music) {
    music.volume = 0.45;
    // Browser may block autoplay until user taps; that's normal.
    music.play().catch(() => {});
    document.addEventListener("click", () => music.play().catch(() => {}), { once: true });
  }

  startHearts();
  startSlideshow();

  document.querySelectorAll(".fade").forEach(el => {
    el.classList.add("show");
  });
});
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

if (musicBtn && music) {
  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicBtn.textContent = "Pause Music";
    } else {
      music.pause();
      musicBtn.textContent = "Play Music";
    }
  });
}
