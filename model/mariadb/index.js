import mimariadb from './mimariadb.js'

try {
    await mimariadb.connect()
} catch (error) {
    console.log(`Error al conectarse a la base de datos.`)
    throw new Error(error)
}

const { default: ProductosDaoMariaDB } = await import('./dao/ProductosDao.js')
const { default: UsuariosDaoMariaDB } = await import('./dao/UsuariosDao.js')
const productosDao = new ProductosDaoMariaDB()
const usuariosDao = new UsuariosDaoMariaDB()

export { productosDao, usuariosDao }
