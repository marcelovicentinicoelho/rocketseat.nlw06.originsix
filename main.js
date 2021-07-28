/* Abre e fecha o menu quando clicar nos ícones "hamburger" e "x" */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/* Esconder o menu quando um dos itens for clicado */
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* colocar sombra no header da página quando der scroll */
function addShadowHeaderWhenScroll() {
  const header = document.querySelector("#header");
  const navheight = header.offsetHeight; // Deslocamento da altura

  if (window.scrollY >= navheight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

/* Testmonials Carousel Slider Swiper */
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

/* Scroll Reveal: mostrar elementos suavemente ao usar a barra de rolagem */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 500,
  reset: true,
});

scrollReveal.reveal(
  `
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links
    footer .brand, footer .social
  `,
  { interval: 100 }
);

/* Botão Back to Top */
function backToTop() {
  const backToTopButton = document.querySelector(".back-to-top");
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 560) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });
}

/* When scroll */
window.addEventListener("scroll", function () {
  addShadowHeaderWhenScroll();
  backToTop();
});
