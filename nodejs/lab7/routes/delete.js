const express = require('express');
const router  = express.Router();

let posts = require('./posts.js');

router.route("/:id").delete((req, res) => {
    if( req.params.id in posts ){
        posts.splice(req.params.id, 1);
        res.send('User has been deleted.');
    }
    else{
        res.status(400).send('User not found.');
    }
});

module.exports = router;
