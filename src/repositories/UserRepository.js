import pool from "../config/database.js";

class UserRepository {
  async insertUser(postedUserData) {
    const query = {
      text: "INSERT INTO users (username, password) VALUES ($1, $2)",
      values: [postedUserData.username, postedUserData.password],
    };

    await pool.query(query);

    return;
  }
}

export default UserRepository;
