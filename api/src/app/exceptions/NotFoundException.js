class NotFoundException {
  constructor(message) {
    this.status = 404;
    this.message = message;
  }
}

export default NotFoundException;
