const notFound = (req, res, next) => {
  res.status(404);
  const err = new Error(`Page Not found`);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode;
  if (statusCode === 200) {
    statusCode = 500;
  }
  res.status(statusCode);
  res.json({ msg: `${err.message}` });
};

module.exports = { notFound, errorHandler };
