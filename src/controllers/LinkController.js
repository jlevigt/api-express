import jwt from "jsonwebtoken";

class LinkController {
  constructor(linkService) {
    this.linkService = linkService;
    this.createLink = this.createLink.bind(this);
  }

  async createLink(request, response, next) {
    try {
      const postedData = request.body;
      // pegar id no header

      await this.linkService.createLink(postedData);

      return response.sendStatus(201);
    } catch (error) {
      next(error);
    }
  }
}

export default LinkController;
