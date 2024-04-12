import bcrypt from 'bcryptjs';
import pool from "../../config/database/connectionDB.js";

const validateLoginModel = async ({ email, password }) => {
  try {
    let user = await byEmail(email, 'users');
    let userType = 'user';

    if (!user) {
      user = await byEmail(email, 'business');
      userType = 'business';
    }

    if (!user) {
      console.log('User not found:', email);
      return { success: false, error: 'User not found.' };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log('Invalid password:', email);
      return { success: false, error: 'Invalid password.' };
    }

    console.log('Login successful:', email);
    return { success: true, userType, user };
  } catch (error) {
    console.error('Error during login:', error);
    return { success: false, error: 'Error during login. Please try again later.' };
  }
};

const byEmail = async (email, tableName) => {
  try {
    const SQLquery = {
      text: `SELECT * FROM ${tableName} WHERE email = $1`,
      values: [email],
    };
    const response = await pool.query(SQLquery);
    return response.rows[0];
  } catch (error) {
    console.error('Error querying database:', error);
    throw error;
  }
};

export { validateLoginModel };
