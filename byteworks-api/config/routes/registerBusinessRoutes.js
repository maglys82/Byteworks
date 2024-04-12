import express from "express";
import { createNewBusiness } from "../../src/controllers/businessController.js";
import { validateParametersBusiness } from "../../middlewares/validateParamsBusiness.js";

const router = express.Router();

router.post("/business",createNewBusiness);

export default router;
