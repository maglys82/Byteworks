import express from "express"
import { loginUser } from "../../src/controllers/userLoginController.js"
import { isLogin } from "../../middlewares/isLogin.js"
import { validparameters } from "../../middlewares/validateParametersLogin.js"

const router = express.Router()

router.post("/login", isLogin, validparameters, loginUser)

export default router
