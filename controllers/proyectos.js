import proyectosModel from '../models/proyectos.js';

class ProyectosController {
    constructor() {}

    async create(req, res) {
        try {
            // Inicializar el array de colaboradores si no existe
            if (!req.body.colaboradores) {
                req.body.colaboradores = [];
            }
            
            const data = await proyectosModel.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await proyectosModel.update(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await proyectosModel.delete(id);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res) {
        try {
            const data = await proyectosModel.getAll();
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const data = await proyectosModel.getOne(id);
            if (!data) {
                return res.status(404).json({ message: "Proyecto no encontrado" });
            }
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getByCliente(req, res) {
        try {
            const { clienteId } = req.params;
            const data = await proyectosModel.getByCliente(clienteId);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getByTribu(req, res) {
        try {
            const { tribuId } = req.params;
            const data = await proyectosModel.getByTribu(tribuId);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async asignarColaborador(req, res) {
        try {
            const { proyectoId, colaboradorId } = req.params;
            const { rolEnProyecto } = req.body;
            
            const data = await proyectosModel.asignarColaborador(proyectoId, colaboradorId, rolEnProyecto);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async desasignarColaborador(req, res) {
        try {
            const { proyectoId, colaboradorId } = req.params;
            const data = await proyectosModel.desasignarColaborador(proyectoId, colaboradorId);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new ProyectosController();