class LinkService {
  constructor(linkRepository) {
    this.linkRepository = linkRepository;
    this.createLink = this.createLink.bind(this);
  }

  async createLink(postedData) {
    await this.linkRepository.createLink(postedData);
    return;
  }
}

export default LinkService;
