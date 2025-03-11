// Importo variables de entorno desde el archivo .env
import 'dotenv/config';
// Importo la clase MongoClient del paquete mongodb
import { MongoClient } from "mongodb";

// Definicion de una clase "dbClient" (base de datos) para manejar conexiones con MongoDB
class dbClient {
    constructor() {
        // Crea la cadena de conexión a MongoDB usando variables de entorno
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=DeliveryCenter-API`;
        // Inicializa MongoClient con la cadena de conexión
        this.client = new MongoClient(queryString);
        // Conecta a la base de datos al instanciar el cliente
        this.conectarBD();
    }

    // Método para establecer conexión con MongoDB
    async conectarBD() {
        try {
            // Conexion al servidor de MongoDB
            await this.client.connect();
            // Selecciona la base de datos especificada en las variables de entorno o usar la predeterminada
            this.db = this.client.db(process.env.DB_NAME || 'Delivery-center');
            console.log("Conectado al servidor de base de datos");
        } catch (e) {
            // Registra cualquier error de conexión
            console.log(e);
        }
    }
}

// Exporta una instancia única del cliente de base de datos
export default new dbClient;
