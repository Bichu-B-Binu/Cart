const notFound = (req, res, next) => {
  const error = new Error(`NOT Found =${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError") {
    statusCode = 404;
    message = "Resourse not found";
  }
  res.status(statusCode).json({
    massage: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
export { errorHandler, notFound };
