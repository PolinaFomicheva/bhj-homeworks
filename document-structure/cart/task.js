const products = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');
const cartContainer = cart.parentElement;


products.forEach((product) => {
    const productPlus = product.querySelector('.product__quantity-control_inc');
    const productMinus = product.querySelector('.product__quantity-control_dec');
    const productValue = product.querySelector('.product__quantity-value');
    const productAdd = product.querySelector('.product__add');

    productMinus.onclick = () => {
            if (productValue.textContent > 0) {
                productValue.textContent--;
            } 
        };
        
        productPlus.onclick = () => {
            productValue.textContent++;
        };

        productAdd.onclick = () => {
            cartAdd(product);
        }

});

function cartAdd(product) {
    if (!cartContainer.classList.contains('cart-active')) {
        cartContainer.classList.add('cart-active');
    }
    const productImg = product.querySelector('.product__image').src;
    const productValue = product.querySelector('.product__quantity-value');

    if (isInCart(product)) {
        const productInCart = cart.querySelector(`[data-id="${product.dataset.id}"]`).querySelector('.cart__product-count');
        productInCart.textContent = +productInCart.textContent + +productValue.textContent;
        return;
    }

    cart.insertAdjacentHTML(
        'beforeend',
        `<div class="cart__product" data-id="${product.dataset.id}">
        <img class="cart__product-image" src="${productImg}">
        <div class="cart__product-count">${productValue.textContent}</div>
        <div class="cart__product-delete">&times;</div>
    </div>`
    );
    cart.lastElementChild.querySelector('.cart__product-delete').addEventListener('click', (evt) => {
            evt.target.closest('.cart__product').remove();
            !cart.children.length && cartContainer.classList.remove('cart-active');
        });
    animateCart(product.querySelector('.product__image'), cart.lastElementChild);
}


function isInCart(product) {
    const productsInCart = cart.querySelectorAll('.cart__product');
    return [...productsInCart].some((cartProduct) => cartProduct.dataset.id == product.dataset.id
    );
}

function animateCart(from, to) {
    const fromCoords = from.getBoundingClientRect();
    const toCoords = to.getBoundingClientRect();
    to.animate(
        [
            {transform: `translate(
                ${fromCoords.left - toCoords.left}px, 
                ${fromCoords.top - toCoords.top}px)`,
            },
            { transform: 'none' },
        ],
        150
    );
}

