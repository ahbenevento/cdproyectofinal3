import config from '../config.js'

let productosDao
let carritosDao

/**
 * Dependiendo el valor de PERS es el tipo de persistencia que se va a utilizar.
 */
switch (config.PERS) {

    case 'MONGODB_ATLAS':
        const { default: ProductosDaoMongoDB } = await import('./products/ProductsDaoMongoDb.js')
        const { default: CarritosDaoMongoDB } = await import('./orders/OrdersDaoMongoDb.js')
        productosDao = new ProductosDaoMongoDB()
        carritosDao = new CarritosDaoMongoDB()
        break

    case 'MARIABD':
        const { default: ProductosDaoMariaDB } = await import('./products/ProductsDaoMariaDb.js')
        const { default: CarritosDaoMariaDB } = await import('./orders/OrdersDaoMariaDb.js')
        productosDao = new ProductosDaoMariaDB()
        carritosDao = new CarritosDaoMariaDB()
        break

}

export { productosDao, carritosDao }