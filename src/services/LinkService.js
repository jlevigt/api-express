class LinkService {
  constructor(linkRepository) {
    this.linkRepository = linkRepository;
    this.listLinks = this.listLinks.bind(this);
    this.listLinksByUsername = this.listLinksByUsername.bind(this);
    this.createLink = this.createLink.bind(this);
    this.updateLink = this.updateLink.bind(this);
  }

  async listLinks(user_id) {
    const linkList = await this.linkRepository.listLinks(user_id);

    return linkList;
  }

  async listLinksByUsername(username) {
    const linkList = await this.linkRepository.listLinksByUsername(username);

    return linkList;
  }

  async createLink(postedData) {
    // validar
    // título e link não pode ser vazio

    await this.linkRepository.createLink(postedData);
    return;
  }

  async updateLink(updateData) {
    // validar
    // título e link não pode ser vazio

    await this.linkRepository.updateLink(updateData);
    return;
  }

  async deleteLink(request, response, next) {
    const id = request.params.id;

    await this.linkService.deleteLink(id);

    return response.sendStatus(204);
  }
}

export default LinkService;
