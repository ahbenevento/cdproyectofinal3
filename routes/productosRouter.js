import { Router } from "express";
import { getProductoController, postProductoController } from '../controllers/productosController.js'

const routerProducto = new Router()

routerProducto.get('/producto', getProductoController)
routerProducto.post('/producto', postProductoController)

export default routerProducto