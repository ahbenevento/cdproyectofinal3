import { Sequelize, DataTypes } from 'sequelize'
import config from '../../../config.js'

/**
 * Conexión a la base de datos MariaDB
 */     
const sequelize = new Sequelize(config.mariaDB.database, config.mariaDB.user, config.mariaDB.password, {
        host: config.mariaDB.host,
        dialect: config.mariaDB.client,
        define: {timestamps: false}
})
try {
    await sequelize.authenticate();
    console.log(`Conexión a la base de datos MariaDB exitosa!`)
    } catch (error) {
    console.error(`Error al conectarse a la base de datos.`, error)
}

/**
 * Modelo para la tabla productos
 */
const producto= sequelize.define('producto', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: {type: DataTypes.STRING, allowNull: false},  
    descripcion: {type: DataTypes.STRING, allowNull: false},  
    precio: {type: DataTypes.FLOAT, allowNull: false},  
    stock: {type: DataTypes.INTEGER, allowNull: false},
    thumbnail: {type: DataTypes.STRING, allowNull: true} 
})

class ContenedorMariaDB {

    constructor() {
        this.producto = producto
    }

    async guardar(producto) {
        try {
            return await this.producto.create(producto)
        } catch (error) {
            console.log(`Error al guardar el producto.`)
            throw new Error(error)
        }
    }

    async obtenerTodos() {
        try {
            return await this.producto.findAll()
        } catch (error) {
            console.log(`Error al obtener todos los productos.`)
            throw new Error(error)
        }
    }

}

export default ContenedorMariaDB