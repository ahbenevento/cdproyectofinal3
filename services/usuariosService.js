import { usuariosDao } from '../model/index.js'

async function obtenerTodosLosDatos() {
    return await usuariosDao.obtenerTodos()
}

async function crearUsuario(usuario) {
    await usuariosDao.guardar(usuario)
    return usuario
}
export { obtenerTodosLosDatos, crearUsuario }





