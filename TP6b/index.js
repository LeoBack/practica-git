// Directorios
const dirCmd = `./Tp6`;

// Comandos
const agregar = require(`${dirCmd}/agregar.js`);
const busqueda = require(`${dirCmd}/busqueda.js`);
const listar = require(`${dirCmd}/listar.js`);

// MAIN
const command = process.argv[2];

switch (command) {
    case "listar":
        if (process.argv.length == 4) {
            console.log(listar.listar(process.argv[3]));
        } else {
            console.log(
                `Ingrese en consola: node index.js listar Lacteos\nCategorias disponibles: ${listar.listarCategorias()}`
            );
        }
        break;
    case "agregar":
        if (process.argv.length == 8) {
            console.log(
                agregar(
                    process.argv[3],
                    process.argv[4],
                    process.argv[5],
                    process.argv[6],
                    process.argv[7]
                )
            );
        } else {
            console.log(
                "Ingrese en consola: node index.js 99 Ketchup 'Salsa de tomate' Aderezos 199.99"
            );
        }
        break;
    case "buscar":
        if (process.argv.length == 4) {
            console.log(busqueda.buscarPorId(process.argv[3]));
        } else {
            console.log("Ingrese en consola:\n- node index.js buscar 1");
        }
        break;
    case "buscarPrecio":
        if (process.argv.length == 4) {
            console.log(busqueda.buscarProductosHastaPrecio(process.argv[3]));
        } else {
            console.log("Ingrese en consola:\n- node index.js buscarPrecio 300.5");
        }
        break;
    default:
        console.log( "Ejemplo de comandos disponibles:" +
            "\n\t node index.js listar Lacteos" +
            "\n\t node index.js agregar 99 Ketchup 'Salsa de tomate' Aderezos 199.99" +
            "\n\t node index.js buscar 1" +
            "\n\t node index.js buscarPrecio 300.5")
        break;
}