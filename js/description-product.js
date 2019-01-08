const $heart = document.querySelector('.-heart');
const $stars = document.querySelectorAll('.star'); // pegar todos os elementos com classe .star
const positionLast = $stars.length -1; // pega a posição do ultimo elemento, utilizando lenght que dá o tamanho do array, -1 para descontar e simular o começo do index 0 

$heart.addEventListener('click', handleClick); // refatorando e reaproveitando a function handleClick

$stars.forEach(function($star, key){ // key fornece a posição do elemento star
    if (key === 0) {
        $star.addEventListener('click', firstStar);
    }

    if (key === positionLast) {
        $star.addEventListener('click', lastStar);
    }

    if (key > 0 && key < positionLast) { // && as duas condições devem ser verdadeiras
        $star.addEventListener('click', function(){
            middleStar(key); 
        });
    }
})

function handleClick(){
    this.classList.toggle('-active');
};

function firstStar() {
    $stars.forEach(function($star){
        $star.classList.remove('-active');
    })
    this.classList.add('-active'); 
};

function middleStar(index) { // recebendo o indice como parâmetro vindo da chamada da função testClick
    $stars.forEach(function($star, key){
        $star.classList.remove('-active');
        if (key <= index) {
            $star.classList.add('-active');
        }
    })
}

function lastStar() { // pega todas estrelas quando clicada na ultima
    $stars.forEach(function($star) {
        $star.classList.add('-active');
    });
};




