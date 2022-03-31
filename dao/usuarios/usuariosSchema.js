// Importaciones
import mongoose from "mongoose"

const usuariosCollection = 'usuarios'

const UsuarioSchema = new mongoose.Schema({
        nombre: {type: String, required: true, max: 100},
        apellido: {type: String, required: true, max: 100},
        email: {type: String, required: true, unique: true, max: 100},
        password: {type: String, required: true, max: 250},
    }, {
    timestamps: true
})

export const usuarios = mongoose.model(usuariosCollection, UsuarioSchema)