
// crea una carpeta llamada Tp4 y adentro:
// crea un archivo llamado dataBase.js y pega lo siguiente.
// Utilizar: **process.argv**

// 1) En un archivo llamado "busqueda.js", importar el array que se encuentra en dataBase.js y crear una función que acepte como parámetro 
// un id numérico y devuelva el producto correspondiente.
// - Ayuda Puedes capturar el id desde terminal, utilizando el process.argv
console.log("-#1------------------");

// 2) En un archivo llamado "listar.js", importar el array que se encuentra en dataBase.js y crear una función reciba por parámetro 
// una categoría liste los productos de esa categoría.
console.log("-#2------------------");

// 3) En el archivo creado en el ejercicio 1, llamado busqueda.js, crear otra función que me permita buscar los productos cuyos precios 
// sean menores a un precio que pase por parámetro.
// - Ayuda: cuando ejecutes el archivo con node - Ej= node busqueda.js - puedes pasarle el primer argumento por terminal que sera 
// el nombre de la funcion (buscarPorId o buscarPorCategoria) que se debe ejecutar, y el segundo argunmento que sera el parametro que necesita la funcion invocada.
// - Ej: node busqueda.js buscarPorId 3
// - Ej: node busqueda.js buscarPorCategoria lacteos
// - Ayuda: Puedes exportar las funciones asi ```module.exports = { funcion1, funcion2 }```
console.log("-#3------------------");

// 4) En un archivo llamado "agregar.js", importar el array que se encuentra en dataBase.js 
// y crear una función que me permita agregar un producto a la lista. Ingresando por parámetros, 
// el id, nombre, descripcion, categoria y precio. mostrarlo en un console.log
console.log("-#4------------------");