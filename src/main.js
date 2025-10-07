import { letters, words, upperString, titleString, backwardsLetters, backwardsWords, palindrome } from './functions.js'
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

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
