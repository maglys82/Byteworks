import pool from "../../config/database/connectionDB.js";
import bcrypt from "bcryptjs";

const createUser = async (firstName, email, hashedPassword, role, skill, status) => {
  try {
    const password = "your_plain_text_password";
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const insertUserQuery = `INSERT INTO users (firstname, email, password, role, skill, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, email`;
    const result = await pool.query(insertUserQuery, [
      firstName,
      email,
      hashedPassword,
      role,
      skill,
      status,
    ]);

    const newUser = result.rows[0];
    return { message: "User registered successfully!", newUser };
  } catch (error) {
    console.error(error);
    let errorMessage = "An error occurred during registration.";
    if (error.code && error.code === "23505") {
      errorMessage = "Email already exists.";
    }
    return { message: "An error occurred during registration.", error };
  }
};

export { createUser };

