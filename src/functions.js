/*Vamos a pedir al usuario que introduzca una frase y a continuación mostraremos en la consola:

    el número de letras y de palabras que tiene
    la frase en mayúsculas
    la frase con la primera letra de cada palabra en mayúsculas
    la frase escrita con las letras al revés
    la frase escrita con las palabras al revés
    si es o no un palíndromo (si se lee igual al revés) pero omitiendo espacios en blanco y sin 
    diferenciar mayúsculas y minúsculas.
*/


function letters(frase) {
    'use strict'
    return frase.length;
}

function words(frase) {
    'use strict'
    let arrayFrase = frase.trim().split(" ");
    return arrayFrase.length;
}

function upperString(frase) {
    'use strict'
    return frase.toLocaleUpperCase();
}

function titleString(frase) {
    'use strict'
    let arrayFrase = frase.trim().split(" ");
    if (arrayFrase.length === 0 || (arrayFrase.length === 1 && arrayFrase[0] === "")) {
        return "";
    }

    let arrayLetraMayus = arrayFrase.map(palabra => {
        if (palabra.length === 0) {
            return "";
        }

        let primeraLetra = palabra[0].toUpperCase();
        let restoPalabra = palabra.slice(1).toLowerCase();
        return primeraLetra + restoPalabra;
    });
    return arrayLetraMayus.join(" ");
}

function backwardsLetters(frase) {
    'use strict'
    return frase.split("").reverse().join("");

}


function backwardsWords(frase) {
    'use strict'
    let arrayFrase = frase.trim().split(" ");
    let palabrasInvertidas = arrayFrase.reverse();
    let cadenaInvertida = palabrasInvertidas.join(" ");
    return cadenaInvertida;
}

function palindrome(frase) {
    'use strict'
    let textoLimpio = frase.toLowerCase().replace(/\s/g, "");
    const textoInvertido = textoLimpio.split("").reverse().join("");
    return textoLimpio === textoInvertido;
}

export {
    letters,
    words,
    upperString,
    titleString,
    backwardsLetters,
    backwardsWords,
    palindrome
}

