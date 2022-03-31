// Importaciones 
import { Router } from "express";
import { getUsuarioController, postUsuarioController } from '../controller/usuariosController.js'

const routerUsuario = new Router()

routerUsuario.get('/usuario', getUsuarioController)
routerUsuario.post('/usuario', postUsuarioController)

export default routerUsuario