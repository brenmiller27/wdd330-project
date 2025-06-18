leticonCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
listProductsHtml = document.querySelector('.listProducts');


let listProducts = [];


let body = document.querySelector('body')


iconCart.addEventListner('click', () => {
    body.classList.toggle('showCart')

})

closeCart.addEventListner('click', () => {
    body.classList.toggle('showCart')

})






