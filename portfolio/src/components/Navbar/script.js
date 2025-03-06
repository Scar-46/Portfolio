const navLinkEls = document.querySelectorAll('.nav__link');
const sectionEls = document.querySelectorAll('section');

let currentSection = 'home'

window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= sectionEl.offsetTop) {
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl =>{
        if (navLinkEl.className.includes(currentSection)){
            navLinkEl.classList.add('active');
        }
    })
});