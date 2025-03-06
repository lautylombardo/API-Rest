import perfilesModel from '../models/perfiles.js';

class PerfilesController {
    constructor() {}

    // Método para crear un nuevo perfil
    async create(req, res) {
        try {
            const data = await perfilesModel.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para actualizar un perfil
    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await perfilesModel.update(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para eliminar un perfil
    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await perfilesModel.delete(id);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para obtener todos los perfiles
    async getAll(req, res) {
        try {
            const data = await perfilesModel.getAll();
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para obtener un perfil específico
    async getOne(req, res) {
        try {
            const { id } = req.params;
            const data = await perfilesModel.getOne(id);
            if (!data) {
                return res.status(404).json({ message: "Perfil no encontrado" });
            }
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new PerfilesController();