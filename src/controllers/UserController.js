class UserController {
  constructor(userService) {
    this.userService = userService;
    this.createUser = this.createUser.bind(this);
  }

  async createUser(request, response) {
    const postedUserData = request.body;

    await this.userService.createUser(postedUserData);

    return response.sendStatus(201);
  }
}

export default UserController;
