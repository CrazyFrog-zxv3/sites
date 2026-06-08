const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        menu.classList.add('rolando');
    } else {
        menu.classList.remove('rolando');
    }
});

ScrollReveal().reveal('.txt-top', {
    origin: 'left',
    distance: '80px',
    duration: 1000,
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