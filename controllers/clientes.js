// Importa el modelo de clientes para realizar operaciones en la base de datos
import clientesModel from '../models/clientes.js';

class ClientesController {
    // Constructor de la clase (Todavia no agrego nada)
    constructor() {}

    // Maneja la solicitud POST para crear un nuevo cliente
    async create(req, res) {
        try {
            // Usa el modelo para crear un cliente con los datos del cuerpo de la solicitud
            const data = await clientesModel.create(req.body);
            // Devuelve un estado 201 (Creado) con los datos del cliente creado
            res.status(201).json(data);
        } catch (e) {
            // Devuelve un estado 500 (Error del servidor) si la operación falla
            res.status(500).send(e);
        }
    }

    // Maneja la solicitud PUT para actualizar un cliente existente
    async update(req, res) {
        try {
            // Extrae el ID del cliente desde los parámetros de la URL
            const { id } = req.params;
            // Actualiza el cliente con los nuevos datos del cuerpo de la solicitud
            const data = await clientesModel.update(id, req.body);
            // Devuelve un estado 200 (OK) con el resultado de la actualización
            res.status(200).json(data);
        } catch (e) {
            // Devuelve un estado 500 (Error del servidor) si la operación falla
            res.status(500).send(e);
        }
    }

    // Maneja la solicitud DELETE para eliminar un cliente
    async delete(req, res) {
        try {
            // Extrae el ID del cliente desde los parámetros de la URL
            const { id } = req.params;
            // Elimina el cliente de la base de datos
            const data = await clientesModel.delete(id);
            // Devuelve un estado 200 (OK) con el resultado de la eliminación
            res.status(200).json(data);
        } catch (e) {
            // Devuelve un estado 500 (Error del servidor) si la operación falla
            res.status(500).send(e);
        }
    }

    // Maneja la solicitud GET para obtener todos los clientes
    async getAll(req, res) {
        try {
            // Obtiene todos los clientes de la base de datos
            const data = await clientesModel.getAll();
            // Devuelve un estado 200 (OK) con los datos de los clientes
            res.status(200).json(data);
        } catch (e) {
            // Devuelve un estado 500 (Error del servidor) si la operación falla
            res.status(500).send(e);
        }
    }

    // Maneja la solicitud GET para obtener un cliente específico por su ID
    async getOne(req, res) {
        try {
            // Extrae el ID del cliente desde los parámetros de la URL
            const { id } = req.params;
            // Obtiene los datos del cliente desde la base de datos
            const data = await clientesModel.getOne(id);
            // Si el cliente no se encuentra, devuelve un estado 404 (No encontrado)
            if (!data) {
                return res.status(404).json({ message: "Cliente no encontrado" });
            }
            // Devuelve un estado 200 (OK) con los datos del cliente
            res.status(200).json(data);
        } catch (e) {
            // Devuelve un estado 500 (Error del servidor) si la operación falla
            res.status(500).send(e);
        }
    }

    // Maneja la solicitud GET para obtener clientes por su rubro (sector de industria)
    async getByRubro(req, res) {
        try {
            // Extrae el ID del rubro desde los parámetros de la URL
            const { rubroId } = req.params;
            // Obtiene los clientes que pertenecen al rubro especificado
            const data = await clientesModel.getByRubro(rubroId);
            // Devuelve un estado 200 (OK) con los datos de los clientes
            res.status(200).json(data);
        } catch (e) {
            // Devuelve un estado 500 (Error del servidor) si la operación falla
            res.status(500).send(e);
        }
    }
}

// Exporta una instancia única del controlador de clientes
export default new ClientesController();

