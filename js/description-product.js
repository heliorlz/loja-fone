const $heart = document.querySelector('.-heart');
const $stars = document.querySelectorAll('.star'); // pegar todos os elementos com classe .star

$heart.addEventListener('click', handleClick); // refatorando e reaproveitando a function handleClick

$stars.forEach(function($star) { //função anônima (retorna uma variável)
    $star.addEventListener('click', handleClick);
});  //percorrer cada item da lista

function handleClick(){
    this.classList.toggle('-active'); // aponta exatamente para a estrela clicada, e também no coração
};




