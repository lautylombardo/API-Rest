/* 
 * routes/clientes.js
 * Define las rutas de la API para las operaciones relacionadas con clientes
 */

// Importa el framework Express
import express from 'express';
// Crea un enrutador para las rutas relacionadas con clientes
const route = express.Router();
// Importa el controlador de clientes para manejar las solicitudes
import clientesController from '../controllers/clientes.js';

// CREAR - Define una ruta POST para crear un nuevo cliente
route.post('/', clientesController.create);

// CONSULTAR - Define rutas GET para obtener clientes
// Obtener un cliente por su ID
route.get('/:id', clientesController.getOne);
// Obtener todos los clientes
route.get('/', clientesController.getAll);
// Obtener clientes por sector de industria (rubro)
route.get('/rubro/:rubroId', clientesController.getByRubro);

// MODIFICAR - Define una ruta PUT para actualizar un cliente
route.put('/:id', clientesController.update);

// ELIMINAR - Define una ruta DELETE para eliminar un cliente
route.delete('/:id', clientesController.delete);

// Exporta el enrutador configurado
export default route;

