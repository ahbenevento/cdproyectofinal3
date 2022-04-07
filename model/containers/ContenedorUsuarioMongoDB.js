import mongoose from 'mongoose'

class ContenedorMongoDB {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async guardar(usuario) {
        try {
            const usuarioSaveModel = new this.coleccion(usuario)
            const nuevoUsuario = await usuarioSaveModel.save()
            return nuevoUsuario
        } catch (error) {
            console.log(`Error al guardar el usuario.`)
            throw new Error(error)
        }
    }

    async obtenerTodos() {
        try {
            const usuarios = await this.coleccion.find({})
            return usuarios   
        } catch (error) {
            console.log(`Error al obtener todos los usuarios.`)
            throw new Error(error)
        }
    }

}

export default ContenedorMongoDB