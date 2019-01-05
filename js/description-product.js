const $heart = document.querySelector('.-heart');
const $stars = document.querySelectorAll('.state');

$heart.addEventListener('click', handleClickHeart);


function handleClickHeart() {
    $heart.classList.toggle('-active');
};

$stars[0].addEventListener('click', function() {
    this.classList.toggle('-active');
});

$stars[1].addEventListener('click', function() {
    this.classList.toggle('-active');
});

$stars[2].addEventListener('click', function() {
    this.classList.toggle('-active');
});

$stars[3].addEventListener('click', function() {
    this.classList.toggle('-active');
});

$stars[4].addEventListener('click', function() {
    this.classList.toggle('-active');
});


