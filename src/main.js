import './style.css'
import {
    letters,
    words,
    upperString,
    titleString,
    backwardsLetters,
    backwardsWords,
    palindrome
} from './functions.js';


function resultado(){
  const frase = prompt("Introduce una frase:").trim();
  console.log(`Frase introducida: "${frase}"`);

    const numLetrasSinEspacios = letters(frase.replace(/\s/g, ''));
    const numPalabras = words(frase);
    console.log(`1. Numero de letras: ${numLetrasSinEspacios}`);
    console.log(`2. Numero de palabras: ${numPalabras}`);

    console.log(`3. Frase en mayusculas: ${upperString(frase)}`);

    console.log(`4. Título (Mayusculas por palabra): ${titleString(frase)}`);

    console.log(`5. Letras al reves: ${backwardsLetters(frase)}`);

    console.log(`6. Palabras al revés: ${backwardsWords(frase)}`);

    const esPalindromo = palindrome(frase);
    console.log(`7. ¿Es palíndromo?: ${esPalindromo ? 'SÍ' : 'NO'}`);
};

resultado();


document.querySelector('#app').innerHTML = `
  <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>frase-vite</title>
  </head>
  <body>
    <p>Abre la consola</p>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
`
