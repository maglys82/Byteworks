import pool from "../../config/database/connectionDB.js";
import bcrypt from "bcryptjs";

const createBusiness = async (firstName, email, hashedPassword, role, type_of_service) => {
  try {
    const password = "your_plain_text_password";
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const insertbusinessQuery = `INSERT INTO business (firstname, email, password, role, type_of_service) VALUES ($1, $2, $3, $4, $5) RETURNING id, email`;
    const result = await pool.query(insertbusinessQuery, [
      firstName,
      email,
      hashedPassword,
      role,
      type_of_service
    ]);

    const newbusiness = result.rows[0];
    return { message: "Business registered successfully!", newbusiness };
  } catch (error) {
    console.error(error);
    let errorMessage = "An error occurred during registration.";
    if (error.code && error.code === "23505") {
      errorMessage = "Email already exists.";
    }
    return { message: "An error occurred during registration.", error };
  }
};

export { createBusiness };
