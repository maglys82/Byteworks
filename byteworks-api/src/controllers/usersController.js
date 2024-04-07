import { createUser, createBusiness } from "../models/userModel.js"

const createNewUser = async (req, res) => {
  try {
    const { user } = req.body
    const newUser = await createUser(user)
    res.status(201).json({ user: newUser })
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const createNewBusiness = async (req, res) => {
  try {
    const { business } = req.body
    const newBusiness = await createBusiness(business)
    res.status(201).json({ business: newBusiness })
  } catch (error) {
    res.status(400).json(error.message)
  }
}

export { createNewUser, createNewBusiness }
