import jwt from "jsonwebtoken";

import UnauthorizedError from "../errors/UnauthorizedError.js";

function authMiddleware(request, res, next) {
  try {
    const token = request.headers.token;
    if (!token) {
      throw new UnauthorizedError("Token não enviado");
    }

    jwt.verify(token, process.env.JWTKEY);

    next();
  } catch (error) {
    next(error);
  }
}

export default authMiddleware;
