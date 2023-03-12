const readlineSync = require("readline-sync");

const msgErrorNumber = "-> Ingrese solo un numero entero";
const msgErrorLetter = "-> Ingrese solo una letra";

// 1) Dados 2 arrays **["Juan", "Dani"]** y **["Leo", "Monica", "Juliana"]**,
// escribir una función que concatene "unifique" los dos array y devuelva
// un solo array **["Juan", "Dani", "Leo", "Monica", "Juliana"]**.
// - ayuda: Puedes crear un tercer array vacío e ir poniendo los elementos en dicho array.
console.log("\n-#1------------------");
let listOne = ["Juan", "Dani"];
let listTwo = ["Leo", "Monica", "Juliana"];

const list = (pListone, pListTwo) => pListone.concat(pListTwo);

console.log("Array 1: " + listOne);
console.log("Array 2: " + listTwo);
console.log("Array 1+2: " + list(listOne, listTwo));

// 2) Escriba una función con el nombre de esVocal() que tome un carácter ,
// devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.
console.log("\n-#2------------------");
const vocales = ["a", "e", "i", "o", "u"];

const esVocal = (pLetter) => {
  if (pLetter.length == 1) {
    const isLetter = vocales.find(
      (element) => element === pLetter.toLowerCase()
    );
    return isLetter === undefined ? "-> No es una vocal" : "-> Es una vocal";
  } else {
    return msgErrorLetter;
  }
};

const letter = readlineSync.question("Ingrese una Letra: ");
console.log(esVocal(letter));

// 3) Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n)
// y un carácter, retornar el carácter multiplicado por n.
// Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».
console.log("\n-#3------------------");

// https://es.stackoverflow.com/questions/230177/validar-solo-letras-en-javascript
function generar_caracteres(pLetter, pNumberInt) {
  const pattern = new RegExp('^[A-Z]+$', 'i')  
  if (pLetter.length == 1 & pattern.test(pLetter)) {
    if (pNumberInt.indexOf(".") == -1 && pNumberInt.indexOf(",") == -1) {
      const parsed = Number.parseInt(pNumberInt, 10);
      return !Number.isNaN(parsed)
        ? "-> " + pLetter.repeat(pNumberInt)
        : msgErrorNumber;
    } else {
      return msgErrorNumber;
    }
  } else {
    return msgErrorLetter;
  }
}

const char = readlineSync.question("Ingrese una Letra: ");
const numberInt = readlineSync.question("Ingrese una numero entero: ");
console.log(generar_caracteres(char, numberInt));

// 4) Crear una función sumaArreglo() que tome como parámetro un arreglo de números,
// retornar la suma de todos los números del arreglo.
console.log("-#4------------------");

const numbers = [0, 2, 4, 6, 8];

function sumaArreglo() {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log("-> Cont. array: " + numbers);
console.log("-> Suma del cont. del array: " + sumaArreglo());

// 5) Crea una función llamada numeroMayor() que toma tres números como entrada y
// retornar el numero mayor de ellos, si son iguales devolver un String «son iguales».
console.log("-#5------------------");

function isNumberArray(pArrayNumber) {
  for (i = 0; i < pArrayNumber.length; i++) {
    const parsed = Number.parseInt(pArrayNumber[i], 10);
    if (Number.isNaN(parsed)) return false;
  }
  return true;
}

function numeroMayor(pArrayNumber) {
  if (isNumberArray(pArrayNumber)) {
    let numMayor = 0;
    for (i = 0; i < pArrayNumber.length; i++) {
      numMayor = numMayor < pArrayNumber[i] ? pArrayNumber[i] : numMayor;
    }
    return numMayor;
  } else {
    return "ERROR - Ingrese solo numeros";
  }
}

let numArray = new Array();
for (i = 0; 3 > i; ) {
  numArray.push(readlineSync.question("#" + ++i + " - Ingrese un numero: "));
}

console.log("-> El mayor numero es: " + numeroMayor(numArray));