# Práctica git

### TP 1
1) Crear una carpeta en tu pc dentro de ella iniciar git
2) Configurar tu user.name y tu user.email para esta carpeta
3) Crear un archivo javascript, con cualquier nombre
4) Inicia dos variables numéricas y asignales cualquier valor numérico
5) Suma las variables creadas en el punto anterior y guarda el resultado en una tercara variable llamada resultado
6) Muestra la variable resultado en consula
7) Crea un repositorio en Github y sube tu código, luego comparte el link de tu repositorio

---

### TP 2
1) La variable definida abajo almacena un numero entero entre 1 y 100 de forma aleatoria, es decir que cada vez que se vuelva a ejectuar el codigo obtendrá un número nuevo aleatorio.

``` js
  const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
```

 - usar esta variable para determinar si el número es par o impar (Un número es par si el resto de la división sobre 2 es igual a 0). Para calcular el resto usar:  **resto = dividendo % 2**.

 2) Dada dos palabras, "tren" y "edificio", hacer un programa que nos permita calcular cuál palabra es más larga. Usar la función **length**

 3) Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número 9. Se puede usar la función **while** o **for**.

 ```
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36
9 x 5 = 45
9 x 6 = 54
9 x 7 = 63
9 x 8 = 72
9 x 9 = 81
9 x 10 = 90
 ```

 4) Escribir una función con el nombre "multiplicar" que me permita pasarle un número como párametro y lo multiplique x **23** y retorne el resultado. Usar esta funcion en otra variable y mostrar el resultado con el **console.log**

 5) Escribir un programa que inicie un array vacío y luego vaya almacenando números aleatorios. Puede usar la variable "numeroRandom" del ejercicio 1. 

---

 ### TP 3
 1) Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.

 2) Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años que ha cumplido (desde 1 hasta su edad).

 3) Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números impares desde 1 hasta ese número separados por comas.

 4) Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo rectángulo como el de más abajo, de altura el número introducido.

  ```
  *
  **
  ***
  ****
  *****
  ```

  5) Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a una las letras de la palabra introducida empezando por la última.

---

### TP 4
1) Escribir una función a la que se le pase una cadena "nombre" y muestre por pantalla el saludo ¡hola nombre!.

2) Escribir un programa que le pida al usuario que ingrese su nombre apellido edad y muestre un objeto con los datos ingresados.

Ej:
```json
{
  nombre: "",
  apellido: "",
  edad: 0
}
```

3) Escribir una funcion que espere dos parámetros, uno de los cuales deberá ser un array, y el otro parámetro debe ser el elemento a buscar en el array. Si lo encuentra debera devoler "Elemento encontrado en la posicion (posición)".

Ej.
```js
const miLista1 = [2, "Eric", "Jarra"]
const miLista2 = ["Leche", "Café", "Chocolate"]

function buscarElemento() {
  // aqui defino la funcion
}

buscarElemento(miLista1, "Jarra")
// Esta funcion debe retornar:
// Elemento encontrado en la posicion 2

buscarElemento(miLista2, "Café")
// Esta funcion debe retornar:
// Elemento encontrado en la posicion 1

```

4) Dada un lista o array, escribir un programa que invierta sus elementos.

Ej
```
 [3,5,7,8]  // ---->  [8,7,5,3]
```

---

### TP 5
#### Arrays

1) Dados 2 arrays **["Juan", "Dani"]** y **["Leo", "Monica", "Juliana"]**, escribir una función que concatene "unifique" los dos array y devuelva un solo array **["Juan", "Dani", "Leo", "Monica", "Juliana"]**. 

- Ayuda: Puedes crear un tercer array vacío e ir poniendo los elementos en dicho array.

2) Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.

3) Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».

4) Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar la suma de todos los números del arreglo.

5) Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el numero mayor de ellos, si son iguales devolver un String «son iguales».
---

### TP 6

#### Fuente de datos

```js
// crea una carpeta llamada Tp4 y adentro:
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
