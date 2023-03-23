// 4) En un archivo llamado "agregar.js", importar el array que se encuentra en dataBase.js
// y crear una función que me permita agregar un producto a la lista. Ingresando por parámetros,
// el id, nombre, descripcion, categoria y precio. mostrarlo en un console.log
// console.log("-#4------------------");

const readFile = require("./readJSON");
const writeFile = require("./writeJSON");

function agregar(pId, pNombre, pDescripcion, pCategoria, pPrecio) {
  const data = readFile();

  // VALIDACIONES - Precio es numero?
  const parsed = Number.parseFloat(pPrecio);
  console.log(parsed)
  if (Number.isNaN(parsed)) {
    return "El precio no es valido";
  }
  // VALIDACIONES - Id se repite?
  if (data.find((e) => e.id == pId)) {
    return "El id de producto ya se encontra registrado";
  }

  let producto = {
    id: pId,
    nombre: pNombre,
    descripcion: pDescripcion,
    categoria: pCategoria,
    precio: pPrecio,
  };

  try {
    data.push(producto);
    writeFile(data)
    return data;
  } catch (excepcion) {
    return "Fail";
  }

}

module.exports = agregar;