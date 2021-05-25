/*
Separe um texte que contem espaços, em uum novo array onde cada texto
é uma posição do array. Depois disso, transforme o array em um texto
e onde eram os espaços, coloque _

*/

let phrase = "eu quero viver o amor!"

let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)