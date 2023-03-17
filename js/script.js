// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const btnReverse = document.querySelector('.btnReverse');
let result = document.getElementById('result');

btnReverse.addEventListener('click', function(e){
    e.preventDefault();
    const word = document.getElementById('userWord').value;
    if(word === reverseString(word)){
        return result.innerHTML = 'La parola inserita <span class="fs-3 text-success-emphasis">è palindroma</span>';
    }
    return result.innerHTML = 'La parola inserita <span class="fs-3 text-danger-emphasis"> non è palindroma</span>';
})

function reverseString(str) {
    const splitString = str.split(""); 
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join(""); 
    return joinArray;
}



// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



