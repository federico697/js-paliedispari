var parola = prompt('inserisci una parola');

var parolaReverse = giraParola(parola);

if ( parola == parolaReverse ){
    console.log('palindroma');
} else {
    console.log(' NON palindroma');
}

function giraParola(parola){

    var parolaReverse = '';

    for(var i = parola.length - 1; i >= 0; i-- ){
        parolaReverse += parola[i];
    }
    
    return parolaReverse;
}
