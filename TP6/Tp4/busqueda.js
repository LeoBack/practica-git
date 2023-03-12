// 1) En un archivo llamado "busqueda.js", importar el array que se encuentra en dataBase.js y crear una función que acepte como parámetro
// un id numérico y devuelva el producto correspondiente.
// - Ayuda Puedes capturar el id desde terminal, utilizando el process.argv
console.log("-#1------------------");

const data = require("./dataBase");

function buscarPorId(pId) {
  for (i = 0; i < data.length; i++) {
    if (data[i].id == pId) {
      return data[i];
    }
  }
  return false;
}

// // MAIN
// if (process.argv.length == 3) {
//   console.log(buscarPorId(process.argv[2]));
// } else {
//   console.log("Ingrese en consola: node busqueda.js 1");
// }

// 3) En el archivo creado en el ejercicio 1, llamado busqueda.js, crear otra función que me permita buscar los productos cuyos precios
// sean menores a un precio que pase por parámetro.
// - Ayuda: cuando ejecutes el archivo con node - Ej= node busqueda.js - puedes pasarle el primer argumento por terminal que sera
// el nombre de la funcion (buscarPorId o buscarPorCategoria) que se debe ejecutar, y el segundo argunmento que sera el parametro que necesita la funcion invocada.
// - Ej: node busqueda.js buscarPorId 3
// - Ej: node busqueda.js buscarPorCategoria lacteos
// - Ayuda: Puedes exportar las funciones asi ```module.exports = { funcion1, funcion2 }```
console.log("-#3------------------");

const buscarProductosHastaPrecio = (pPrecio) =>
  data.filter((e) => e.precio <= pPrecio);

const msgError =
  "Ingrese en consola:\n- node busqueda.js buscar 1\n- node busqueda.js precio 300.5";

// MAIN
if (process.argv.length == 4) {
  const commnad = process.argv[2];
  const param1 = process.argv[3];
  switch (commnad.toLowerCase()) {
    case "buscar": {
      console.log(buscarPorId(param1));
      break;
    }
    case "precio": {
      console.log(buscarProductosHastaPrecio(param1));
      break;
    }
    default: {
      console.log(msgError);
    }
  }
} else {
  console.log(msgError);
}
