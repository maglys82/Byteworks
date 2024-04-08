const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const { pool } = require('./consulta')
const { guardarJobs,guardarUsuarios,obtenerJobs,obtenerUsuarios} = require('./consulta');

app.use(cors());
app.use(express.json())
//-Funcion Crear  una  nuevo jobs y usuario en el servidor. 
app.post('/jobs', async (req, res) => {
  const { name, business, type_of_service, status } = req.body;
  if (!name || !business || !type_of_service || !status){
    res.status(400).json('Faltan datos Requeridos');
    return;
  }
  try {
    await guardarJobs(name, business, type_of_service, status);
    res.status(201).json('Recurso agregado con Exito');
  } 
  catch (error) {
    console.error(error)
    res.status(500).json('Error al Agregar Recurso');
  }
})
app.post('/usuarios', async (req, res) => {
  const { name, rol, skill, review, status, comentario } = req.body;
  if (!name || !rol || !skill || !review || !status || !comentario) {
    res.status(400).json('Faltan datos Requeridos');
    return;
  }
  try {
    await guardarUsuarios(name, rol, skill, review, status, comentario);
    res.status(201).json('Usuario agregado con Éxito');
  } 
  catch (error) {
    console.error(error);
    res.status(500).json('Error al Agregar Usuario');
  }
});
//funcion  Obtener información o recursos del servidor, lista de jobs y usuarios
app.get('/jobs', async (req, res) => {
  const jobs = await obtenerJobs();
  res.json(jobs);
})

app.get('/usuarios', async (req, res) => {
  const usuarios = await obtenerUsuarios();
  res.json(usuarios);
})

module.exports = app
