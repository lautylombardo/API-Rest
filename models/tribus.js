import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb";

class TribusModel {
    async create(tribu) {
        const colTribus = dbClient.db.collection('tribus');
        return await colTribus.insertOne(tribu);
    }

    async update(id, tribu) {
        const colTribus = dbClient.db.collection('tribus');
        return await colTribus.updateOne(
            { _id: new ObjectId(id) }, 
            { $set: tribu }
        );
    }

    async delete(id) {
        const colTribus = dbClient.db.collection('tribus');
        return await colTribus.deleteOne({ _id: new ObjectId(id) });
    }

    async getAll() {
        const colTribus = dbClient.db.collection('tribus');
        return await colTribus.find({}).toArray();
    }

    async getOne(id) {
        const colTribus = dbClient.db.collection('tribus');
        return await colTribus.findOne({ _id: new ObjectId(id) });
    }
}

export default new TribusModel();