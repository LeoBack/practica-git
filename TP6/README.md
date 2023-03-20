### TP 6

#### Fuente de datos

```js
// crea una carpeta llamada Tp6 y adentro:
// crea un archivo llamado dataBase.js y pega lo siguiente.

const dataBase = [
  {
    id: 1,
    nombre: 'Leche',
    descripcion: 'Leche liquida de 1lt',
    categoria: 'Lacteos',
    precio: 180.8 
  },
  {
    id: 3,
    nombre: 'Queso Tibo',
    descripcion: 'Queso tibo x 500 grs',
    categoria: 'Lacteos',
    precio: 380.4 
  },
  {
    id: 5,
    nombre: 'Gaseosa CocaCola',
    descripcion: 'Gaseosa CocaCola x 1 lt',
    categoria: 'Bebidas',
    precio: 460.4 
  },
  {
    id: 12,
    nombre: 'Gaseosa Manaos',
    descripcion: 'Gaseosa Manaos de Naranja x 2.5 lts',
    categoria: 'Bebidas',
    precio: 380.0 
  },
  {
    id: 7,
    nombre: 'Jugo Cepita Naranja',
    descripcion: 'Jugo Cepita de naranja x 1 lt',
    categoria: 'Bebidas',
    precio: 250.5 
  },
  {
    id: 15,
    nombre: 'Mani Pehuamar',
    descripcion: 'Mani salado Pehuamar x 500 grs',
    categoria: 'Snacks',
    precio: 300.4 
  },
  {
    id: 8,
    nombre: 'Papas Lays',
    descripcion: 'Papas fritas Lays x 500 grs',
    categoria: 'Snacks',
    precio: 970.0 
  },
  {
    id: 13,
    nombre: 'Palitos Salados',
    descripcion: 'Palitos Salados x 500 grs',
    categoria: 'Snacks',
    precio: 210.6 
  },
  {
    id:11,
    nombre: 'Pipas',
    descripcion: 'Semillas de Girasol Pipas x 500 grs',
    categoria: 'Snacks',
    precio: 340.0 
  },
]

module.exports = dataBase
```

#### Utilizar: **process.argv**

1) En un archivo llamado "busqueda.js", importar el array que se encuentra en dataBase.js y crear una función que acepte como parámetro un id numérico y devuelva el producto correspondiente.

- Ayuda Puedes capturar el id desde terminal, utilizando el process.argv

2) En un archivo llamado "listar.js", importar el array que se encuentra en dataBase.js y crear una función reciba por parámetro una categoría liste los productos de esa categoría.

3) En el archivo creado en el ejercicio 1, llamado busqueda.js, crear otra función que me permita buscar los productos cuyos precios sean menores a un precio que pase por parámetro.

- Ayuda: cuando ejecutes el archivo con node - Ej= node busqueda.js - puedes pasarle el primer argumento por terminal que sera el nombre de la funcion (buscarPorId o buscarPorCategoria) que se debe ejecutar, y el segundo argunmento que sera el parametro que necesita la funcion invocada.

- Ej: node busqueda.js buscarPorId 3
- Ej: node busqueda.js buscarPorCategoria lacteos

- Ayuda: Puedes exportar las funciones asi ```module.exports = { funcion1, funcion2 }```

4) En un archivo llamado "agregar.js", importar el array que se encuentra en dataBase.js y crear una función que me permita agregar un producto a la lista. Ingresando por parámetros, el id, nombre, descripcion, categoria y precio. mostrarlo en un console.log
