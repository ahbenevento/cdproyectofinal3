import { obtenerTodosLosDatos, crearProducto } from '../services/productosService.js'

async function getProductoController(req, res) {
    const producto = await obtenerTodosLosDatos()
    res.json(producto)
    // res.json({hola: 'chau'})
}

async function postProductoController(req, res) {
    const producto = req.body
    await crearProducto(producto)
    res.status(201).json(producto)
}

export { getProductoController, postProductoController }