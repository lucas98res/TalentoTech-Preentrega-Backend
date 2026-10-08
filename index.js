import { agregarProducto, eliminarProducto, obtenerProducto, obtenerProductos } from "./fakestoreAPI.js"

const argumentos = process.argv.slice(2)

switch (argumentos[0]) {
    case "GET":
        if (argumentos[1] == "products") {
            obtenerProductos()
        } else if (argumentos[1].includes("products/")) {
            obtenerProducto(argumentos[1])
        }
        break;
    case "POST":
        if (argumentos[1] == "products" && argumentos.length == 5) {
            const producto = {
                title: argumentos[2],
                price: argumentos[3],
                category: argumentos[4]
            }

            agregarProducto(producto)
        }
        break;
    case "DELETE":
        if (argumentos[1].includes("products/")) {
            eliminarProducto(argumentos[1])
        }
        break;
    default:
        console.log("Comando incorrecto")
}