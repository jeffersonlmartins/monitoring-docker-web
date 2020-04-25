class BadRequestException {
  constructor(message) {
    this.status = 400;
    this.message = message;
  }
}

export default BadRequestException;
