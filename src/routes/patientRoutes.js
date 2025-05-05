import { Router } from "express";

import PatientRepostitory from "../repositories/PatientRepository.js";
import PatientController from "../controllers/PatientController.js";
import PatientService from "../services/PatientService.js";

import authMiddleware from "../middlewares/authMiddlware.js";

const patientRoutes = Router();

const patientRepository = new PatientRepostitory();
const patientService = new PatientService(patientRepository);
const patientController = new PatientController(patientService);

patientRoutes.get("", authMiddleware, patientController.listPatients);
patientRoutes.post("", patientController.createPatient);
patientRoutes.put("/:id", patientController.updatePatient);
patientRoutes.delete("/:id", patientController.deletePatient);

export default patientRoutes;
