const app = require('./server.js')
const connection = require('./database.js')

//Creación de un modelo de datos
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const Task = mongoose.model('Task', taskSchema);

//Creación de un documento en la base de datos
const task = new Task({
  title: 'Completar informe',
  description: 'Completar el informe mensual de ventas',
  completed: false
});

task.save().then(() => {
  console.log('Tarea guardada en la base de datos');
}).catch((error) => {
  console.log('Error al guardar la tarea:', error);
});

//Consulta de documentos en la base de datos
Task.find({ completed: true }).then((tasks) => {
  console.log('Tareas completadas:', tasks);
}).catch((error) => {
  console.log('Error al obtener las tareas:', error);
});

// Establecer conexión a la base de datos
connection()
  .then(() => {
    // Aquí puedes realizar otras operaciones después de que la conexión se haya establecido correctamente
  })
  .catch((error) => {
    console.log('Error al conectar a la base de datos:', error);
  });
  app.listen(3000,()=>{
    console.log(`Server on port ${3000}`);
})