class errResponse {
  constructor(statusCode, error) {
    let statusName;
    switch (statusCode) {
      case 500:
        statusName = "Internal Server Error";
        break;
      case 404:
        statusName = "Not Found";
        break;
      case 400:
        statusName = "Bad Request";
        break;
    }
    this.code = statusCode;
    this.status = statusName;
    this.error = {
      name: error.name,
      details: error.message,
      stack: [error.stack],
    };
  }
}

module.exports = errResponse;
