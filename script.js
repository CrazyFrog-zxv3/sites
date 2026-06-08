const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        menu.classList.add('rolando');
    } else {
        menu.classList.remove('rolando');
    }
});