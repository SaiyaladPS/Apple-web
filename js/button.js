let ulshow = document.querySelector('#lee');
let btnshow = document.querySelector('#showmanuba');

btnshow.addEventListener('click', function(){
    ulshow.classList.toggle('see')
})

let btnInputshow = document.querySelector('.bjo');
let boxshow = document.querySelector('#box-ba');

btnInputshow.addEventListener('click', function(){
    boxshow.classList.toggle('showbox');
})

let btnshowbox2 = document.querySelector('#showBox-2');
let showbox2 = document.querySelector('#sou')

btnshowbox2.addEventListener('click', function(){
    
    showbox2.style = "display: block";

})
