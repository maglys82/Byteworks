import express from "express"
import { getAllProfiles} from "../../src/controllers/profileController.js"
import { isLogin } from "../../middlewares/isLogin.js"
const router = express.Router()

router.get("/users", isLogin, getAllProfiles)

export default router
