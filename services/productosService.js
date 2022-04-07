import { productosDao } from '../model/index.js'

async function obtenerTodosLosDatos() {
    return await productosDao.obtenerTodos()
}

async function crearProducto(producto) {
    await productosDao.guardar(producto)
    return producto
}

export { obtenerTodosLosDatos, crearProducto }