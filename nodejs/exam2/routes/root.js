const express = require('express');
const router  = express.Router();

// GET /
router.get("/", (req, res, next) => {

    if(req.session.loggedin){
        res.send('Welcome ' + req.session.username + '!');
    }
    else{
        res.send('It works!');
    }
    next();

});

module.exports = router;
