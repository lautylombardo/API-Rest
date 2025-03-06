import 'dotenv/config';
import express from 'express';
import routesMascotas from './routes/mascotas.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//MIDDLEWARES
app.use('/mascotas', routesMascotas);

try{
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log('Servidor activo en el puerto ' + PORT))
}catch(e){
    console.log(e);
}