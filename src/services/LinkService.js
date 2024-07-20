class LinkService {
  constructor(linkRepository) {
    this.linkRepository = linkRepository;
    this.createLink = this.createLink.bind(this);
    this.updateLink = this.updateLink.bind(this);
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
