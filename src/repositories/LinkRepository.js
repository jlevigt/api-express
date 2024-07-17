import pool from "../config/database.js";

class LinkRepository {
  constructor() {
    this.createLink = this.createLink.bind(this);
  }

  async createLink(postData) {
    const query = {
      text: "INSERT INTO LINKS (owner_id, title, url) VALUES ($1, $2, $3)",
      values: [postData.owner_id, postData.title, postData.url],
    };

    await pool.query(query);

    return;
  }

  async updateLink(updateData) {
    const query = {
      text: "UPDATE links SET title=$1, url=$2, status=$3 WHERE id=$4",
      values: [updateData.title, updateData.url, updateData.status, updateData.id],
    };

    await pool.query(query);

    return;
  }
}

export default LinkRepository;
