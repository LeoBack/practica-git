console.log("-TP3------------------");
const readlineSync = require("readline-sync")
// 1) Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.
console.log("-#1------------------");
const userName = readlineSync.question("Ingrese su nombre: ")

for (i = 0; i < 10;) {
    console.log("#", ++i, " Hola como estas ", userName)
}

// 2) Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años que ha cumplido (desde 1 hasta su edad).
console.log("-#2------------------");

function printEdad(pEdad) {
    for (i = 0; i < pEdad;) {
        console.log("Edad # ", ++i)
    }
    // Otra manera
    //for (i = 1; i < pEdad+1; i++) {
    //    console.log("Edad # ", i)
    //}  
}

const edad = readlineSync.question("Ingrese su edad: ")
printEdad(edad );

// 3) Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números impares desde 1 hasta ese número separados por comas.
console.log("-#3------------------");

const esEntero = (x) => (~~x === x)
const esNumeroImpar = (pNum) => (pNum % 2)

function print(pNum) {
    let numeros = ""
    for (i = 0; i <= pNum; i++) {
        if (i === 1) {
            numeros = i
        }
        else if (esNumeroImpar(i)) {
            numeros = numeros + ", " + i
        }
        else { }
    }
    return numeros
}

const num = readlineSync.question("Ingrese un numero entero positivo: ")

if (esEntero(num)) {
    console.log("El numero no un entero")
}
else if (num < 0) {
    console.log("El numero no es positivo")
}
else {
    console.log(print(num))
}

// 4) Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo rectángulo como el de más abajo, de altura el número introducido.
// ```
// *
// **
// ***
// ****
// *****
// ```
console.log("-#4------------------");
const numEntero = readlineSync.question("Ingrese un numero entero: ")

function printTriangulo(pNum) {
    for (i = 0; i < pNum;) {
        console.log("*".repeat(++i))
    }
}

printTriangulo(numEntero)

//5) Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a una las letras de la palabra introducida empezando por la última.
console.log("-#5------------------");
const palabra = readlineSync.question("Ingrese una palabra: ")

function printPalabra(pPalabra) {
    let resultPalabra = " "
    for (i = pPalabra.length-1; i >= 0; i--) {
        resultPalabra = resultPalabra + pPalabra[i]
    }
    return resultPalabra
}

console.log(printPalabra(palabra))