import jwt from "jsonwebtoken";
const { JsonWebTokenError } = jwt;
import BadRequestError from "../errors/BadRequestError.js";
import UnauthorizedError from "../errors/UnauthorizedError.js";

function errorMiddleware(err, request, response, next) {
  console.error(err);

  if (recognizeError(err)) {
    return response.status(err.code).json({
      type: err.type,
      code: err.code,
      message: err.message,
    });
  }

  const error = {
    code: 500,
    type: "Internal Error",
    message: err.message,
  };

  return response.status(500).json(error);
}

function recognizeError(error) {
  if (
    error instanceof BadRequestError ||
    error instanceof UnauthorizedError ||
    error instanceof JsonWebTokenError
  ) {
    return true;
  }

  return false;
}

export default errorMiddleware;
