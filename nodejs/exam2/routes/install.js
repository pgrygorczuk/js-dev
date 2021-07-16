const express = require('express');
const router  = express.Router();
const db = require('../config/database.js');
const { sequelize, Ads, Users, Categories, Tags } = require('../models');

// /install
router.route("/").get(async (req, res, next) => {

    try{
        // Create first user - superadmin.
        await Users.findOrCreate({
            where: {id: 1},
            defaults: {
                name: 'admin',
                email: 'admin.user@gmail.com',
                password: 'secret',
            },
        });
        await Users.findOrCreate({
            where: {id: 2},
            defaults: {
                name: 'user1',
                email: 'user1@gmail.com',
                password: 'secret',
            },
        });
        await Users.findOrCreate({
            where: {id: 3},
            defaults: {
                name: 'user2',
                email: 'user2@gmail.com',
                password: 'secret',
            },
        });
        
        // Create example categories.
        await Categories.findOrCreate({
            where: {id: 1},
            defaults: { name: 'Motoryzacja' },
        });
        await Categories.findOrCreate({
            where: {id: 2},
            defaults: { name: 'Kosmos' },
        });
        await Categories.findOrCreate({
            where: {id: 3},
            defaults: { name: 'Szkoła' },
        });

        // Create example tags.
        await Tags.findOrCreate({
            where: {id: 1},
            defaults: { name: 'samochód' },
        });
        await Tags.findOrCreate({
            where: {id: 2},
            defaults: { name: 'skuter' },
        });
        await Tags.findOrCreate({
            where: {id: 3},
            defaults: { name: 'pojazd' },
        });
        await Tags.findOrCreate({
            where: {id: 4},
            defaults: { name: 'luneta' },
        });

        // Create ads.
        await Ads.findOrCreate({
            where: {id: 1},
            defaults: {
                title: "Luneta obserwacyjna",
                description: "Luneta z soczewką obiektywową o dużym powiększeniu jest idealna do obserwowania zarówno dużych, jak i bardzo odległych obiektów.",
                price: 790.0,
                user_id: 1,
            },
        });
        await Ads.findOrCreate({
            where: {id: 2},
            defaults: {
                title: "Skuter Elektryczny BILI BIKE HAWK",
                description: "Pozwala legalnie poruszać się po drogach publicznych.",
                price: 5999.0,
                user_id: 1,
            },
        });
        
        const dt = "'2021-06-02 12:02:57.591 +00:00'";
        sequelize.query(
            `INSERT OR IGNORE INTO ads_categories(ad_id, category_id, created_at, updated_at)
            VALUES(1, 2, ${dt}, ${dt}), (1, 3, ${dt}, ${dt}), (2, 1, ${dt}, ${dt})`)
        .then(items => {
            console.log(items);
        })
        .catch(err => {
            console.log(err);
        });

        sequelize.query(
            `INSERT OR IGNORE INTO ads_tags(ad_id, tag_id, created_at, updated_at)
            VALUES(1, 4, ${dt}, ${dt}), (2, 2, ${dt}, ${dt}), (2, 3, ${dt}, ${dt})`)
        .then(items => {
            console.log(items);
        })
        .catch(err => {
            console.log(err);
        });

    }
    catch(err){
        res.send( "Can't insert example data." );
        next(err);
    };

    res.send( 'Example data added.' );
    next();
});

module.exports = router;
