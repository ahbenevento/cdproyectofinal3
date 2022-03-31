// Importaciones
import { guardar, recuperarTodos } from '../dao/usuarios/usuariosDao.js'

async function obtenerTodosLosDatos() {
    return await recuperarTodos()
}

async function crearUsuario(usuario) {
    await guardar(usuario)
    return usuario
}

export { obtenerTodosLosDatos, crearUsuario }