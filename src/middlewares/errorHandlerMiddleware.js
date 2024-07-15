function errorMiddleware(err, request, response, next) {
  console.error(err);

  const error = {
    code: 500,
    type: "Internal Error",
    message: err.message,
  };

  return response.status(500).json(error);
}

export default errorMiddleware;
