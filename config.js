import 'dotenv/config'

/**
 * Exporto un objeto con todas las variables del archivo .env.
 */
const config = {
    PORT: process.env.PORT,
    PERS: process.env.PERS,
    mariaDb: {
        client: "mysql",
        connection: {
            host: "127.0.0.1",
            user: process.env.MARIADB_USER,
            password: process.env.MARIADB_PASS,
            database: process.env.MARIADB_DB,
            charset: "utf8mb4"
        }
    },
    mongoDBAtlas: {
        uri: process.env.MONGODB_ATLAS_URI,
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true, 
          serverSelectionTimeoutMS: 5000
        }
    }
}

export default config