

let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("nodejs")

//adicionar no começo
techs.unshift("sql")

//remover do fim
techs.pop()

//remover do começo
techs.shift()

//pegar alguns elementos do array
//console.log(techs.slice(1,3))

//remover 1 ou mais itens em qualquer posição
//techs.splice(1, 2)

//encontrar a posição de um elemento no array

let index = techs.IndexOf('html')
techs.splice(index, 1)

console.log(techs)