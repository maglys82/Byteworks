import express from "express"
import { getAllBusiness} from "../../src/controllers/businessController.js"
import { isLogin } from "../../middlewares/isLogin.js"
const router = express.Router()

router.get("/business", isLogin, getAllBusiness)

export default router
