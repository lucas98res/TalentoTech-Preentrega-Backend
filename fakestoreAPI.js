export function obtenerProductos() {
    fetch("https://fakestoreapi.com/products", {
        method: "GET"
    }).then(async (response) => {
        const data = await response.json()

        console.log(`Los productos son: `)
        data.map((producto) => {
            console.log(producto)
        })
    }).catch((error) => {
        console.log(error)
    })
}

export async function obtenerProducto(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${id}`, {
            method: "GET"
        })

        const data = await response.json()
        console.log(`La informacion del producto es: `, data)
    } catch (error) {
        console.log(error)
    }
}

export async function agregarProducto(producto) {
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json "
            },
            body: JSON.stringify(producto)
        })

        const data = await response.json()
        console.log("Producto agregado correctamente", data)
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarProducto(id) {
    fetch(`https://fakestoreapi.com/${id}`, {
        method: "DELETE"
    }).then(async (response) => {
        const data = await response.json()

        console.log("Producto eliminado correctamente", data)
    }).catch((error) => {
        console.log(error)
    })
}