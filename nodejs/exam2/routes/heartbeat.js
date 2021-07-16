const express = require('express');
const router  = express.Router();

// GET /heartbeat
router.get("/", (req, res, next) => {
    res.send(new Date().toLocaleTimeString());
    next();
});

module.exports = router;
