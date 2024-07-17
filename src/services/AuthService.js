import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import BadRequestError from "../errors/BadRequestError.js";

const EXPIRATION_IN_SECONDS = 60 * 60 * 24; // 1 dia

const ERROR_MESSAGES = {
  USER_NOT_FOUND: "NotFound: User not found",
  INVALID_PASSWORD: "BadRequest: Invalid email or password",
};

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
    this.authenticate = this.authenticate.bind(this);
  }

  async authenticate(loginData) {
    this.validateRequest(loginData);
    const storedUser = await this.userRepository.findUserByEmail(loginData.email);
    if (!storedUser) {
      throw new BadRequestError(ERROR_MESSAGES.USER_NOT_FOUND);
    }

    const isPasswordValid = await this.verifyPassword(loginData.password, storedUser.password);
    if (isPasswordValid) {
      return this.generateToken(storedUser);
    } else {
      throw new BadRequestError(ERROR_MESSAGES.INVALID_PASSWORD);
    }
  }

  async verifyPassword(password, storedPassword) {
    return await bcryptjs.compare(password, storedPassword);
  }

  generateToken(user) {
    const payload = {
      email: user.email,
      roles: user.roles,
      exp: Math.floor(Date.now() / 1000) + EXPIRATION_IN_SECONDS,
    };

    return jwt.sign(payload, process.env.JWTKEY);
  }

  validateRequest(body) {
    const { email, password } = body;
    if (!email || !password) {
      throw new BadRequestError("BadRequest: Email and password are required");
    }
  }
}

export default AuthService;
