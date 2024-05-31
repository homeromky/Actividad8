// Creación y configuración de la APP de Express
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', require('./routes/api')) // Todas las peticiones que empiecen por /api se gestionarán en el fichero api.js


app.use((err, req, res,
    next) => {
        res.status(500).json({
            error: err.message });
    
});

module.exports = app;