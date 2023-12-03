//este archivo sirve para ordenas las rutas a usar
//primer paso, importar express, Router permite definir mas rutas y agruparlas
import { Router } from 'express';

//import Task from '../models/Tasks'; //para no solo mostrar los datos sino tambien guardarlos
import * as taskCtrl from '../controllers/tasks.controller'; //importamos las funciones, el * indica que importe todas las funciones

const router = Router(); //guardo Router en una constante del mismo nombre

//muestra el mensaje task al recivir un get
router.get('/', taskCtrl.findAllTasks);

//creamos una ruta con post
router.post('/', taskCtrl.createTask)

// ruta pra devolver los done o tareas ya hechas
router.get('/done', taskCtrl.findAllDoneTask);

//crear una ruta get para que devuelva por id
router.get('/:id', taskCtrl.findOneTask); //los dos puntos sirven para buscar una tarea por id ose /:id

// ruta para borrar por id
router.delete('/:id', taskCtrl.deleteTask);

// ruta put para actualizar datos
router.put('/:id', taskCtrl.updateTask);

//exportamos router para eso vamos al otro archivo src/index.js
export default router;