let valorInicial = 0;
const $addCart = document.querySelector('.-second');

$addCart.addEventListener('click', handleClick);

function handleClick() {
    const $cart = document.querySelector('.action:last-child');

    $cart.textContent = `Carrinho (${++valorInicial})`; /* ++ antes da variável soma +1 e já atribui o novo valor - template string utilizando crases */
}