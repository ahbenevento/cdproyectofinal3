// Importaciones
import mongoose from "mongoose"

// Conectar a la base de datos MongoDB Atlas
export default async function connect() {
    try {
        const uri = `mongodb+srv://nacho:${process.env.DB_PASS}@coderhouse.8skq0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
        const db = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB Atlas está conectada!')
    } catch (error) {
        console.log(`Error al conectar: ${error}`)
    }
}