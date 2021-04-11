const express = require('express');
const router  = express.Router();

let posts = require('./posts.js');

router.route("/").post((req, res) => {
    const id = posts.length + Date.now();
    if(req.body){
        posts.push( {id: id, ...req.body} );
        res.json(posts);
    }
});

module.exports = router;
