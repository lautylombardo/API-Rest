// Importo variables de entorno desde el archivo .env
import 'dotenv/config';
// Importo el framework Express para crear el servidor web
import express from 'express';
// Importo las rutas de los diferentes recursos
import routesColaboradores from './routes/colaboradores.js';
import routesPerfiles from './routes/perfiles.js';
import routesTribus from './routes/tribus.js';
import routesClientes from './routes/clientes.js';
import routesRubros from './routes/rubros.js';
import routesProyectos from './routes/proyectos.js';
// Importo body-parser para analizar los cuerpos de las solicitudes en formato JSON
import bodyParser from 'body-parser';

// Nueva instancia de la aplicación Express
const app = express();

// Configuracion del middleware para analizar cuerpos de solicitudes en formato JSON
app.use(bodyParser.json());
// Configuracion del  middleware para analizar cuerpos de solicitudes codificados en URL (datos de formulario)
app.use(bodyParser.urlencoded({ extended: true }));

// MIDDLEWARES - Registrar manejadores de rutas para diferentes puntos de acceso a los recursos
// Cada ruta será accesible en /nombre-recurso (ejemplo: /colaboradores)
app.use('/colaboradores', routesColaboradores);
app.use('/perfiles', routesPerfiles);
app.use('/tribus', routesTribus);
app.use('/clientes', routesClientes);
app.use('/rubros', routesRubros);
app.use('/proyectos', routesProyectos);

try {
    // Obteniene el puerto desde las variables de entorno o usar 3000 como predeterminado
    const PORT = process.env.PORT || 3000;
    // Inicia el servidor y escuchar en el puerto especificado
    app.listen(PORT, () => console.log('Servidor activo en el puerto ' + PORT))
} catch (e) {
    // Registra cualquier error que ocurra al iniciar el servidor
    console.log(e);
}
