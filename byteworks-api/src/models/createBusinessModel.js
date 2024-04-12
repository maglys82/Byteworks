import pool from "../../config/database/connectionDB.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createBusiness = async (firstName, email, password, role, service) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("service received:", service)
    const insertBusinessQuery = `INSERT INTO business (firstname, email, password, role, service) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const result = await pool.query(insertBusinessQuery, [
      firstName,
      email,
      hashedPassword,
      role,
      service,
    ]);

    const newBusiness = result.rows[0];
    const payload = {
      BusinessId: newBusiness.id,
      email: newBusiness.email,
    };
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(payload, secret, { expiresIn: "1h" });

    return { message: "Business registered successfully!", newBusiness, token };
  } catch (error) {
    console.error(error);
    let errorMessage = "An error occurred during registration.";
    if (error.code && error.code === "23505") {
      errorMessage = "Email already exists.";
    }
    return { message: errorMessage, error };
  }
};

export { createBusiness };
