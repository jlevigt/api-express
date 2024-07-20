class UserController {
  constructor(userService) {
    this.userService = userService;
    this.createUser = this.createUser.bind(this);
  }

  async createUser(request, response, next) {
    try {
      const postData = {
        name: request.body.name,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
      };

      await this.userService.createUser(postData);

      return response.sendStatus(201);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
