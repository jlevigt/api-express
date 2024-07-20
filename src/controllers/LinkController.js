import jwt from "jsonwebtoken";

class LinkController {
  constructor(linkService) {
    this.linkService = linkService;
    this.createLink = this.createLink.bind(this);
    this.updateLink = this.updateLink.bind(this);
    this.listLinks = this.listLinks.bind(this);
    this.listLinksByUsername = this.listLinksByUsername.bind(this);
  }

  async listLinks(request, response, next) {
    try {
      const token = jwt.decode(request.headers.token);
      const user_id = token.user_id;

      await this.linkService.listLinks(user_id);

      return response.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }

  async listLinksByUsername(request, response, next) {
    try {
      const username = request.param.username;

      await this.linkService.listLinksByUsername(username);

      return response.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }

  async createLink(request, response, next) {
    try {
      const token = jwt.decode(request.headers.token);
      const user_id = token.user_id;

      const postData = {
        user_id: user_id,
        title: request.body.title,
        url: request.body.url,
      };

      await this.linkService.createLink(postData);

      return response.sendStatus(201);
    } catch (error) {
      next(error);
    }
  }

  async updateLink(request, response, next) {
    try {
      // passar por autorização

      const id = request.param.id;

      const updateData = {
        id: id,
        title: request.body.title,
        url: request.body.url,
        public: request.body.public,
      };

      await this.linkService.updateLink(updateData);

      return response.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}

export default LinkController;
