//sirve para tener el codigo de inicializacion del servidor para hacerlo mas ordenado, lo cortamos y pegamos desde src/index.js

//const express = require('express'); //sirve para importar el modulo, para ello loa vamos a requerirlo y guardarlo en una constante del mismo nombre

import express from 'express'; //lo que permite babel
//si lo ejecutamos con node src/index.js, no va a funcionar debemos ejecutarlos con babel-node src/index.js
/*cuando ejecutamos babel-node nos da un error ya que no lo reconoce como comando interno o externo, por lo que le tenemos que decir que no esta 
intalado en todo el computador solo en mi proyecto, y solo queremos ejecutar un comando en especifico, por lo usaremos el comando
npx babel-node src/index.js debe mostrar como resultado server on port 3000*/
//como esta muy largo el comando cambiamos en package.json , en scripts borramos text y creamos  "start": "babel-node src/index.js" por lo que solo tenemos que escribir npm start

import morgan from 'morgan';
import cors from 'cors'; //permite que otro servidor puede pedir datos en nuestra aplicacion sin generar conflictos de puertos
import TasksRoutes from './routes/tasks.routes'; //importamos desde rutas, IndexRoutes es el nombre que le damos, lo cambiamos a tasksroutes

const app = express(); // necesitamos ejecutarlo, por ello es una funcion, y nos va a devolver un objeto app que guardamos en una constante y ese objeto vendria a ser el servidor que contrendia los metodos y las rutas

// settings
app.set('port', process.env.PORT || 3000); //definos el pueto en una varible, y cambiamos donde se encuentre el 3000, sirve para no estar cambiadolo en todo lado Y EL PORT || 3000 es para que use este puerto por defecto
app.use(express.json()); //para que sepa interpretar formato json

// middlewares para ver mensajes por consola
const corsOptions = {};
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false})); //permite que entienda las peticiones en formato HTML


//se crean las rutas URL
app.get('/', (req, res) => {
    res.json({message: 'bienvenido a mi pinche aplicación'})
});

app.use('/api/tasks',TasksRoutes); //le decimos que use esta ruta, si vamos al navegador y escribimos localhost:3000/tasks, mostrara el mensaje tasks, podemos añadir a la ruta /api/tasks en el navegador

// para poder exportarlo y usarlo en otros archivos
export default app;