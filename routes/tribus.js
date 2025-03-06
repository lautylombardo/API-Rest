import express from 'express';
const route = express.Router();
import tribusController from '../controllers/tribus.js';

// CREAR
route.post('/', tribusController.create);
// CONSULTAR
route.get('/:id', tribusController.getOne);
route.get('/', tribusController.getAll);
// MODIFICAR
route.put('/:id', tribusController.update);
// ELIMINAR
route.delete('/:id', tribusController.delete);

export default route;
