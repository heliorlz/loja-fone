const $heart = window.document.querySelector('.-heart');

$heart.addEventListener('click', handleClickHeart);

function handleClickHeart() {
    console.log('Ae');
};

const $addCart = window.document.querySelector('.-second');
const $cart = window.document.querySelector('.action:last-child');

$addCart.addEventListener('click', handleClickAddCart);

function handleClickAddCart() {
    $cart.textContent = 'Biruleibe';
}