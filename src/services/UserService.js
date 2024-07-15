class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
    this.createUser = this.createUser.bind(this);
  }

  async createUser(postedData) {
    await this.userRepository.insertUser(postedData);
    return;
  }
}

export default UserService;
