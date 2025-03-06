import tribusModel from '../models/tribus.js';

class TribusController {
    constructor() {}

    async create(req, res) {
        try {
            const data = await tribusModel.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await tribusModel.update(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await tribusModel.delete(id);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res) {
        try {
            const data = await tribusModel.getAll();
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const data = await tribusModel.getOne(id);
            if (!data) {
                return res.status(404).json({ message: "Tribu no encontrada" });
            }
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new TribusController();
