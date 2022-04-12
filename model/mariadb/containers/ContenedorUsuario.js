import { Sequelize, DataTypes } from 'sequelize'
import mimariadb from '../mimariadb.js'

/**
 * Conexión a la base de datos MariaDB
 */
// const sequelize = new Sequelize(config.mariaDB.database, config.mariaDB.user, config.mariaDB.password, {
//     host: config.mariaDB.host,
//     dialect: config.mariaDB.client,
//     define: {timestamps: false}
// })
// try {
//     await sequelize.authenticate();
//     console.log(`Conexión a la base de datos MariaDB exitosa!`)
//     } catch (error) {
//     console.error(`Error al conectarse a la base de datos.`, error)
// }

/**
 * Modelo para la tabla usuarios
 */
const usuario = mimariadb.getHandle().define('usuario', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: {type: DataTypes.STRING, allowNull: false},
    apellido: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false}
})

class ContenedorMariaDB {

    constructor() {
        this.usuario = usuario
    }

    async guardar(usuario) {
        try {
            return await this.usuario.create(usuario)
        } catch (error) {
            console.log(`Error al guardar el usuario.`)
            throw new Error(error)
        }
    }

    async obtenerTodos() {
        try {
            return await this.usuario.findAll()
        } catch (error) {
            console.log(`Error al obtener todos los usuarios.`)
            throw new Error(error)
        }
    }

}

export default ContenedorMariaDB