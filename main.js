/* Abre e fecha o menu quando clicar nos ícones "hamburger" e "x" */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show');
    })
}

/* Esconder o menu quando um dos itens for clicado */
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show');
    })
}

/* colocar sombra no header da página quando der scroll */
const header = document.querySelector('#header');
const navheight = header.offsetHeight; // Deslocamento da altura
window.addEventListener('scroll', function() {
    if (window.scrollY >= navheight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
})