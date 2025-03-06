import express from 'express';
const route = express.Router();
import colaboradoresController from '../controllers/colaboradores.js';

// CREAR
route.post('/', colaboradoresController.create);
// CONSULTAR
route.get('/:id', colaboradoresController.getOne);
route.get('/', colaboradoresController.getAll);
route.get('/perfil/:perfilId', colaboradoresController.getByPerfil);
route.get('/tribu/:tribuId', colaboradoresController.getByTribu);
// MODIFICAR
route.put('/:id', colaboradoresController.update);
// ELIMINAR
route.delete('/:id', colaboradoresController.delete);

export default route;