import bcrypt from "bcryptjs";

import BadRequestError from "../errors/BadRequestError.js";

const cost = 1;

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
    this.createUser = this.createUser.bind(this);
  }

  async createUser(postData) {
    if (
      !postData.name ||
      !postData.username ||
      !postData.email ||
      !postData.password
    ) {
      throw new BadRequestError("BadRequest blank");
    }

    await this.checkUniqueUsername(postData.username);
    await this.checkUniqueEmail(postData.email);

    postData.password = await bcrypt.hash(postData.password, cost);

    await this.userRepository.insertUser(postData);

    return;
  }

  async checkUniqueUsername(username) {
    const storedUser = await this.userRepository.findUserByUsername(username);
    if (storedUser) {
      throw new BadRequestError("BadRequest username");
    }
  }

  async checkUniqueEmail(email) {
    const storedUser = await this.userRepository.findUserByEmail(email);
    if (storedUser) {
      throw new BadRequestError("BadRequest email");
    }
  }
}

export default UserService;
