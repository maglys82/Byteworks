const { Pool } = require("pg");
const format = require("pg-format");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "postgres",
  database: "bytework",
  port: 5432,
  allowExitOnIdle: true
})
// 1.-Funcion insertar en la tabla Jobs y usuarios
const guardarJobs = async (name, business, type_of_service, status) => {
  const consulta = "INSERT INTO jobs values ($1,$2,$3,$4)";
  const values = [name, business, type_of_service, status];
  try {
    const result = await pool.query(consulta, values);
    return result;
  } 
  catch (error) {
    console.error(error);
  }
}

const guardarUsuarios = async (name, rol, skill, review, status, comentario) => {
  const consulta = "INSERT INTO usuarios values ($1,$2,$3,$4,$5,$6)";
  const values = [name, rol, skill, review, status, comentario];
  try {
    const result = await pool.query(consulta, values);
    return result;
  } 
  catch (error) {
    console.error(error);
  }
}
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

module.exports= {pool,guardarJobs,guardarUsuarios,obtenerJobs,obtenerUsuarios}
