import pool from "../config/database.js";

class PatientRepository {
  constructor() {
    this.listPatients = this.listPatients.bind(this);
    this.createPatient = this.createPatient.bind(this);
    this.updatePatient = this.updatePatient.bind(this);
    this.deletePatient = this.deletePatient.bind(this);
  }

  async listPatients(user_id) {
    const query = {
      text: "SELECT * FROM patients WHERE user_id=$1",
      values: [user_id],
    };

    const result = await pool.query(query);

    return result.rows;
  }

  async createPatient(postData) {
    const query = {
      text: "INSERT INTO PATIENTS (user_id, name, age) VALUES ($1, $2, $3)",
      values: [postData.user_id, postData.name, postData.age],
    };

    await pool.query(query);

    return;
  }

  async updatePatient(updateData) {
    const query = {
      text: "UPDATE patients SET name=$1, age=$2 WHERE id=$3",
      values: [updateData.name, updateData.age, updateData.id],
    };

    await pool.query(query);

    return;
  }

  async deletePatient(id) {
    const query = {
      text: "DELETE FROM patients WHERE id=$1",
      values: [id],
    };

    await pool.query(query);

    return;
  }
}

export default PatientRepository;
