import express  from "express";
import cors from "cors";
//import { logger } from "logger-express";
//import swagger from "./config/swagger/swagger.js";

import businessRoutes from "./config/routes/businessRoute.js";
import profileRoutes from "./config/routes/profileRoutes.js";
import loginRoutes from "./config/routes/loginRoutes.js";
import registerUserRoutes from "./config/routes/registerUserRoutes.js";
import registerBusinessRoutes from "./config/routes/registerBusinessRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

//swagger(app);
app.use(cors());
app.use(express.json());
//app.use(logger());
app.use("/",loginRoutes);
app.use("/", registerUserRoutes);
app.use("/business", businessRoutes);
app.use("/profile", profileRoutes);
app.use("/", registerBusinessRoutes);


app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
  });

  export default app;
