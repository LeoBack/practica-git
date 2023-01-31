// TP 2

console.log("1)---------------------")
// 1) La variable definida abajo almacena un numero entero entre 1 y 100 de forma aleatoria, es decir que cada vez que se vuelva a ejectuar el 
// codigo obtendrá un número nuevo aleatorio. Usar esta variable para determinar si el número es par o impar 
// (Un número es par si el resto de la división sobre 2 es igual a 0). Para calcular el resto usar:  **resto = dividendo % 2**.

const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);

function isNumbrePar(pNum) {
    if (pNum % 2)
        console.log("Numero: ", pNum , " es impar")
    else
        console.log("Numero: ", pNum , " es par")
}

isNumbrePar(numeroRandom)

// Extra
console.log("1)-Extra---------------")
for (let i = 0; i < 10; i++) {
    let nRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    isNumbrePar(nRandom)
}


console.log("2)---------------------")
// 2) Dada dos palabras, "tren" y "edificio", hacer un programa que nos permita calcular cuál palabra es más larga. Usar la función **length**

function compareString(p1, p2) {
    if (p1.length > p2.length) { console.log(p1, " [tiene mas caracteres que] ", p2) } 
    else if (p1.length < p2.length) { console.log(p2, " [tiene mas caracteres que] ", p1) }
    else if (p1.length === p2.length) { console.log(p1," [tiene la misma cantidad de caracteres que] ", p2) }
    else { console.log("No se pudo comparar: ", p1, " contra ", p2 ) }
}

compareString("tren", "edificio")


console.log("3)---------------------")
// 3) Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número 9. Se puede usar la función **while** o **for**.

for (let i = 0; i <= 10; i++) {
    console.log(i, "x", 9, "=", i*9 )
}

// Extra
console.log("3)-Extra---------------")
for (let iTable = 1; iTable <= 9; iTable++) {
    console.log("Tabla del ", iTable)
    for (let i = 0; i <= 10; i++) {
        console.log(i, "*", iTable, "=", i*iTable )
    }
}

console.log("4)---------------------")
// 4) Escribir una función con el nombre "multiplicar" que me permita pasarle un número como párametro 
// y lo multiplique x **23** y retorne el resultado. 
// Usar esta funcion en otra variable y mostrar el resultado con el **console.log**

function multiplicar(pNum) {
    return pNum * 23
}
let resultado = multiplicar(numeroRandom)
console.log(resultado, "es el resltado de multiplicar:", numeroRandom, "por 23")

console.log("4)-Extra---------------")
const multiplicar = (pNum) => pNum * 23
console.log(multiplicar(numeroRandom), "es el resltado de multiplicar:", numeroRandom, "por 23")


console.log("5)---------------------")
// 5) Escribir un programa que inicie un array vacío y luego vaya almacenando números aleatorios. 
// Puede usar la variable "numeroRandom" del ejercicio 1. 

let arrayTemporal = new Array()
const sizeArray = 20
let indexArray = 0

while (indexArray < sizeArray) {
    let nRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    arrayTemporal.unshift(nRandom)
    indexArray++
}

console.log(arrayTemporal)