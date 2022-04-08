import express from 'express'
import { engine } from 'express-handlebars'
import usuariosRouter from './routes/usuariosRouter.js'
import productosRouter from './routes/productosRouter.js'
import router from './routes/router.js'
import config from './config.js'

/**
 * Puerto para el servidor express(); si no está declarado en el archivo .env tomo el valor 8080 por default.
 */
const PORT = config.PORT || 8080

const app = express()

/**
 * Establecemos la configuración de express-handlebars.
 */ 
app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: 'hbs'
}))
app.set('view engine', 'hbs')

/**
 * Middlewares para manejar envíos de JSON.
 */ 
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

/**
 * Middlewares para manejo de rutas.
 */ 
app.use('/', usuariosRouter)
app.use('/', productosRouter)
app.use('/', router)

/**
 * Server iniciado.
 */
app.listen(PORT, () => console.log(`Server escuchando en el puerto ${PORT} . . .`))