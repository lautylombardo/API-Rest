import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb";

class PerfilesModel {
    async create(perfil) {
        const colPerfiles = dbClient.db.collection('perfiles');
        return await colPerfiles.insertOne(perfil);
    }

    async update(id, perfil) {
        const colPerfiles = dbClient.db.collection('perfiles');
        return await colPerfiles.updateOne(
            { _id: new ObjectId(id) }, 
            { $set: perfil }
        );
    }

    async delete(id) {
        const colPerfiles = dbClient.db.collection('perfiles');
        return await colPerfiles.deleteOne({ _id: new ObjectId(id) });
    }

    async getAll() {
        const colPerfiles = dbClient.db.collection('perfiles');
        return await colPerfiles.find({}).toArray();
    }

    async getOne(id) {
        const colPerfiles = dbClient.db.collection('perfiles');
        return await colPerfiles.findOne({ _id: new ObjectId(id) });
    }
}

export default new PerfilesModel();