//create hamburger menu

const navEL = document.querySelector('.nav');

const hamburger = document.querySelector('.hamburger')

hamburgerEL.addeventlistner("click", () => {

    navEL.classList.toggle('nav--open');
    
    hamburgerEL.classList.toggle('.hamburger--open');
})

navEL.addeventlistner('click', () => {
    navEL.classList.remove('nav--open');
    hamburger.classList.remove('hamburger--open');

})