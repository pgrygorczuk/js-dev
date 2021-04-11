const express = require('express');
const router  = express.Router();

let posts = require('./posts.js');

router.route("/").get((req, res) => {
    res.json(posts);
});

module.exports = router;
