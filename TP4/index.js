console.log("-TP4------------------");

//-TEST-----------------------------------------------------------------
console.log("-#TEST---------------");
console.log("Existen ", process.argv.length, " argumentos")
for (i = 0; i < process.argv.length; i++) {
    console.log("argumentos #",i, " = ", process.argv[i])
}
//-TEST-----------------------------------------------------------------


// 1) Escribir una función a la que se le pase una cadena "nombre" y muestre por pantalla el saludo ¡hola nombre!.
console.log("-#1------------------");
console.log("Hola " + process.argv[2])


// 2) Escribir un programa que le pida al usuario que ingrese su nombre apellido edad y muestre un objeto con los datos ingresados.
// Ej.: .json
// {
//   nombre: "",
//   apellido: "",
//   edad: 0
// }
console.log("-#2------------------");
const readlineSync = require("readline-sync")

const json = {
    nombre: "",
    apellido: "",
    edad: 0
}

//-TEST-----------------------------------------------------------------
// const nombre = null
// const apellido= null
// const edad = null
// const msgError = "ingreso no valido"

// let valido = false 
// while (!valido) {
//     nombre = readlineSync.question("Ingrese nombre: ")
//     if (typeof nombre === 'undefined' || nombre  === null) {
//         console.log(msgError)
//     }
//     else {
//         json.nombre = nombre
//         valido = true
//     }
// }

// valido = false 
// while (!valido) {
// apellido = readlineSync.question("Ingrese apellido: ")
//     if (typeof apellido === 'undefined' || apellido  === null) {
//         console.log(msgError)
//     } 
//     else {
//         json.apellido = apellido
//         valido = true
//     }
// }

// valido = false 
// while (!valido) {
//     edad = readlineSync.question("Ingrese edad: ")
//     if (typeof edad === 'undefined' || edad  === null) {
//         console.log(msgError)
//     } 
//     else {
//         json.edad = edad
//         valido = true
//     }
// }
//-TEST-----------------------------------------------------------------

const nombre = readlineSync.question("Ingrese nombre: ")
const apellido = readlineSync.question("Ingrese apellido: ")
const edad = readlineSync.question("Ingrese edad: ")

json.nombre = nombre
json.apellido = apellido
json.edad = edad

console.log(json)


// 3) Escribir una funcion que espere dos parámetros, uno de los cuales deberá ser un array, y el otro parámetro debe ser el elemento a buscar en el array.
// Si lo encuentra debera devoler "Elemento encontrado en la posicion (posición)".
// Ej.: .js
// const miLista1 = [2, "Eric", "Jarra"]
// const miLista2 = ["Leche", "Café", "Chocolate"]
// function buscarElemento() {
//   // aqui defino la funcion
// }
//
// buscarElemento(miLista1, "Jarra")
// // Esta funcion debe retornar:
// // Elemento encontrado en la posicion 2
//
// buscarElemento(miLista2, "Café")
// // Esta funcion debe retornar:
// // Elemento encontrado en la posicion 1
console.log("-#3------------------");

const miLista1 = [2, "Eric", "Jarra"]
const miLista2 = ["Leche", "Café", "Chocolate"]

function buscarElemento(pLista, pBuscar) {
    console.log("Buscar: ", pBuscar, " - Posicion: ", pLista.indexOf(pBuscar))
}

buscarElemento(miLista1, "Jarra")
// Esta funcion debe retornar:
// Elemento encontrado en la posicion 2

buscarElemento(miLista2, "Café")
// Esta funcion debe retornar:
// Elemento encontrado en la posicion 1


// 4) Dada un lista o array, escribir un programa que invierta sus elementos.
// Ej.: [3,5,7,8]  // ---->  [8,7,5,3]
console.log("-#4------------------");

const miLista = [ 3, 5, 7, 8 ]

console.log(miLista)
miLista.reverse()
console.log(" ----> ", miLista)