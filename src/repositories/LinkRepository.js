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

  async updateLink(updateData) {
    const query = {
      text: "UPDATE links SET title=$1, url=$2 WHERE id=$3",
      values: [updateData.title, updateData.url, updateData.id],
    };

    await pool.query(query);

    return;
  }
}

export default LinkRepository;
