export class customErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customErrorHandler) {
    res.status(err.statusCode).send(errMessage);
  } else {
    res.status(500).send("Something went Wrong..try again later!");
  }
  next();
};
