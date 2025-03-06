import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb";

class RubrosModel {
    async create(rubro) {
        const colRubros = dbClient.db.collection('rubros');
        return await colRubros.insertOne(rubro);
    }

    async update(id, rubro) {
        const colRubros = dbClient.db.collection('rubros');
        return await colRubros.updateOne(
            { _id: new ObjectId(id) }, 
            { $set: rubro }
        );
    }

    async delete(id) {
        const colRubros = dbClient.db.collection('rubros');
        return await colRubros.deleteOne({ _id: new ObjectId(id) });
    }

    async getAll() {
        const colRubros = dbClient.db.collection('rubros');
        return await colRubros.find({}).toArray();
    }

    async getOne(id) {
        const colRubros = dbClient.db.collection('rubros');
        return await colRubros.findOne({ _id: new ObjectId(id) });
    }
}

export default new RubrosModel();