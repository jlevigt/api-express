import express, { json } from "express";

import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(json());

app.use("/api/v1/users", userRoutes);

const PORT = 8080;

app.listen(PORT, () => {
  console.log("http://localhost:8080/");
});
