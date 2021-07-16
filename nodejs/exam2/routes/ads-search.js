const express = require('express');
const router  = express.Router();
const Sequelize = require('sequelize');
const { sequelize, Ads, Users, Categories, Tags } = require('../models');

// ---------------------------------------------------------------------------
// GET /ads/search
router.get("/", (req, res, next) => {

    // Cannot set headers after they are sent to the client.
    
    let body = req.body;
    // Build LIKE query.
    for( [key, value] of Object.entries(body) ){
        body[key] = { [Sequelize.Op.like]: '%' + body[key] + '%' }
    }

    Ads.findAll({
        where: body,
    })
    .then( ads => {
        res.status(200).json(ads);
        next();
    })
    .catch( err => {
        next(err);
    });

});

// ---------------------------------------------------------------------------
// GET /ads/search/price/:min/:max
router.get("/price/:min/:max", (req, res, next) => {

    console.log(req.params.min, req.params.max);

    Ads.findAll({
        where: {
            price: {
                [Sequelize.Op.between]: [ req.params.min, req.params.max ? req.params.max : 999999 ],
            }
        },
    })
    .then( ads => {
        res.status(200).json(ads);
        next();
    })
    .catch( err => {
        next(err);
    });

});

module.exports = router;
