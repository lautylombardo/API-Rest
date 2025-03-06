import express from 'express';
const route = express.Router();
import rubrosController from '../controllers/rubros.js';

// CREAR
route.post('/', rubrosController.create);
// CONSULTAR
route.get('/:id', rubrosController.getOne);
route.get('/', rubrosController.getAll);
// MODIFICAR
route.put('/:id', rubrosController.update);
// ELIMINAR
route.delete('/:id', rubrosController.delete);

export default route;