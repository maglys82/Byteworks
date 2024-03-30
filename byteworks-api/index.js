const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json())


app.get('/jobs', (req, res) => {
    fs.readFile('datos.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).send('Error interno del servidor');
        }
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    });
});

app.get('/usuarios', (req, res) => {
    fs.readFile('usuarios.json', 'utf8', (err, usuarios) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).send('Error interno del servidor');
        }
        const jsonData = JSON.parse(usuarios);
        res.json(jsonData);
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});


  
  
  