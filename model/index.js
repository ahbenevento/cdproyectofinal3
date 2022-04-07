import config from '../config.js'
import mongoose from 'mongoose'

let productosDao
let carritosDao
let usuariosDao

/**
 * Dependiendo el valor de PERS es el tipo de persistencia que se va a utilizar.
 */
switch (config.PERS) {

    case 'MONGODB_ATLAS':
        const { default: ProductosDaoMongoDB } = await import('./dao/productos/ProductosDaoMongoDB.js')
        const { default: UsuariosDaoMongoDB } = await import('./dao/usuarios/UsuariosDaoMongoDB.js')
        
        /**
         * Conexión a la base de datos MongoDB Atlas.
         */
         try {
            await mongoose.connect(config.mongoDBAtlas.uri, config.mongoDBAtlas.options)
            console.log(`Conexión a la base de datos MongoDB Atlas exitosa!`)
        } catch (error) {
            console.log(`Error al conectarse a la base de datos.`)
            throw new Error(error)
        }

        productosDao = new ProductosDaoMongoDB()
        usuariosDao = new UsuariosDaoMongoDB()
        break

    case 'MARIABD':
        const { default: ProductosDaoMariaDB } = await import('./dao/productos/ProductosDaoMariaDB.js')
        productosDao = new ProductosDaoMariaDB()
        break

}

export { productosDao, carritosDao, usuariosDao }