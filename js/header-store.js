const $search = document.querySelector('.wrap-search');
const $navbar = document.querySelector('.navbar');
const $navigation = document.querySelector('.navigation')

const $magnifying = $search.querySelector('.magnifying');
const $close = $search.querySelector('.close');

const $toggle = $navigation.querySelector('.toggle');

$magnifying.addEventListener('click', (event) => { 
    event.preventDefault();
    $search.classList.add('-active');
    if ($search.classList.contains('-active')) {
        $magnifying.classList.add('-hidden');
        $close.classList.remove('-hidden');
    }
})

$close.addEventListener('click', (event) => {
    event.preventDefault(); // para impedir que o input:image tente enviar um formulário, sua caracteristica padrão
    $search.classList.remove('-active');
    $magnifying.classList.remove('-hidden');
    $close.classList.add('-hidden');
})

$toggle.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('peguei');
    $navbar.classList.toggle('-hidden');
})








