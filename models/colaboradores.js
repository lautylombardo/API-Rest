import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb";

class ColaboradoresModel {
    async create(colaborador) {
        const colColaboradores = dbClient.db.collection('colaboradores');
        return await colColaboradores.insertOne(colaborador);
    }

    async update(id, colaborador) {
        const colColaboradores = dbClient.db.collection('colaboradores');
        return await colColaboradores.updateOne(
            { _id: new ObjectId(id) }, 
            { $set: colaborador }
        );
    }

    async delete(id) {
        const colColaboradores = dbClient.db.collection('colaboradores');
        return await colColaboradores.deleteOne({ _id: new ObjectId(id) });
    }

    async getAll() {
        const colColaboradores = dbClient.db.collection('colaboradores');
        return await colColaboradores.find({}).toArray();
    }

    async getOne(id) {
        const colColaboradores = dbClient.db.collection('colaboradores');
        return await colColaboradores.findOne({ _id: new ObjectId(id) });
    }

    async getByPerfil(perfilId) {
        const colColaboradores = dbClient.db.collection('colaboradores');
        return await colColaboradores.find({ perfilId: perfilId }).toArray();
    }

    async getByTribu(tribuId) {
        const colColaboradores = dbClient.db.collection('colaboradores');
        return await colColaboradores.find({ tribuId: tribuId }).toArray();
    }
}

export default new ColaboradoresModel();