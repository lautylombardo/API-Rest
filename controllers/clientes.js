import clientesModel from '../models/clientes.js';

class ClientesController {
    constructor() {}

    async create(req, res) {
        try {
            const data = await clientesModel.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await clientesModel.update(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await clientesModel.delete(id);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res) {
        try {
            const data = await clientesModel.getAll();
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const data = await clientesModel.getOne(id);
            if (!data) {
                return res.status(404).json({ message: "Cliente no encontrado" });
            }
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getByRubro(req, res) {
        try {
            const { rubroId } = req.params;
            const data = await clientesModel.getByRubro(rubroId);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new ClientesController();

