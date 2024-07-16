import BadRequestError from "../errors/BadRequestError.js";

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
  if (error instanceof BadRequestError) {
    return true;
  }

  return false;
}

export default errorMiddleware;
