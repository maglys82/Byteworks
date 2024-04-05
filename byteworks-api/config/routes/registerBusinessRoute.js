import express from "express"
import { createNewBusiness} from "../../src/controllers/usersController.js"
import { validateParametersBusiness } from "../../middlewares/validateParamsBusiness.js"

const router = express.Router()

router.post("/register", validateParametersBusiness, createNewBusiness)

export default router
