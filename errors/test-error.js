module.exports = TestError;

function TestError(message, reason) {

    this.name = 'TestError';
    this.message = message;

    if (reason)
        this.reason = reason;
}

TestError.prototype = Error.prototype;