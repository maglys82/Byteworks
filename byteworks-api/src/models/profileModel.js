import pool from "../../config/database/connectionDB.js"

const getProfiles = async () => {
  const SQLquery = {
    text: "SELECT email, role, type_of_work, status, review FROM users",
  }
  const response = await pool.query(SQLquery)
  return response.rows
};

export { getProfiles }
