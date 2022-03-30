// Importación de paquetes
import express from 'express'
import { engine } from 'express-handlebars'

// importación de rutas
import productosRoutes from './routes/productosRoutes.js'

// Tomo valor de puerto del enviroment si existiera o por default en 3000
const PORT = process.env.PORT || 3000

// Declaro el servidor
const app = express()

// Establecemos la configuración de express-handlebars
app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: 'hbs'
}))
app.set('view engine', 'hbs')

// Middlewares para manejar envíos de JSON
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Middlewares para manejo de rutas
app.use('/', productosRoutes)

// Servidor escuchando en el PORT declarado
app.listen(PORT, () => console.log(`Server escuchando en el puerto ${PORT} . . .`))