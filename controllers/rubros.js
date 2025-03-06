import rubrosModel from '../models/rubros.js';

class RubrosController {
    constructor() {}

    async create(req, res) {
        try {
            const data = await rubrosModel.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await rubrosModel.update(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await rubrosModel.delete(id);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res) {
        try {
            const data = await rubrosModel.getAll();
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const data = await rubrosModel.getOne(id);
            if (!data) {
                return res.status(404).json({ message: "Rubro no encontrado" });
            }
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new RubrosController();