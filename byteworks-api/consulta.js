
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

module.exports= {pool}