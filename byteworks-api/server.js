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

app.put('/jobs/:id', async (req, res) => {
  const jobId = req.params.id;
  const { name, business, type_of_service, type, user_dev } = req.body;
  try {
    const result = await pool.query('UPDATE jobs SET name = $1, business = $2, type_of_service = $3, type = $4, user_dev = $5 WHERE id = $6', [name, business, type_of_service, type, user_dev, jobId]);
    res.json('Job actualizado con éxito');
  } catch (error) {
    console.error(error);
    res.status(500).json('Error al actualizar el job');
  }
});

app.delete('/jobs/:id', async (req, res) => {
  const jobId = req.params.id;
  try {
    const result = await pool.query('DELETE FROM jobs WHERE id = $1', [jobId]);
    res.json('Job eliminado con éxito');
  } catch (error) {
    console.error(error);
    res.status(500).json('Error al eliminar el job');
  }
});

module.exports = app
