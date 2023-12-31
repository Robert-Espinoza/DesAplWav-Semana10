const express = require('express');
const conectarDB = require('./config/db')
const config = require('./config/global');
const cors = require('cors');

const app = express();

//Conectar DB
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));
app.use('/api/login', require('./routes/usuarios'));
app.use('/api/creater-user', require('./routes/usuario'));

app.listen(config.port, () => {
    console.log('El servidor por el puerto 4000')
})