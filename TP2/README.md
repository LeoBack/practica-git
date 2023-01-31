# Práctica git

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
