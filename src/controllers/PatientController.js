import jwt from "jsonwebtoken";

class PatientController {
  constructor(patientService) {
    this.patientService = patientService;
    this.listPatients = this.listPatients.bind(this);
    this.createPatient = this.createPatient.bind(this);
    this.updatePatient = this.updatePatient.bind(this);
    this.deletePatient = this.deletePatient.bind(this);
  }

  async listPatients(request, response, next) {
    try {
      const token = jwt.decode(request.headers.token);
      const user_id = token.id;

      const list = await this.patientService.listPatients(user_id);

      return response.status(200).json(list);
    } catch (error) {
      next(error);
    }
  }

  async createPatient(request, response, next) {
    try {
      const token = jwt.decode(request.headers.token);
      const user_id = token.id;

      const postData = {
        user_id: user_id,
        name: request.body.name,
        age: request.body.age,
      };

      await this.patientService.createPatient(postData);

      return response.sendStatus(201);
    } catch (error) {
      next(error);
    }
  }

  async updatePatient(request, response, next) {
    try {
      // passar por autorização

      const id = request.params.id;
      console.log(id);

      const updateData = {
        id: id,
        name: request.body.name,
        age: request.body.age,
      };

      await this.patientService.updatePatient(updateData);

      return response.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }

  async deletePatient(request, response, next) {
    try {
      const id = request.params.id;
      console.log(id);

      await this.patientService.deletePatient(id);

      return response.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}

export default PatientController;
