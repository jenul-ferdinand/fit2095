let express = require('express');
let router = express.Router();

// Let's practice some QUERY STRINGS with express
router.get('/details', function (req, res) { 
    let name = req.query.name;
    let age = req.query.age;
    let city = req.query.city;
    let count = parseInt(req.query.count);
    let msg = `<h1>Hi... ${name} you are ${age} years old, and you live in ${city}</h1>`;

    for (let i = 0; i < count; i++) {
        msg += 'Thank you!!! </br>'
    }

    res.send(msg);
});

router.get('/allocate', function (request, response) {
    let name = request.query.name;
    let msg = `<h1>We allocated driver ${name}</h1>`
    response.send(msg);
});

module.exports = router;