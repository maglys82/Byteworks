const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const { pool } = require('./consulta')


app.use(cors());
app.use(express.json())






// 1.-Funcion insertar en la tabla Jobs y usuarios
const guardarJobs = async (name, business, type_of_service, status) => {
    const consulta = "INSERT INTO jobs values (DEFAULT,$1.$2,$3,$4)";
    const values = [name, business, type_of_service, status];
    try {
        const result = await pool.query(consulta, values);
        return result;

    } catch (error) {
        console.error(error);

    }

}

const guardarUsuarios = async (name, rol, skill, review, status, comentario) => {
    const consulta = "INSERT INTO usuarios values (DEFAULT,$1,$2,$3,$4,$5,$6)";
    const values = [name, rol, skill, review, status, comentario];
    try {
        const result = await pool.query(consulta, values);
        return result;

    } catch (error) {
        console.error(error);

    }
}

//2.-Funcion Crear  una  nuevo jobs y usuario en el servidor. 
app.post('/jobs', async (req, res) => {
    const { name, business, type_of_service, status } = req.body;
    try {
        await guardarJobs(name, business, type_of_service, status);
        res.status(201).json('Recurso agregado con Exito');
    } catch (error) {
        console.error(error)
        res.status(500).json('Error al Agregar Recurso');
    }
})

app.post('/usuarios', async (req, res) => {
    const { name, rol, skill, review, status, comentario } = req.body;
    try {
        await guardarUsuarios(name, rol, skill, review, status, comentario);
        res.status(201).json('Usuario agregado con Exito');
    } catch (error) {
        console.error(error)
        res.status(500).json('Error al Agregar Usuario');;
    }
})

//Funcion Obtener todas los jobs  y usuarios
const obtenerJobs = async () => {
    const consulta = 'Select * from jobs'
    const { rows } = await pool.query(consulta);
    return rows;
}

const obtenerUsuarios = async () => {
    const consulta = 'Select * from usuarios'
    const { rows } = await pool.query(consulta);
    return rows;
}

//funcion  Obtener información o recursos del servidor, lista de jobs y usuarios
app.get('/jobs', async (req, res) => {
    const jobs = await obtenerJobs();
    res.json(jobs);
})

app.get('/usuarios', async (req, res) => {
    const usuarios = await obtenerUsuarios();
    res.json(usuarios);
})



app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
