import pool from "../../config/database/connectionDB.js"

const getBusiness = async () => {
  const SQLquery = {
    text: "SELECT email, role, type_of_service FROM business",
  }
  const response = await pool.query(SQLquery)
  return response.rows
};

export { getBusiness }
