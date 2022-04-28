const HttpStatusCode = require("./HttpStatusCode.js")

class BaseError extends Error{

    name=""
    httpCode=-1
    isOperational=false

    /**
     * - Construction of BaseError
     * @param {string} name - Name of error
     * @param {HttpStatusCode} httpCode - Error code
     * @param {boolean} isOperational - Whether this error is operational error or programmable error
     * @param {string} description - Description of this error
     */
    constructor(name, httpCode, isOperational, description){
        super(description)
        Object.setPrototypeOf(this, new.target.prototype);

        this.name = name
        this.httpCode = httpCode
        this.isOperational = isOperational

        Error.captureStackTrace(this)
    }
}

class Http400Error extends BaseError{
    constructor(description = "bad request"){ //Dekho agar jyada parameters ka zaroorat hoga, to usko default banake isme daal dena. Just like Http500 internal error wala
        super("NOT FOUND", HttpStatusCode.BAD_REQUEST, true, description);
    }
}

//free to extend the BaseError
class Http500Error extends BaseError {
    constructor(description = 'internal server error') {
      super("INTERNAL_SERVER", HttpStatusCode.INTERNAL_SERVER, true, description);
    }
}

class Http401Error extends BaseError{
    constructor(description = "unauthorized"){
        super("UNAUTHORIZED", HttpStatusCode.UNAUTHORIZED, true, description);
    }
}

class Http403Error extends BaseError{
    constructor(description = "forbidden"){
        super("FORBIDDEN", HttpStatusCode.FORBIDDEN, true, description);
    }
}

class Http409Error extends BaseError{
    constructor(description = "conflict"){
        super("CONFLICT", HttpStatusCode.CONFLICT, true, description);
    }
}

module.exports = {
    BaseError,
    Http400Error,
    Http401Error,
    Http403Error,
    Http409Error
}