//este archivo me sirve para comenzar a utilizar los modulos y arrancar la aplicacion
// se cambia el nombre de este archivo de index.js a tasks.routes.js, este va a servir para enrutar tareas, debemos cambiarlo en otros archivos tambien, por ejemplo en app
import app from './app'; //lo importamos desde app, ya que alli lo cortamos y copiasmos desde este archivo

//llamaos un archivo de database
import './database'; //damos npm star debe mostar saerver on port 3000 y taskapi que es el nombre de la BD

//puerto de escuhas
app.listen(app.get('port')); //para poder ejecutarlo le asignamos el pueto 3000

console.log('server on port', app.get('port')); //lo mostramos en consola, compaginado con el puerto
/* node src/index.js para correr y ver en el navegar el mensaje not get
intalamos babel, que sirve para traducir las versiones modernas de java script a las anteriores y que sea compatible con todos los sitios y navegadores
los usamos para los imports. intalamos babel con: npm i @babel/core @babel/cli @babel/node @babel/preset-env -D
donde core es el modulo principla, el modulo cli sirve para poder usarlo desde consola, el modulo node para que se integre y el modulo preset-env es para decir que vamos a usar la ultima sintaxis de java excript, 
la opcion -D, intala en packet json, en una seccion por fuera de dependencies, ya que vamos asi indicar que solo se usan cuando desarrolle 
para poder usarlo creamos el archico .babelrc*/

/* instalamos nodemon, que permite reinicar el servidor de forma automatica cada vez que se realiza un cambio 
 con npm i nodemon -D
 vamos de nuevo a package json y modificamos "start": "nodemon src/index.js --exec babel-node" para que asi ejecute nodemon con babel*/
