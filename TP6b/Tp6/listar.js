// 2) En un archivo llamado "listar.js", importar el array que se encuentra en dataBase.js y crear una función reciba por parámetro
// una categoría liste los productos de esa categoría.
//console.log("-#2------------------");

const readFile = require("./readJSON");
const data = readFile();

const listar = (pCategoria) => data.filter((e) => e.categoria === pCategoria);

// Extra
function listarCategorias() {
  let listCategoria = [];
  for (i = 0; i < data.length; i++) {
    if (listCategoria.indexOf(data[i].categoria) == -1) {
      listCategoria.push(data[i].categoria);
    }
  }
  return listCategoria;
}

// function listarCategorias() {
//   return data.filter((val, ind, arr) => arr.indexOf(val) === ind);
// }

module.exports = { listar, listarCategorias };
