const express = require('express');
const router  = express.Router();
const { Categories } = require('../models');

// ---------------------------------------------------------------------------
// GET /categories
router.get("/", (req, res, next) => {

    Categories.findAll()
    .then( data => {
        res.json(data);
        next();
    })
    .catch( err => {
        next(err);
    });

});

// ---------------------------------------------------------------------------
// GET /categories/:categoryId
router.get("/:categoryId", (req, res, next) => {

    Categories.findOne({
        include: [Users, Categories, Tags],
        where: { id: req.params.categoryId }
    })
    .then( data => {
        res.json(data);
        next();
    })
    .catch( err => {
        next(err);
    });

});


module.exports = router;
