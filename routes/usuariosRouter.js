// Importaciones 
import { Router } from "express";
import { getUsuarioController, postUsuarioController } from '../controllers/usuariosController.js'

const routerUsuario = new Router()

routerUsuario.get('/usuario', getUsuarioController)
routerUsuario.post('/usuario', postUsuarioController)

export default routerUsuario