const express = require('express');
const conectarBD = require('./config/db');
const cors = require('cors');
//Creamos el servidor
const app = express();

//Conectamos a la BD
conectarBD();
app.use(cors());
//use json midlewar se habilita para que se pueda enviar json
app.use(express.json());
//Definimos rutas principales;
app.use('/api/productos',require('./routes/producto'));

app.listen(4000,() => {
    console.log('El servidor esta corriendo perfectamente');
})