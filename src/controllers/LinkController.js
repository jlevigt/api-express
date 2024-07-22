import jwt from "jsonwebtoken";

class LinkController {
  constructor(linkService) {
    this.linkService = linkService;
    this.listLinks = this.listLinks.bind(this);
    this.listLinksByUsername = this.listLinksByUsername.bind(this);
    this.createLink = this.createLink.bind(this);
    this.updateLink = this.updateLink.bind(this);
  }

  async listLinks(request, response, next) {
    try {
      const token = jwt.decode(request.headers.token);
      const user_id = token.id;

      const list = await this.linkService.listLinks(user_id);

      return response.status(200).json(list);
    } catch (error) {
      next(error);
    }
  }

  async listLinksByUsername(request, response, next) {
    try {
      const username = request.params.username;

      const list = await this.linkService.listLinksByUsername(username);

      return response.status(200).json(list);
    } catch (error) {
      next(error);
    }
  }

  async createLink(request, response, next) {
    try {
      const token = jwt.decode(request.headers.token);
      const user_id = token.id;

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

      const id = request.params.id;

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
