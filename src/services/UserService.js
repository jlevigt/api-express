import bcrypt from "bcryptjs";

import BadRequestError from "../errors/BadRequestError.js";

const COST = 1; // saltRounds: expoente que elevará a base 2. O resultado é o número de vezes que o algoritmo de hash será executado.

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
    this.createUser = this.createUser.bind(this);
  }

  async createUser(postedData) {
    if (!postedData.name || !postedData.email || !postedData.username || !postedData.password) {
      throw new BadRequestError("BadRequest blank");
    }
    // unique email
    const invalidEmail = await this.userRepository.findUserByEmail(postedData.email);
    if (invalidEmail) {
      throw new BadRequestError("BadRequest email");
    }
    // unique username
    const invalidUsername = await this.userRepository.findUserByUsername(postedData.username);
    if (invalidUsername) {
      throw new BadRequestError("BadRequest username");
    }
    // hash password
    postedData.password = await bcrypt.hash(postedData.password, COST); // O salt será gerado junto a função

    await this.userRepository.insertUser(postedData);

    return;
  }
}

export default UserService;
