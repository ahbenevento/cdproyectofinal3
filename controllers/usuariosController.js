// Importaciones
import { obtenerTodosLosDatos, crearUsuario } from '../services/usuariosService.js'

async function getUsuarioController(req, res) {
    const usuarios = await obtenerTodosLosDatos()
    res.json(usuarios)
}

async function postUsuarioController(req, res) {
    const usuario = req.body
    await crearUsuario(usuario)
    res.status(201).json(usuario)
}

export { getUsuarioController, postUsuarioController }