import mongoose from 'mongoose'

class ContenedorMongoDB {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async guardar(producto) {
        try {
            const productoSaveModel = new this.coleccion(producto)
            return await productoSaveModel.save()
        } catch (error) {
            console.log(`Error al guardar el producto.`)
            throw new Error(error)
        }
    }
    
    async obtenerTodos() {
        try {
            const productos = await this.coleccion.find({})
            return productos
        } catch (error) {
            console.log(`Error al obtener todos los productos.`)
            throw new Error(error)
        }
    } 

}

export default ContenedorMongoDB