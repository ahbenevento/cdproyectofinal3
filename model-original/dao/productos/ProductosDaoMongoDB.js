import ContenedorMongoDB from "../../containers/productos/ContenedorProductoMongoDB.js"

class ProductosDaoMongoDB extends ContenedorMongoDB {

    constructor() {
        super('producto', {
            nombre: { type: String, required: true, max: 100},
            descripcion: { type: String, required: true, max: 100},
            precio: { type: Number, required: true },
            stock: { type: Number, required: true },
            thumbnail: { type: String, required: true, max: 250},
        })
    }
}

export default ProductosDaoMongoDB