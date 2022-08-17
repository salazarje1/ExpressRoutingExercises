class ExpressError extends Error {
  constructor(msg, status=500){
    super();
    this.msg = msg;
    this.status = status;
  }
}

module.exports = ExpressError; 