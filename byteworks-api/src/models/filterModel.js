import pool from "../../config/database/connectionDB.js"

const filterJobs = async () => {
  const SQLquery = {
    text: "SELECT business, name, role, type_of_service, status, FROM jobs",
  }
  const response = await pool.query(SQLquery)
  return response.rows
};

export { filterJobs }
