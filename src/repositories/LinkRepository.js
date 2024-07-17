import pool from "../config/database.js";

class LinkRepository {
  constructor() {
    this.createLink = this.createLink.bind(this);
  }

  async createLink(postedData) {
    const query = {
      text: "INSERT INTO LINKS (owner_id, title, url) VALUES ($1, $2, $3)",
      values: [postedData.owner_id, postedData.title, postedData.url],
    };

    await pool.query(query);

    return;
  }
}

export default LinkRepository;
