/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita 
è palindroma
*/

const btnReverse = document.querySelector('.btnReverse');
let wordResult = document.getElementById('wordresult');

btnReverse.addEventListener('click', function(e){
    e.preventDefault();
    const word = document.getElementById('userWord').value;
    if(word === reverseString(word)){
        return wordResult.innerHTML = 'La parola inserita <span class="fs-3 text-success-emphasis">è palindroma</span>';
    }
    return wordResult.innerHTML = 'La parola inserita <span class="fs-3 text-danger-emphasis"> non è palindroma</span>';
})

function reverseString(str) {
    const splitString = str.split(""); 
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join(""); 
    return joinArray;
}




/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero 
da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il 
computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari 
(usando una funzione)
Dichiariamo chi ha vinto.
*/

/*
creare una select nell'html con le opzioni pari o dispari
creare un campo di input numerico con (min = 1, max = 5)
*/
//function getRandomInt in utility



// user choices
const EvenOrOdd = document.getElementById('selectEoO');
const userNumber = document.getElementById('numberUser');
// random number
let bNum2 = document.querySelector('.btnNum2');
//result
const bWinner = document.querySelector('.btnWinner');
let result = document.querySelector('.result');

let num1;
let num2;

let somma = '';

// evento al btn per il numero random
bNum2.addEventListener('click', function(){
    num2 = getRandomInt(1, 5);
    return document.querySelector('.numComputer').innerHTML += 
    `
        <p class="px-4 mb-0">${num2}</p>
    `;
});


let textResult = document.querySelector('h6');
let evenOdd = '';

// btn che estrae il vincitore
bWinner.addEventListener('click', function(){
    
    const uChoice = EvenOrOdd.value;
    const userNum = parseInt(userNumber.value);
    if (uChoice && userNum && userNum < 1 && userNum > 5) {
        printNum();
        addition(userNum, num2);
        evenOrOdd(somma);
        let verdict = (userChoice == pariDispari) ? 'vinto' : 'perso';
        textResult.innerHTML = `Hai ${verdict}`;
    };
});

//funzioni 
function addition(num1,num2){
    somma = num1 + num2;
    result.innerText += somma;
    return somma;
};
console.log(somma);

function printNum(){
    num2 = getRandomInt(1,5);
    bNum2.innerText = num2;
    addition(userNum,bNum2);
};

function evenOrOdd(num) {
    if (num % 2 === 0) {
        pariDispari = 'pari';
    } else {
        pariDispari = 'dispari';
    }
    return pariDispari;
};

