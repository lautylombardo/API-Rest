// Importa el cliente de la base de datos para operaciones con MongoDB
import dbClient from "../config/dbClient.js";
// Importa ObjectId para convertir IDs de tipo string a ObjectId de MongoDB
import { ObjectId } from "mongodb";

class ProyectosModel {
    // Crea un nuevo proyecto en la base de datos
    async create(proyecto) {
        // Accede a la colección de proyectos en MongoDB
        const colProyectos = dbClient.db.collection('proyectos');
        // Inserta el documento del proyecto y devuelve el resultado
        return await colProyectos.insertOne(proyecto);
    }

    // Actualiza un proyecto existente por su ID
    async update(id, proyecto) {
        // Accede a la colección de proyectos en MongoDB
        const colProyectos = dbClient.db.collection('proyectos');
        // Actualiza el documento del proyecto con los nuevos datos
        return await colProyectos.updateOne(
            { _id: new ObjectId(id) }, // Convierte el ID de tipo string a ObjectId de MongoDB
            { $set: proyecto } // Usa $set para actualizar solo los campos especificados
        );
    }

    // Elimina un proyecto por su ID
    async delete(id) {
        // Accede a la colección de proyectos en MongoDB
        const colProyectos = dbClient.db.collection('proyectos');
        // Elimina el documento del proyecto y devuelve el resultado
        return await colProyectos.deleteOne({ _id: new ObjectId(id) });
    }

    // Obtiene todos los proyectos de la base de datos
    async getAll() {
        // Accede a la colección de proyectos en MongoDB
        const colProyectos = dbClient.db.collection('proyectos');
        // Busca todos los documentos de proyectos y los convierte en un array
        return await colProyectos.find({}).toArray();
    }

    // Obtiene un solo proyecto por su ID
    async getOne(id) {
        // Accede a la colección de proyectos en MongoDB
        const colProyectos = dbClient.db.collection('proyectos');
        // Busca el documento del proyecto con el ID especificado
        return await colProyectos.findOne({ _id: new ObjectId(id) });
    }

    // Obtiene proyectos por el ID del cliente
    async getByCliente(clienteId) {
        // Accede a la colección de proyectos en MongoDB
        const colProyectos = dbClient.db.collection('proyectos');
        // Busca los proyectos con el ID de cliente especificado
        return await colProyectos.find({ clienteId: clienteId }).toArray();
    }

    // Obtiene proyectos por el ID de la tribu
    async getByTribu(tribuId) {
        // Accede a la colección de proyectos en MongoDB
        const colProyectos = dbClient.db.collection('proyectos');
        // Busca los proyectos con el ID de tribu especificado
        return await colProyectos.find({ tribuId: tribuId }).toArray();
    }

    // Asigna un colaborador a un proyecto con un rol específico
    async asignarColaborador(proyectoId, colaboradorId, rolEnProyecto) {
        // Accede a la colección de proyectos en MongoDB
        const colProyectos = dbClient.db.collection('proyectos');
        // Crea el objeto de asignación con el ID del colaborador, el rol y la fecha de asignación
        const asignacion = {
            colaboradorId: colaboradorId,
            fechaAsignacion: new Date(), // Fecha y hora actual
            rolEnProyecto: rolEnProyecto
        };
        
        // Agrega la asignación al array de colaboradores del proyecto
        return await colProyectos.updateOne(
            { _id: new ObjectId(proyectoId) },
            { $push: { colaboradores: asignacion } } // Usa $push para añadir al array
        );
    }

    // Desasigna un colaborador de un proyecto (estableciendo una fecha de desasignación)
    async desasignarColaborador(proyectoId, colaboradorId) {
        // Accede a la colección de proyectos en MongoDB
        const colProyectos = dbClient.db.collection('proyectos');
        
        // Primero, obtiene el proyecto para verificar si el colaborador existe
        const proyecto = await this.getOne(proyectoId);
        if (!proyecto || !proyecto.colaboradores) {
            throw new Error("Proyecto no encontrado o no tiene colaboradores asignados");
        }
        
        // Busca el índice del colaborador activo (sin fecha de desasignación)
        const colaboradorIndex = proyecto.colaboradores.findIndex(
            c => c.colaboradorId === colaboradorId && !c.fechaDesasignacion
        );
        
        // Si el colaborador no se encuentra o ya fue desasignado, lanza un error
        if (colaboradorIndex === -1) {
            throw new Error("Colaborador no encontrado en este proyecto o ya desasignado");
        }
        
        // Agrega la fecha de desasignación al registro del colaborador
        proyecto.colaboradores[colaboradorIndex].fechaDesasignacion = new Date();
        
        // Actualiza el documento del proyecto con la lista de colaboradores modificada
        return await colProyectos.updateOne(
            { _id: new ObjectId(proyectoId) },
            { $set: { colaboradores: proyecto.colaboradores } }
        );
    }
}

// Exporta una instancia única del modelo de proyectos
export default new ProyectosModel();
