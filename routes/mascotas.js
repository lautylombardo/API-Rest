import express from 'express';
const route = express.Router();
import mascotaController from '../controllers/mascotas.js';

//CREAR
route.post('/', mascotaController.create);
//CONSULTAR
route.get('/:id', mascotaController.getOne);
route.get('/', mascotaController.getAll);
//MODIFICAR
route.put('/:id',mascotaController.update);
//ELIMINAR
route.delete('/:id', mascotaController.delete);

export default route;