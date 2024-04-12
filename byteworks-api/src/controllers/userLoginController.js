import { validateLoginModel } from "../models/validateLoginModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findError } from "../utils/utils.js";

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { success, userType, user } = await validateLoginModel({ email, password });

    if (!success) {
      const errorFound = findError("auth_01");
      return res.status(errorFound[0].status).json({ error: errorFound[0].message });
    } else {
      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (!isPasswordValid) {
        const errorFound = findError("auth_02");
        return res.status(errorFound[0].status).json({ error: errorFound[0].message });
      } else {

        const token = jwt.sign({ email, userType }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json({
          message: `Welcome, ${email} has logged in successfully as a ${userType}.`,
          code: 200,
          token,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export { loginUser };
