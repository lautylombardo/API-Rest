import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb";

class ProyectosModel {
    async create(proyecto) {
        const colProyectos = dbClient.db.collection('proyectos');
        return await colProyectos.insertOne(proyecto);
    }

    async update(id, proyecto) {
        const colProyectos = dbClient.db.collection('proyectos');
        return await colProyectos.updateOne(
            { _id: new ObjectId(id) }, 
            { $set: proyecto }
        );
    }

    async delete(id) {
        const colProyectos = dbClient.db.collection('proyectos');
        return await colProyectos.deleteOne({ _id: new ObjectId(id) });
    }

    async getAll() {
        const colProyectos = dbClient.db.collection('proyectos');
        return await colProyectos.find({}).toArray();
    }

    async getOne(id) {
        const colProyectos = dbClient.db.collection('proyectos');
        return await colProyectos.findOne({ _id: new ObjectId(id) });
    }

    async getByCliente(clienteId) {
        const colProyectos = dbClient.db.collection('proyectos');
        return await colProyectos.find({ clienteId: clienteId }).toArray();
    }

    async getByTribu(tribuId) {
        const colProyectos = dbClient.db.collection('proyectos');
        return await colProyectos.find({ tribuId: tribuId }).toArray();
    }

    async asignarColaborador(proyectoId, colaboradorId, rolEnProyecto) {
        const colProyectos = dbClient.db.collection('proyectos');
        const asignacion = {
            colaboradorId: colaboradorId,
            fechaAsignacion: new Date(),
            rolEnProyecto: rolEnProyecto
        };
        
        return await colProyectos.updateOne(
            { _id: new ObjectId(proyectoId) },
            { $push: { colaboradores: asignacion } }
        );
    }

    async desasignarColaborador(proyectoId, colaboradorId) {
        const colProyectos = dbClient.db.collection('proyectos');
        
        // Primero obtenemos el proyecto para verificar que el colaborador existe
        const proyecto = await this.getOne(proyectoId);
        if (!proyecto || !proyecto.colaboradores) {
            throw new Error("Proyecto no encontrado o no tiene colaboradores asignados");
        }
        
        // Actualizamos el registro existente con fecha de desasignación
        const colaboradorIndex = proyecto.colaboradores.findIndex(
            c => c.colaboradorId === colaboradorId && !c.fechaDesasignacion
        );
        
        if (colaboradorIndex === -1) {
            throw new Error("Colaborador no encontrado en este proyecto o ya desasignado");
        }
        
        // Actualizamos el array de colaboradores con la fecha de desasignación
        proyecto.colaboradores[colaboradorIndex].fechaDesasignacion = new Date();
        
        return await colProyectos.updateOne(
            { _id: new ObjectId(proyectoId) },
            { $set: { colaboradores: proyecto.colaboradores } }
        );
    }
}

export default new ProyectosModel();
