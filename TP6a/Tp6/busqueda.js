const data = require("../dataBase");

// 1) En un archivo llamado "busqueda.js", importar el array que se encuentra en dataBase.js y crear una función que acepte como parámetro
// un id numérico y devuelva el producto correspondiente.
// - Ayuda Puedes capturar el id desde terminal, utilizando el process.argv
// console.log("-#1------------------");

const buscarPorId = (pId) => 
  data.filter((e) => e.id === pId) 

// 3) En el archivo creado en el ejercicio 1, llamado busqueda.js, crear otra función que me permita buscar los productos cuyos precios
// sean menores a un precio que pase por parámetro.
// - Ayuda: cuando ejecutes el archivo con node - Ej= node busqueda.js - puedes pasarle el primer argumento por terminal que sera
// el nombre de la funcion (buscarPorId o buscarPorCategoria) que se debe ejecutar, y el segundo argunmento que sera el parametro que necesita la funcion invocada.
// - Ej: node busqueda.js buscarPorId 3
// - Ej: node busqueda.js buscarPorCategoria lacteos
// - Ayuda: Puedes exportar las funciones asi ```module.exports = { funcion1, funcion2 }```
// console.log("-#3------------------");

const buscarProductosHastaPrecio = (pPrecio) =>
  data.filter((e) => e.precio <= pPrecio);

module.exports = { buscarPorId, buscarProductosHastaPrecio }