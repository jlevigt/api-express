import bcrypt from "bcryptjs";

const COST = 1; // saltRounds: expoente que elevará a base 2. O resultado é o número de vezes que o algoritmo de hash será executado.

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
    this.createUser = this.createUser.bind(this);
  }

  async createUser(postedData) {
    // Validação
    if (!postedData.username || !postedData.password) {
      throw new Error("BadRequest");
    }
    // unique username
    // unique email
    // hash da senha
    postedData.password = await bcrypt.hash(postedData.password, COST); // O salt será gerado junto a função

    await this.userRepository.insertUser(postedData);
    return;
  }
}

export default UserService;
