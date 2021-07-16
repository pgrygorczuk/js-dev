const express = require('express');
const router  = express.Router();
const { Ads, Users, Categories, Tags } = require('../models');

// ---------------------------------------------------------------------------
// GET /ads
router.get("/", (req, res, next) => {

    Ads.findAll({ include: [Users, Categories, Tags] })
    .then( ads => {
        res.status(200).json(ads);
        next();
    })
    .catch( err => {
        next(err);
    });

});

// ---------------------------------------------------------------------------
// GET /ads/show/:adId
router.get("/show/:adId", (req, res, next) => {

    Ads.findOne({
        include: [Users, Categories, Tags],
        where: { id: req.params.adId }
    })
    .then( item => {
        res.status(200).json(item);
        next();
    })
    .catch( err => {
        next(err);
    });

});

// ---------------------------------------------------------------------------
// PUT /ads/:adId
router.put("/:adId", (req, res, next) => {

    Ads.checkPerms( req.session.userid, req.params.adId )
    .then(result => {
        if(!result){
            res.status(403).send("You have no rights to modify or ID doesn't exist.");
            next();
        }
        else{
            Ads.update(
                req.body,
                { where: { id: req.params.adId } },
            ).then(item => {
                res.status(200).json(req.body);
                next();
            }).catch(err => {
                next(err);
            });
        }
    });

});

// ---------------------------------------------------------------------------
// POST /ads
router.post("/", (req, res, next) => {

    Ads.create({
        ...req.body
    }).then(item => {
        res.status(201).json(item);
        next();
    }).catch( err => {
        next(err);
    });

});

// ---------------------------------------------------------------------------
// DELETE /ads/:adId
router.delete("/:adId", (req, res, next) => {

    Ads.checkPerms( req.session.userid, req.params.adId )
    .then(result => {
        if(!result){
            res.status(403).send('You have no rights to delete.');
            next();
        }
        else{
            Ads.destroy({
                where: { id: req.params.adId }
            }).then( (rowDeleted) => {
                res.status(200).json(rowDeleted);
            }).catch( err => {
                next(err);
            });
        }
    });

});

module.exports = router;
