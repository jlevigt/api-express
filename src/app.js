import express, { json } from "express";
import "dotenv/config";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json" };

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import linkRoutes from "./routes/linkRoutes.js";

import errorMiddleware from "./middlewares/errorHandlerMiddleware.js";
import authMiddleware from "./middlewares/authMiddlware.js";

const app = express();
app.use(json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/links", authMiddleware, linkRoutes);

app.use(errorMiddleware);

export default app;
