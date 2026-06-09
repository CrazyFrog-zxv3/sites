const menu = document.querySelector('.menu');

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.menu nav');
const navs = document.querySelector('.menu nav.active');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        menu.classList.add('rolando');
        navs.classList.toggle('tomas')

    } else {
        menu.classList.remove('rolando');
    }
});

ScrollReveal().reveal('.brack', {
    origin: 'left',
    distance: '80px',
    duration: 1000,
})
ScrollReveal().reveal('.txt-top', {
    origin: 'left',
    distance: '80px',
    duration: 1000,
    delay: 500,
})

ScrollReveal().reveal('.img-div', {
    origin: 'right',
    distance: '80px',
    duration: 1000,
    delay: 200,
})

ScrollReveal().reveal('.btns-top', {
    origin: 'left',
    distance: '80px',
    duration: 1000,
    delay: 400,
})

ScrollReveal().reveal('.txt-btop', {
    origin: 'left',
    distance: '80px',
    duration: 1000,
    delay: 600,
})

ScrollReveal().reveal('.img-btop', {
    origin: 'left',
    distance: '80px',
    duration: 1000,
    delay: 800,
})

const container = document.querySelector('.sec-ser');
const btnLeft = document.querySelector('.scroll-left');
const btnRight = document.querySelector('.scroll-right');

btnLeft.addEventListener('click', () => {
  container.scrollBy({ left: -200, behavior: 'smooth' }); // rola para a esquerda
});

btnRight.addEventListener('click', () => {
  container.scrollBy({ left: 200, behavior: 'smooth' }); // rola para a direita
});

document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector('.cards-depoimentos');
    const dotsContainer = document.querySelector('.dots');
    const cards = document.querySelectorAll('.card-depoimento');

    const cardWidth = cards[0].offsetWidth + 20;

    // criar bolinhas
    cards.forEach((card, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');

        if (i === 0) dot.classList.add('active');

        dot.addEventListener('click', () => {
            container.scrollTo({
                left: cardWidth * i,
                behavior: 'smooth'
            });

            setActive(i);
        });

        dotsContainer.appendChild(dot);
    });

    // scroll sync
    container.addEventListener('scroll', () => {
        const index = Math.round(container.scrollLeft / cardWidth);
        setActive(index);
    });

    function setActive(index) {
        document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
        if (document.querySelectorAll('.dot')[index]) {
            document.querySelectorAll('.dot')[index].classList.add('active');
        }
    }

});


hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    // animação do hambúrguer
    hamburger.classList.toggle('open');
});

const he = document.querySelector('.hero')
const hehe = he.parentElement

hehe.style.backgroundColor = 'black'