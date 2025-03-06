import express from 'express';
const route = express.Router();
import perfilesController from '../controllers/perfiles.js';

// CREAR
route.post('/', perfilesController.create);
// CONSULTAR
route.get('/:id', perfilesController.getOne);
route.get('/', perfilesController.getAll);
// MODIFICAR
route.put('/:id', perfilesController.update);
// ELIMINAR
route.delete('/:id', perfilesController.delete);

export default route;