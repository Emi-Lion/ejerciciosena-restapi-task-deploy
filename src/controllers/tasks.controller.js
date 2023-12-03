//sirve para colocar las funcionen provenientes e task.routes.js, es decir las funciones get, post ,etc de las rutas
import Task from '../models/Tasks'; //para no solo mostrar los datos sino tambien guardarlos
import { getPagination } from "../libs/getPagination";

//del get
export const findAllTasks = async (req, res) => { //podemos obviar /task y dejar solo / porque se va a repetir. se cambia el nombre de gettasks por findalltasks
    try {
        const {size, page, title} = req.query; //es lo que pide de la consulta, que seria el limit y el offset, title es una propiedad de los datos que queremos que aparesca
        //vemos si title existe sino para un objeto vacio
        const condition = title 
        ? {
            title: { $regex: new RegExp(title), $options: "i"}, //regex es una consulta por expresion regular de mongo db y options i es la busqueda de todo lo que coincida con la palabra
        }: {}; 
        //console.log(condition);

        const {limit, offset} = getPagination(page, size);

        //res.send('Tasks')
        
      const data = await Task.paginate(condition, { offset, limit}); //para que muestre los datos en los api// con el modulo mongoose paginate cambiamos find por paginate//se cambia cons task por data
      res.json({
        totalItems: data.totalDocs,
        tasks: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1, //ya que la paginacion comienza en 0, para que asi muestre pagina 1
        offset: data.offset,
        limit: data.limit

      });

    } catch (error) {
        res.status(500).json({
            message: error.message || "algo salio mal durante la recepcion de la task",
        });    
    }
};

//del post
export const createTask = async (req, res) =>{
    //verifica si existe titulo en la nueva task
    if (!req.body.title) { 
        return res.status(400).send({message: 'titulo no puede estar vacio'});    
    };

    try {
    //console.log(req.body);  //recive el dato que los clientes le envian al servidor
    const newTask = new Task({ 
        title: req.body.title, 
        description: req.body.description,
        done: req.body.done ? req.body.done : false
     });
     const taskSaved = await newTask.save(); //salva el objeto creado de forma asincrona con el await
     //console.log(newTask);
     res.json(taskSaved); //se cambio el mensaje una vez mas
   
    } catch (error) {
        res.status(500).json({
            message: error.message || "algo salio mal durante la creacion de la task",
        });
    }  
};


//-->es para encontrar una entrada por id
export const findOneTask = async (req, res) => {
    const { id } = req.params;

    try {
        //console.log(req.params.id); //req.params devuelve todo el objeto de los parametros

        const task = await Task.findById(id);

         //const task = await Task.findById(req.params.id);

        if (!task)
        return res
           .status(404)
           .json({message: `Task con el id ${id} no existe` }); 
    
       res.json(task)
        
    } catch (error) {
        res.status(500).json({
            message: error.message || `Error devolviendo la Task con el id: ${id}`,
        });        
    }
};

// es para borrar por id
export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id);
            //res.json(req.params.id);

        res.json({
            message: " Task fue borrada exitosamente ",
        });
        
    } catch (error) {
        res.status(500).json({
            message: `no se puede borrar la task con el id: ${id}`,
        })
        
    }
};

// para encontrar todas las tareas hechas (en true)
export const findAllDoneTask = async (req, res) => {
    const tasks = await Task.find({done: true}); 
    res.json(tasks);

};

// para actualizar datos
export const updateTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({message: 'Task fue actualizada exitosamente'});
};