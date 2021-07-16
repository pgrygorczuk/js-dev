require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app     = express();
const logger  = require('./logger.js');
const db      = require('./config/database.js');
const app_use = (url, path) => app.use(url, require("./routes/"+path));

// This is a built-in middleware function in Express. It parses incoming requests with
// JSON payloads and is based on body-parser.
app.use(express.json());

app.use(session({
	secret: process.env.session_secret,
	resave: true,
	saveUninitialized: true,
}));

// This is my own middleware.
app.use( logger.log('Request received.') );

app_use("/ads/search", "ads-search.js"  );
app_use("/ads"       , "ads.js"         );
app_use("/categories", "categories.js"  );
app_use("/install"   , "install.js"     );
app_use("/heartbeat" , "heartbeat.js"   );
app_use("/auth"      , "auth.js"        );
app_use("/"          , "root.js"        );

app.all("*", (req, res, next) => {
    if(!res.headersSent){
        res.status(404).sendFile(__dirname + '/static/404.png');
    }
});

app.use( logger.log('Response sent.') );

const port = process.env.port || 4700;
app.listen(port, () => {
    logger.logMessage('Server started.');
    db.sync().then( () => {
        logger.logMessage('Database synced.');
    }).catch( (err) => {
        logger.logMessage(err);
    });
}).on('error', err => {
    logger.logMessage(err);
});
