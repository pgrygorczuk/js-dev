const fs = require('fs');

function logMessage(message){
    const datetime = new Date().toLocaleString();
    console.log( `${datetime}> ${message}` );
    fs.appendFile('./log.txt', `${datetime}> ${message}\n`, 'utf-8', (err) => {
        if(err) console.log(err);
    });
}

function logDebug(req){
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const message = `${req.ip} ${req.method} ${fullUrl}`;
    logMessage(message);
}

function log(message){
    return (req, res, next) => {
        logMessage(message);
        if(req.query.debug){
            logDebug(req);
        }
        next();
    };
}

module.exports = {
    logMessage: logMessage,
    log: log,
};
