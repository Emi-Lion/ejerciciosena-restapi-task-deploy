//este archivo sirve para conectar con la base de datos
import mongoose from "mongoose"; //sirve para conectar con mongo
import config from "./config"; //importamos los datos del archivo config
//lo colocamos dentro de una funcion anonima asyc que no se va a ejecuatar hasta que se llame
//lo guardamos dentro de una constante
(async () => {
   try{
    const db =await mongoose.connect(config.mongodbURL, { //la varaible de entorno de .env, la llama desde config.js
        //useNewUrlParser: true,
        //useUnifiedTopology: true,
        //useFindAndModify: false

    });

    console.log('Datababase es connected to:', db.connection.name); //le dicce que una vez conectado muestre el nombre de la base de datos

   } catch (error) {
    console.error(error);

   }
})();
/* el metodo conect sirve para conectarse a una base de datos 
--> intentamos conectarnos a un servidor como aun no tenemos una base de datos en la nube nos conectamos a nivel local <-- 
por eso el localhost, si no hay una base de datos creada se conecta,sino el la crea una nueva llamada taskapi
el await es para decir que es asincrona, y debe ser manejada con una promesa*/