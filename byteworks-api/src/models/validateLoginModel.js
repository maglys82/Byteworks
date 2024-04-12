import pool from "../../config/database/connectionDB.js"

const byEmail = async ({email}) => {
    const SQLquery = {
      text: "SELECT * FROM users WHERE email = $1",
      values: [email],
    }
    const response = await pool.query(SQLquery)
    return response.rows[0]
  }

  export { byEmail }