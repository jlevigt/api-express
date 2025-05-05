import "dotenv/config";
import express, { json } from "express";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// workaround para __dirname em ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// leitura dinâmica do JSON
const swaggerRaw = await readFile(
  path.join(__dirname, "../swagger.json"),
  "utf-8",
);
const swaggerDocument = JSON.parse(swaggerRaw);
import status from "./status.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";

import errorMiddleware from "./middlewares/errorHandlerMiddleware.js";

const PORT = 8080;

const app = express();

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(json());

app.get("/api/v1/status", status);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/patients", patientRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});

export default app;
