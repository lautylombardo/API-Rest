import mascotasModel from '../models/mascotas.js';// Asegúrate de importar ObjectId

class mascotasController {
    constructor() {}

    // Método para crear una nueva mascota
    async create(req, res) {
        try {
            const data = await mascotasModel.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para actualizar una mascota
    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await mascotasModel.update(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para eliminar una mascota
    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await mascotasModel.delete(id);
            res.status(206).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para obtener todas las mascotas
    async getAll(req, res) {
        try {
            const data = await mascotasModel.getAll();
            res.status(201).json(data); // El código de estado debe ser 200, no 201
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para obtener una mascota específica
    async getOne(req, res) {
        try {
            const { id } = req.params;
            const data = await mascotasModel.getOne(id);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new mascotasController();