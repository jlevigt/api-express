import { Router } from "express";

import LinkRepostitory from "../repositories/LinkRepository.js";
import LinkController from "../controllers/LinkController.js";
import LinkService from "../services/LinkService.js";

import authMiddleware from "../middlewares/authMiddlware.js";

const linkRoutes = Router();

const linkRepository = new LinkRepostitory();
const linkService = new LinkService(linkRepository);
const linkController = new LinkController(linkService);

linkRoutes.get("", authMiddleware, linkController.listLinks);
linkRoutes.get("/:username", linkController.listLinksByUsername);
linkRoutes.post("", linkController.createLink);
linkRoutes.put("/:id", linkController.updateLink);
linkRoutes.delete("/:id", linkController.deleteLink);

export default linkRoutes;
