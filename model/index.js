import config from '../config.js'
import mongoose from 'mongoose'

let productosDao
let usuariosDao

/**
 * Dependiendo el valor de PERS es el tipo de persistencia que se va a utilizar.
 */
switch (config.PERS) {

    case 'MONGODB_ATLAS':
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

        const { default: ProductosDaoMongoDB } = await import('./dao/productos/ProductosDaoMongoDB.js')
        const { default: UsuariosDaoMongoDB } = await import('./dao/usuarios/UsuariosDaoMongoDB.js')
        
        productosDao = new ProductosDaoMongoDB()
        usuariosDao = new UsuariosDaoMongoDB()
        break

    case 'MARIADB':
        const { default: ProductosDaoMariaDB } = await import('./dao/productos/ProductosDaoMariaDB.js')
        const { default: UsuariosDaoMariaDB } = await import('./dao/usuarios/UsuariosDaoMariaDB.js')

        productosDao = new ProductosDaoMariaDB()
        usuariosDao = new UsuariosDaoMariaDB()
        break

}

export { productosDao, usuariosDao }