// Importaciones
import * as model from './usuariosSchema.js'

async function guardar(usuario) {
    const usuarioSaveModel = new model.usuarios(usuario)
    const nuevoUsuario = await usuarioSaveModel.save()
    console.log(nuevoUsuario)
}

async function recuperarTodos() {
    const usuarios = await model.usuarios.find({})
    console.log(usuarios)
    return usuarios
}

export { guardar, recuperarTodos }