import { createUser } from "../models/createUserModel.js";

const createNewUser = async (req, res) => {
  try {
    const { firstName, email, password, role, skill, status } = req.body;
    const newUserObject = await createUser(firstName, email, password, role, skill, status);
    if (newUserObject.message === "User registered successfully!") {
      console.log("User registered successfully!");
      res.status(201).json({ message: "User registered successfully!", newUser: newUserObject.newUser });
    } else {
      console.error("Error creating user:", newUserObject.error);
      res.status(400).json({ message: newUserObject.message });
    }
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ message: error.message });
  }
};

export { createNewUser };

