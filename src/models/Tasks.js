//modelo de la base de datos
import { Schema, model } from "mongoose"; //en ves de traerlo todo solo importamos los esquemas y los modelos
// modulo para paginacion
import mongoosePaginate from "mongoose-paginate-v2";
//podemos crear un objete por ejemplo en titel, donde se puede decir que es requerido y opciones como trim que quita los espacios vacios
const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    },
}, {
    versionKey: false,
    timestamps: true
});

//versionkey evita que aparescan rallas a piso __ en las respuestas
//el timestamps, al crea un dato nuevo me salen dos propiesdades createdAt y umdateAt, que me permint ver la fecha cuando fue creado y modificado
//exportamos el modelo
taskSchema.plugin(mongoosePaginate); //pugling que añade metodos
export default model('Task', taskSchema);