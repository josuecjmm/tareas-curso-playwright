console.log('Hello World')
console.log('Hola bienvenidos al curso de Playwright')
// trozos del codigo que no hacen nada
// solo sirven para orientar o comunicar y explicar algo en el codigo 
// iasdhaoisdhas
/**
 * Yo puedo escribir 
 * en multiples lineas 
 * y hasta que salga del codigo multilinea
 */

// Variables 
const variableQueNoCambia = 'Valor de variable que no cambia'
console.log(variableQueNoCambia)
// no se puede reasignar un valor a una const o constante 
// variableQueNoCambia = 'nuevo valor' ==> MAL 
let variableQueSePuedeReasignar = 'valor'
console.log('inicio=>', variableQueSePuedeReasignar)
variableQueSePuedeReasignar = 'valor nuevo!'
console.log('despues=>', variableQueSePuedeReasignar)

// LAS VARIABLES VAR se consideran una mala practica en Javascript 
// Introducido en ES2016
var variableVar = 'valor var' // NO USAR! 
console.log('variableVar=>', variableVar)

// TIPOS NATIVOS DE VARIABLES 
// undefined 
const newVariableUndefined = undefined
console.log('newVariableUndefined=>', newVariableUndefined)
// number 
const num = 45;
console.log('num=>', num)
console.log('num typeof=>', typeof num)
console.log(45 + 'test')
// string 
const chainOfCharacters = 'Jessy'
console.log('chainOfCharacters=>', chainOfCharacters)
console.log('chainOfCharacters typeof=>', typeof chainOfCharacters)
// Boolean 
const bool = true;
console.log('bool=>', bool)
console.log('bool type=>', typeof bool)
// Object 
const obj = {};
console.log('obj=>', obj)
console.log('obj type=>', typeof obj)

const alumnos = {
    jessy: 'Jessy',
    valery: 'Valery',
    camilo: 'Camilo',
    total: 15,
    present: true,
}

const products = {
    car: 'Car',
    bike: 'Bike',
}
// if(value === 'car');

console.log('alumnos=>', alumnos)
console.log('alumnos total =>', alumnos.total)
console.log('alumnos total =>', alumnos)

// Arrays 
const arrayOfName = ['Camilo', 'Massiel', 'Pablo']
const arrayOfName2 = [1, 'Massiel', true]
const arrayOfName3 = [
    1,
    'Massiel',
    {
        test: 'test'
    }
]
console.log('arrayOfName3=>', arrayOfName3)
// Conditionales 
console.log('*************')
// Conditional If 
if(2+2 === 5) {
    console.log('Resultado Correcto')
} else {
    console.log('Resultado incorrecto')
}
// Conditional Switch 
const fruta = 'sfsdfsd';
switch(fruta) {
    case 'Banano': 
    console.log('Banano')
    break;
    case 'Sandia': 
    console.log('Sandia')
    break;
    default: 
    console.log('Valor invalido de fruta')
}

const precio = 50;
switch(precio) {
    case precio < 40: 
    console.log('No')
    break;
    case precio > 50: 
    console.log('Muy Caro')
    break;
    case precio < 10: 
    console.log('Comprelo!')
    break;
}
// Functions 
// Permitir encapsular la logica 
function printHello() {
    console.log('Print Hello!!')
}

printHello();