import express from 'express';
const route = express.Router();
import clientesController from '../controllers/clientes.js';

// CREAR
route.post('/', clientesController.create);
// CONSULTAR
route.get('/:id', clientesController.getOne);
route.get('/', clientesController.getAll);
route.get('/rubro/:rubroId', clientesController.getByRubro);
// MODIFICAR
route.put('/:id', clientesController.update);
// ELIMINAR
route.delete('/:id', clientesController.delete);

export default route;
