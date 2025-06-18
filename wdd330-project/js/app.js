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



export const addDataToHtml = () => {
    listProductHtml.innerHtml = '';
    if(listProducts.length > 0){
        listProducts.forEach(product => {
           let newProduct = document.createElement('div')
           newProduct.classList.add('item')
           newProduct.innerHTML = `
                <img src="home/images/images/black500.jpg">
                <h2>Name Product</h2>
                <div class="price">$250</div>
                <button class="addcart">
                    Add to Cart
                </button>
           `;
           listProductsHtml.appendChild(newProduct);
        })
    }
}


const initApp = () => {
    fetch('bike.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        addDataToHtml();

    })
}

initApp();