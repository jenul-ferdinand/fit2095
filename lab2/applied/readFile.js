fs = require('fs');

function readFile(fileName) {

    fs.readFile(fileName, function(error, content) {

        if (error) {
            console.log('Sorry we got an error...');
        } else {
            console.log(content.toString());
        }
        
    });

}

readFile('./data.txt');


// let only stores the value in the current scope
// var is function scope
// const stores a constant value that cannot be changed