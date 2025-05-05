class PatientService {
  constructor(patientRepository) {
    this.patientRepository = patientRepository;
    this.listPatients = this.listPatients.bind(this);
    this.createPatient = this.createPatient.bind(this);
    this.updatePatient = this.updatePatient.bind(this);
    this.deletePatient = this.deletePatient.bind(this);
  }

  async listPatients(user_id) {
    const patientList = await this.patientRepository.listPatients(user_id);

    return patientList;
  }

  async createPatient(postedData) {
    // validar

    await this.patientRepository.createPatient(postedData);
    return;
  }

  async updatePatient(updateData) {
    // validar

    await this.patientRepository.updatePatient(updateData);
    return;
  }

  async deletePatient(id) {
    await this.patientRepository.deletePatient(id);

    return;
  }
}

export default PatientService;
