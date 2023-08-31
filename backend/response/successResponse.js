class Response {
  constructor(statusCode, data, statusMessage) {
    let message;
    if (statusCode < 400) {
      message = "Ok";
    } else {
      message = "Not Ok";
    }

    let statusName;
    if (data) {
      statusName = data;
    } else {
      switch (statusCode) {
        case 200:
          statusName = "Success";
          break;
        case 201:
          statusName = "Created";
          break;
        case 400:
          statusName = "Bad Request";
          break;
        case 404:
          statusName = "Not Found";
          break;
        case 401:
          statusName = "Unauthorized";
          break;
        case 403:
          statusName = "Forbidden";
          break;
      }
    }
    this.statusCode = statusCode;
    this.data = statusName;
    this.statusMessage = message;
  }
}

module.exports = Response;
