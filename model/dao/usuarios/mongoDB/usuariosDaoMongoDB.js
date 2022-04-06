// Importaciones
import * as model from './usuariosSchema.js'

async function guardar(usuario) {
    try {
        const usuarioSaveModel = new model.usuarios(usuario)
        const nuevoUsuario = await usuarioSaveModel.save()
        return nuevoUsuario
    } catch (error) {
        throw new Error(`Error al guardar usuario ${error}`)
    }
}

async function recuperarTodos() {
    try {
        const usuarios = await model.usuarios.find({})
        console.log(usuarios)
        return usuarios   
    } catch (error) {
        throw new Error(`Error al recuperar los usuarios ${error}`)
    }
}

export { guardar, recuperarTodos }