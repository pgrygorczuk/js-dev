const fs = require('fs');

function logMessage(message){
    const datetime = new Date().toLocaleString();
    console.log( `${datetime}> ${message}` );
    fs.appendFile('./log.txt', `${datetime}> ${message}\n`, 'utf-8', (err) => {
        if(err) console.log(err);
    });
}

function log(message){
    return (req, res, next) => {
        logMessage(message);
        next();
    };
}

module.exports = {
    logMessage: logMessage,
    log: log,
};
