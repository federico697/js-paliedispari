// snack pari e dispari

// l utente sceglie pari o dispari e inserisce un numero da 1 a 5
// 1 - far scegliere pari o dispari
let sceltaUtente = prompt('giochi pari o dispari: scrivi la parola"pari" o "dispari" ?');
console.log(sceltaUtente);
// 2 - far scegliere anche un numero alla persona
let sceltaNumero = parseInt( prompt('scegli un nuemro da 1 a 5'));
console.log(sceltaNumero);

// generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
// 1 - creaiamo la funzione ?
// function nomeFunzione(param, param){
//     mio codice
// }

// 2 - creare la funzione , numero random da 1 a 5
function numeroRandomComputer(min, max){
    let numeroRandom = Math.floor(Math.random() * (max - min + min)) + min;
    return numeroRandom;
}
// 3 - invocare la funzione
let numRand = numeroRandomComputer(1, 5);
console.log(numRand);


// sommiamo i due numeri
function somma(){
    let somma = sceltaNumero + numRand;
    return somma
}
let valoreSommaFunzione = somma(sceltaNumero, numRand);
console.log( valoreSommaFunzione );

// stabiliamo se la somma dei due numeri sia pari o dipari usando una funzione
function controlloPariDispari(){
    let controllo = '';
    if(valoreSommaFunzione % 2 == 0){
    controllo= 'pari';
    } else {
        controllo= 'dispari';
    }
    return controllo
}

if( sceltaUtente == controlloPariDispari() ){
    console.log('utente vince');
} else {
    console.log('utente perde');
}
