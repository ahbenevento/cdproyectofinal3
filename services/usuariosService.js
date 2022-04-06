// Importaciones
import { guardar, recuperarTodos } from '../model/dao/usuarios/mongoDB/usuariosDaoMongoDB.js'

async function obtenerTodosLosDatos() {
    return await recuperarTodos()
}

async function crearUsuario(usuario) {
    await guardar(usuario)
    return usuario
}

export { obtenerTodosLosDatos, crearUsuario }