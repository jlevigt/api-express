import jwt from "jsonwebtoken";

class LinkController {
  constructor(linkService) {
    this.linkService = linkService;
    this.createLink = this.createLink.bind(this);
    this.updateLink = this.updateLink.bind(this);
  }

  async createLink(request, response, next) {
    try {
      const postData = request.body;

      const { id } = jwt.decode(request.headers.token);
      postData.owner_id = id;

      await this.linkService.createLink(postData);

      return response.sendStatus(201);
    } catch (error) {
      next(error);
    }
  }

  async updateLink(request, response, next) {
    try {
      const updateData = request.body;
      const link_id = request.query.id;

      updateData.id = link_id;

      await this.linkService.updateLink(updateData);

      return response.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}

export default LinkController;
