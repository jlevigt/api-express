import pool from "../config/database.js";

class UserRepository {
  async findUserByUsername(username) {
    const query = {
      text: "SELECT * FROM users WHERE username=$1",
      values: [username],
    };

    const results = await pool.query(query);

    return results.rows[0];
  }

  async findUserByEmail(email) {
    const query = {
      text: "SELECT * FROM users WHERE email=$1",
      values: [email],
    };

    const results = await pool.query(query);

    return results.rows[0];
  }

  async insertUser(postData) {
    const query = {
      text: "INSERT INTO users (name, username, email, password) VALUES ($1, $2, $3, $4)",
      values: [
        postData.name,
        postData.username,
        postData.email,
        postData.password,
      ],
    };

    await pool.query(query);

    return;
  }
}

export default UserRepository;
