import express, { json } from "express";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/userRoutes.js";

import errorMiddleware from "./middlewares/errorHandlerMiddleware.js";

const app = express();

app.use(json());

app.use("/api/v1/users", userRoutes);

app.use(errorMiddleware);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
