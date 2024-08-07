const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send(`Thank you for your request. Our backend is listening on ${req.app.get('port_number')}`);
});

module.exports = router;