/* 
 * models/clientes.js
 * Modelo para manejar las operaciones de datos de clientes en la base de datos
 */

// Importa el cliente de base de datos para realizar operaciones en MongoDB
import dbClient from "../config/dbClient.js";
// Importa ObjectId para convertir cadenas de texto en ObjectId de MongoDB
import { ObjectId } from "mongodb";

class ClientesModel {
    // Crea un nuevo cliente en la base de datos
    async create(cliente) {
        // Accede a la colección 'clientes' en MongoDB
        const colClientes = dbClient.db.collection('clientes');
        // Inserta el documento del cliente y devuelve el resultado
        return await colClientes.insertOne(cliente);
    }

    // Actualiza un cliente existente por su ID
    async update(id, cliente) {
        // Accede a la colección 'clientes' en MongoDB
        const colClientes = dbClient.db.collection('clientes');
        // Actualiza el documento del cliente con los nuevos datos usando el operador $set de MongoDB
        return await colClientes.updateOne(
            { _id: new ObjectId(id) }, // Convierte el ID en string a un ObjectId de MongoDB
            { $set: cliente } // Usa $set para modificar solo los campos especificados
        );
    }

    // Elimina un cliente por su ID
    async delete(id) {
        // Accede a la colección 'clientes' en MongoDB
        const colClientes = dbClient.db.collection('clientes');
        // Elimina el documento del cliente y devuelve el resultado
        return await colClientes.deleteOne({ _id: new ObjectId(id) });
    }

    // Obtiene todos los clientes de la base de datos
    async getAll() {
        // Accede a la colección 'clientes' en MongoDB
        const colClientes = dbClient.db.collection('clientes');
        // Encuentra todos los documentos de clientes y los convierte en un array
        return await colClientes.find({}).toArray();
    }

    // Obtiene un solo cliente por su ID
    async getOne(id) {
        // Accede a la colección 'clientes' en MongoDB
        const colClientes = dbClient.db.collection('clientes');
        // Busca el documento del cliente con el ID especificado
        return await colClientes.findOne({ _id: new ObjectId(id) });
    }

    // Obtiene clientes filtrados por su rubro (sector de industria) usando su ID
    async getByRubro(rubroId) {
        // Accede a la colección 'clientes' en MongoDB
        const colClientes = dbClient.db.collection('clientes');
        // Busca los clientes que pertenecen al rubro especificado
        return await colClientes.find({ rubroId: rubroId }).toArray();
    }
}

// Exporta una instancia única del modelo de clientes
export default new ClientesModel();
