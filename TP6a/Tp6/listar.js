// 2) En un archivo llamado "listar.js", importar el array que se encuentra en dataBase.js y crear una función reciba por parámetro
// una categoría liste los productos de esa categoría.
// console.log("-#2------------------");

const data = require("../dataBase");

// function listar(pCategoria) {
//   let listCategoria = new Array();
//   for (i = 0; i < data.length; i++) {
//     if (data[i].categoria == pCategoria) {
//       listCategoria.push(data[i]);
//     }
//   }
//   return listCategoria;
// }
const listar = (pCategoria) => data.filter((e) => e.categoria === pCategoria);

// Extra
function listarCategorias() {
  let listCategoria = new Array();
  for (i = 0; i < data.length; i++) {
    if (listCategoria.indexOf(data[i].categoria) == -1) {
      listCategoria.push(data[i].categoria);
    }
  }
  return listCategoria;
}

module.exports = { listar, listarCategorias };
