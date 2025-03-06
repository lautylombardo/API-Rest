import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb";

class ClientesModel {
    async create(cliente) {
        const colClientes = dbClient.db.collection('clientes');
        return await colClientes.insertOne(cliente);
    }

    async update(id, cliente) {
        const colClientes = dbClient.db.collection('clientes');
        return await colClientes.updateOne(
            { _id: new ObjectId(id) }, 
            { $set: cliente }
        );
    }

    async delete(id) {
        const colClientes = dbClient.db.collection('clientes');
        return await colClientes.deleteOne({ _id: new ObjectId(id) });
    }

    async getAll() {
        const colClientes = dbClient.db.collection('clientes');
        return await colClientes.find({}).toArray();
    }

    async getOne(id) {
        const colClientes = dbClient.db.collection('clientes');
        return await colClientes.findOne({ _id: new ObjectId(id) });
    }

    async getByRubro(rubroId) {
        const colClientes = dbClient.db.collection('clientes');
        return await colClientes.find({ rubroId: rubroId }).toArray();
    }
}

export default new ClientesModel();