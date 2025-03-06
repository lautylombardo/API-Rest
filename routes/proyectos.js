import express from 'express';
const route = express.Router();
import proyectosController from '../controllers/proyectos.js';

// CREAR
route.post('/', proyectosController.create);
// CONSULTAR
route.get('/:id', proyectosController.getOne);
route.get('/', proyectosController.getAll);
route.get('/cliente/:clienteId', proyectosController.getByCliente);
route.get('/tribu/:tribuId', proyectosController.getByTribu);
// MODIFICAR
route.put('/:id', proyectosController.update);
// ELIMINAR
route.delete('/:id', proyectosController.delete);
// COLABORADORES
route.post('/:proyectoId/colaboradores/:colaboradorId', proyectosController.asignarColaborador);
route.delete('/:proyectoId/colaboradores/:colaboradorId', proyectosController.desasignarColaborador);

export default route;