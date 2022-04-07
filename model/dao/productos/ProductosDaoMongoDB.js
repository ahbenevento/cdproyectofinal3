import ContenedorMongoDB from "../../containers/ContenedorProductoMongoDB.js"

class ProductosDaoMongoDB extends ContenedorMongoDB {

    constructor() {
        super('producto', {
            title: { type: String, required: true },
            description: { type: String, required: true },
            price: { type: Number, required: true },
            stock: { type: Number, required: true },
            thumbnail: { type: String, required: true },
        })
    }
}

export default ProductosDaoMongoDB