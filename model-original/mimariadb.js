import { Sequelize } from 'sequelize'
import config from '../config.js'

let sequelize

class MiMariaDB {
    static async connect() {
        sequelize = new Sequelize(
            config.mariaDB.database,
            config.mariaDB.user,
            config.mariaDB.password,
            {
                host: config.mariaDB.host,
                dialect: config.mariaDB.client,
                define: {timestamps: false}
            }
        )

        return sequelize.authenticate();
    }

    static getHandle() {
        return sequelize
    }
}

export default MiMariaDB
