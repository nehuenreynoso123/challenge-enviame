function error(message, statusCode) {
    let e = new Error(message)
    if (statusCode) e.statusCode = statusCode
    return e
}

module.exports=error;