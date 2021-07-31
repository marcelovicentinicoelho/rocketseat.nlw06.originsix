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
const header = document.querySelector("#header");
const navheight = header.offsetHeight; // Deslocamento da altura
function addShadowHeaderWhenScroll() {
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
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
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
const backToTopButton = document.querySelector(".back-to-top");
function backToTop() {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 560) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll("main section[id]");
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
}

/* When scroll */
window.addEventListener("scroll", function () {
  addShadowHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});
