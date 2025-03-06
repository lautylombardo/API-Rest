import 'dotenv/config';
import express from 'express';
import routesColaboradores from './routes/colaboradores.js';
import routesPerfiles from './routes/perfiles.js';
import routesTribus from './routes/tribus.js';
import routesClientes from './routes/clientes.js';
import routesRubros from './routes/rubros.js';
import routesProyectos from './routes/proyectos.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// MIDDLEWARES
app.use('/colaboradores', routesColaboradores);
app.use('/perfiles', routesPerfiles);
app.use('/tribus', routesTribus);
app.use('/clientes', routesClientes);
app.use('/rubros', routesRubros);
app.use('/proyectos', routesProyectos);

try{
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log('Servidor activo en el puerto ' + PORT))
}catch(e){
    console.log(e);
}