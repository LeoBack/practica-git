// 4) En un archivo llamado "agregar.js", importar el array que se encuentra en dataBase.js
// y crear una función que me permita agregar un producto a la lista. Ingresando por parámetros,
// el id, nombre, descripcion, categoria y precio. mostrarlo en un console.log
// console.log("-#4------------------");

const readFile = require("./readJSON");
const writeFile = require("./writeJSON");

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

  try {
    const data = readFile();
    data.push(producto);
    writeFile(data)
    return data;
  } catch (excepcion) {
    return "Fail";
  }

}

module.exports = agregar;