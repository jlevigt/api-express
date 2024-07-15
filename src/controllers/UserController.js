class UserController {
  constructor(userService) {
    this.userService = userService;
    this.createUser = this.createUser.bind(this);
  }

  async createUser(request, response, next) {
    try {
      const postedData = request.body;

      await this.userService.createUser(postedData);

      return response.sendStatus(201);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
