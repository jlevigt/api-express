import { Router } from "express";

import LinkRepostitory from "../repositories/LinkRepository.js";
import LinkController from "../controllers/LinkController.js";
import LinkService from "../services/LinkService.js";

const linkRoutes = Router();

const linkRepository = new LinkRepostitory();
const linkService = new LinkService(linkRepository);
const linkController = new LinkController(linkService);

linkRoutes.post("", linkController.createLink);
linkRoutes.put("/:id", linkController.updateLink);

export default linkRoutes;
