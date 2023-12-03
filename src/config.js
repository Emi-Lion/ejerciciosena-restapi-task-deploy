//archivo dedicado a las configuraciones , incluidas las de las varible de entorno
import { config } from "dotenv"; //traemos la informacion desde .env
config();

//se crea un objeto y se exporta con un nombre mas facil, en caso de que no exista una variable de entorno se usa loscalhos/taskdb
export default {
    mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/taskdb',
}