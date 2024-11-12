/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

    //   menu show
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
//  menu hidden

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // whem we click nav links remove show menu class 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

 



/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // add a class if the bottom offset is greater than 50 of the view height
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)
/*=============== SWIPER PLANETS ===============*/ 
const swiperTravel = new Swiper('.travel__swiper', {
    loop: true,
    spacecBetween: '32',
    grabCursor:true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',


    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },

    breakpoints:{
        600:{
         slidesPerView:2 ,  
        },
        900:{
            slidesPerView:3
        },
    },
  
  
  })

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUP = () => {
    const scrollUP = document.getElementById('scroll-up')
   //  when the scroll is higher than 350 viewport height add the scroll up
   this.scrollY >=  350 ? scrollUP.classList.add('show-scroll')
                        : scrollUP.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUP)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' +sectionId + ']')


        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll' , scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2500,
    delay: 300,
     reset:true, // animation repeats

})

sr.reveal(`.home__data , .travel__swiper , .contact__container` )
sr.reveal(`.home__img`, {origin:'bottom'})
sr.reveal(`.home__ovni`, {delay:800}) 
sr.reveal(`.explore__img`, {origin:'left'}) 
sr.reveal(`.explore__data`, {origin:'right'}) 
sr.reveal(`.explore__planet`, {origin:'right',delay:800}) 
sr.reveal(`.history__card`, {interval:100}) 
sr.reveal(`.history__planet-1`, {origin:'left' , delay:1000}) 
sr.reveal(`.history__planet-2`, {origin:'right' , delay:1200}) 
sr.reveal(`.footer__planet-1`, {origin:'bottom' , delay:600}) 
sr.reveal(`.footer__planet-2`, { delay:800}) 
