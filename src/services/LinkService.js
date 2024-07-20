class LinkService {
  constructor(linkRepository) {
    this.linkRepository = linkRepository;
    this.createLink = this.createLink.bind(this);
    this.updateLink = this.updateLink.bind(this);
    this.listLinks = this.listLinks.bind(this);
    this.listLinksByUsername = this.listLinksByUsername.bind(this);
  }

  async listLinks(user_id) {
    const linkList = await this.linkService.listLinks(user_id);

    return linkList;
  }

  async listLinksByUsername(username) {
    const linkList = await this.linkService.listLinksByUsername(username);

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
}

export default LinkService;
