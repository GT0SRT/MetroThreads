document.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.display = 'none';
        document.querySelector('.road').style.display = 'block';
        document.querySelector('footer').style.marginTop = '0px';
    }
    else {
        header.style.display = 'flex';
        document.querySelector('footer').style.marginTop = '200px';
    }
});

/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 450 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[herf*=]' + sectionId + ']')
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        }
        else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
