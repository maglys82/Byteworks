import express from "express"
import { loginUser } from "../../src/controllers/userLoginController.js"
import { validparameters } from "../../middlewares/validateParametersLogin.js"

const router = express.Router()

router.post("/login", validparameters, loginUser)

export default router
