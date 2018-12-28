const $heart = window.document.querySelector('.-heart');

$heart.addEventListener('click', handleClickHeart);

function handleClickHeart() {
    console.log('Ae');
};

const $addCart = window.document.querySelector('.-second');

$addCart.addEventListener('click', handleClickAddCart);

function handleClickAddCart() {
    console.log('Ae second massa');
    ;
}