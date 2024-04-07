import pool from "../../config/database/connectionDB.js"
import bcrypt from "bcryptjs"

const createUser = async ({ email, password, role, type_of_work, status, review }) => {
  const hashedPassword = bcrypt.hashSync(password)
  const SQLquery = {
    text: "INSERT INTO users (email, password, role, type_of_work, status, review) VALUES ($1, $2, $3, $4) RETURNING *",
    values: [email, hashedPassword, role, type_of_work, status, review],
  }
  const response = await pool.query(SQLquery)
  return response.rows[0]
}

const createBusiness = async ({ email, password, role, type_of_service}) => {
  const hashedPassword = bcrypt.hashSync(password)
  const SQLquery = {
    text: "INSERT INTO business (email, password, type, role, type_of_service) VALUES ($1, $2, $3, $4) RETURNING *",
    values: [email, hashedPassword, role, type_of_service],
  }
  const response = await pool.query(SQLquery)
  return response.rows[0]
}
const byEmail = async ({email}) => {
  const SQLquery = {
    text: "SELECT * FROM usuarios WHERE email = $1",
    values: [email],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
}

export { createUser, createBusiness, byEmail }
