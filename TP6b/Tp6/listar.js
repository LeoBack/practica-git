// 2) En un archivo llamado "listar.js", importar el array que se encuentra en dataBase.js y crear una función reciba por parámetro
// una categoría liste los productos de esa categoría.
console.log("-#2------------------");

const readFile = require("./readJSON");
const writeFile = require("./writeJSON");

function listar(pCategoria) {
  const data = readFile();
  let listCategoria = new Array();
  for (i = 0; i < data.length; i++) {
    if (data[i].categoria == pCategoria) {
      listCategoria.push(data[i]);
    }
  }
  return listCategoria;
}

// Extra
function listarCategorias() {
  const data = readFile();
  let listCategoria = new Array();
  for (i = 0; i < data.length; i++) {
    if (listCategoria.indexOf(data[i].categoria) == -1) {
      listCategoria.push(data[i].categoria);
    }
  }
  return listCategoria;
}

module.exports = { listar, listarCategorias};