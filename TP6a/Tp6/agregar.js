// 4) En un archivo llamado "agregar.js", importar el array que se encuentra en dataBase.js
// y crear una función que me permita agregar un producto a la lista. Ingresando por parámetros,
// el id, nombre, descripcion, categoria y precio. mostrarlo en un console.log
// console.log("-#4------------------");

const data = require("../dataBase");

function agregar(pId, pNombre, pDescripcion, pCategoria, pPrecio) {
  // // Id se repite
  // for (i = 0; i < data.length; i++) {
  //   if (data[i].id == pId) {
  //     return "El Id se repite";
  //   }
  // }

  // Precio es numero
  const parsed = Number.parseFloat(pPrecio);
  if (Number.isNaN(parsed)) {
    return "el precio no es valido";
  }

  let producto = {
    id: pId,
    nombre: pNombre,
    descripcion: pDescripcion,
    categoria: pCategoria,
    precio: pPrecio,
  };

  data.push(producto);
  return data;
}

// MAIN
// if (process.argv.length == 7) {
//   console.log(
//     agregar(
//       process.argv[2],
//       process.argv[3],
//       process.argv[4],
//       process.argv[5],
//       process.argv[6]
//     )
//   );
// } else {
//   console.log(
//     "Ingrese en consola: node agregar.js 99 Ketchup 'Salsa de tomate' Aderezos 199.99"
//   );
// }

module.exports = agregar;