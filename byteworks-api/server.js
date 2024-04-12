import express from "express";
import cors from "cors";
import { logger } from "logger-express";

import registerBusinessRoutes from "./config/routes/registerBusinessRoutes.js";
import registerUserRoutes from "./config/routes/registerUserRoutes.js";
import loginRoutes from "./config/routes/loginRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger());
app.use("/", registerUserRoutes);
app.use("/", loginRoutes);
app.use("/", registerBusinessRoutes);

app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`));

