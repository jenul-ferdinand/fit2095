const http = require('http');
const fs = require('fs');

// Create the server with given callback function
// With every incoming request, the callback function will be invoked.
http.createServer(function(request, response) {
    console.log(request.url);

    // Routing based on path name
    let fileName = '';
    if (request.url !== '/favicon.ico') {
        if (request.url === '/') { fileName = 'index.html'; }
        else if (request.url === '/unit/code') { fileName = 'unitcode.html'; }
        else if (request.url === '/unit/name') { fileName = 'unitname.html'; } 
        else { fileName = '404.html'; }

        fileName = './views/' + fileName;
        fs.readFile(fileName, function(error, content) {
            response.write(content);
            response.end();
        });
    } else { 
        response.write('Thank you... We got your request');
        response.end();
    }
}).listen(8080);

