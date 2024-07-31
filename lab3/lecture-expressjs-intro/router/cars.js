let express = require('express');
let router = express.Router();

// ROUTE PARAMETERS (this is different to search parameters)
// Adding a new car...
router.get('/addnew/:maker/:model', function (request, response) {
    let maker = request.params.maker;
    let model = request.params.model;
    let msg = `<h1>The car ${maker} with model ${model}</h1>`;
    response.send(msg);
});

router.get('/show/:id', function (request, response) {
    let id = request.params.id;
    let model = request.params.model;
    let msg = `<h1>The car with ID ${id} is recieved</h1>`;
    response.send(msg);
});

module.exports = router;
