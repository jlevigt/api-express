import jwt from "jsonwebtoken";

class LinkController {
  constructor(linkService) {
    this.linkService = linkService;
    this.createLink = this.createLink.bind(this);
  }

  async createLink(request, response, next) {
    try {
      const postedData = request.body;
      // pegar id do user no header

      await this.linkService.createLink(postedData);

      return response.sendStatus(201);
    } catch (error) {
      next(error);
    }
  }

  async updateLink(request, response, next) {
    try {
      const updateData = request.body;
      // pegar id do link por query parameter

      await this.linkService.updateLink(updateData);

      return response.sendStatus(201);
    } catch (error) {
      next(error);
    }
  }
}

export default LinkController;
