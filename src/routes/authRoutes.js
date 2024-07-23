import { Router } from "express";

import UserRepository from "../repositories/UserRepository.js";
import AuthService from "../services/AuthService.js";
import AuthController from "../controllers/AuthController.js";

const authRoutes = Router();

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

authRoutes.post("/", authController.authenticate);

export default authRoutes;
