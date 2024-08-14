const getId = (req)=>{
    return req.url.split("/")[2];
}

/**
 * @param req - The request object to the server
 * @returns {*}
 * @example urlWithId(req);
 */
const urlWithId = (req)=>{
    return req.url.match(/\/product\/(\d+)/)
}
module.exports = {
    getId,
    urlWithId
}