const $magnifying = document.querySelector('.magnifying');
const $search = document.querySelector('.wrap-search');
const $close = document.querySelector('.close');

$magnifying.addEventListener('click', function () { 
    $search.classList.toggle('-active');
    if ($search.classList.contains('-active')) {
        $magnifying.classList.add('-hidden');
        $close.classList.remove('-hidden');
    }
})

$close.addEventListener('click', function () {
    $search.classList.toggle('-active');
    $magnifying.classList.remove('-hidden');
    $close.classList.add('-hidden');
})








