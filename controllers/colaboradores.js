import colaboradoresModel from '../models/colaboradores.js';

class ColaboradoresController {
    constructor() {}

    // Método para crear un nuevo colaborador
    async create(req, res) {
        try {
            const data = await colaboradoresModel.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para actualizar un colaborador
    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await colaboradoresModel.update(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para eliminar un colaborador
    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await colaboradoresModel.delete(id);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para obtener todos los colaboradores
    async getAll(req, res) {
        try {
            const data = await colaboradoresModel.getAll();
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para obtener un colaborador específico
    async getOne(req, res) {
        try {
            const { id } = req.params;
            const data = await colaboradoresModel.getOne(id);
            if (!data) {
                return res.status(404).json({ message: "Colaborador no encontrado" });
            }
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para obtener colaboradores por perfil
    async getByPerfil(req, res) {
        try {
            const { perfilId } = req.params;
            const data = await colaboradoresModel.getByPerfil(perfilId);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para obtener colaboradores por tribu
    async getByTribu(req, res) {
        try {
            const { tribuId } = req.params;
            const data = await colaboradoresModel.getByTribu(tribuId);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new ColaboradoresController();