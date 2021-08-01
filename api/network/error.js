const response = require("./response");

function errors(err, req, resp, next) {
  const message = err.message || "Error internal";
  const status = err.statusCode || 500;

  response.error(req, resp, message, status);
}

module.exports = errors;