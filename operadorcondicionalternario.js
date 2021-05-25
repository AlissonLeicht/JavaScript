//Operador Condicional (Ternário)

//Dependendo da condição, nós receberemos valores diferentes

//Condição então valor 1 se não valor 2
// Condition ? value1 : value2

//Exemplos

//Café da manhã top

let cafe = true
let queijo = true

const CafedaManha = cafe && queijo ? 'Café da manhã top' : 'Café da manhã ruim'
console.log(CafedaManha)

//Maior de 18

let age = 16
const CanDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(CanDrive)