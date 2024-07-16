class AuthController {
  constructor(authService) {
    this.authService = authService;
    this.authenticate = this.authenticate.bind(this);
  }

  async authenticate(request, response, next) {
    try {
      const loginData = request.body;

      const token = await this.authService.authenticate(loginData);

      return response.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
