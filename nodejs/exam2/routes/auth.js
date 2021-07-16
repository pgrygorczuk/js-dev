const express = require('express');
const router  = express.Router();
const { Users } = require('../models');

// ---------------------------------------------------------------------------
// GET /auth
router.post("/", (req, res, next) => {

    const username = req.body.username;
    const password = req.body.password;

    if(username && password){
        Users.findOne({
            where: {
                name: username,
                password: password,
            },
        })
        .then( user => {
            req.session.loggedin = true;
            req.session.username = user.name;
            req.session.userid = user.id;
            res.redirect('/');
            next();
        })
        .catch( err => {
            res.status(403).send('Incorrect Username and/or Password!');
            next(err);
        });
    }
    else{
        res.status(403).send('Please enter Username and Password!');
        next();
    }

});

// ---------------------------------------------------------------------------
// GET /auth/logout
router.get("/logout", (req, res, next) => {

    if(req.session.loggedin){
        req.session.destroy();
        res.send('You are logged out.');
        next();
    }
    else{
        res.send('You are not logged in.');
        next();
    }

});

module.exports = router;
