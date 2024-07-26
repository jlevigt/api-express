import "dotenv/config";
import express, { json } from "express";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json" };

import status from "./status.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import linkRoutes from "./routes/linkRoutes.js";

import errorMiddleware from "./middlewares/errorHandlerMiddleware.js";

const PORT = 8080;

const app = express();

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(json());

app.get("/api/v1/status", status);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/links", linkRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});

export default app;
