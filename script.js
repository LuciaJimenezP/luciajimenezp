const intro = document.getElementById("intro");
const content = document.getElementById("content");
const skills = document.querySelector(".skills-section");

/* 🎭 SCROLL */
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  /* TELÓN */
  intro.style.transform = `translateY(-${scrollY}px)`;

  /* REVELADO */
  if (scrollY > 100) {
    content.classList.add("reveal");
  } else {
    content.classList.remove("reveal");
  }

  /* DESAPARECE TELÓN */
  if (scrollY > window.innerHeight) {
    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";
  } else {
    intro.style.opacity = "1";
  }

  /* SKILLS aparece */
  if (scrollY > window.innerHeight * 1.3) {
    skills.classList.add("show");
  }
});

/* 🔥 CLICK SKILLS (FUERA DEL SCROLL) */
const skillItems = document.querySelectorAll(".skill");

skillItems.forEach(skill => {
  skill.addEventListener("click", () => {
    skill.classList.toggle("active");
  });
});