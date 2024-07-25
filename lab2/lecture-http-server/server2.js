const http = require('http');

http.createServer(function(request, response) {
    console.log(request.url);

    let baseUrl = 'http://' + request.headers.host + '/';
    let url = new URL(request.url, baseUrl);

    let params = url.searchParams;
    console.log(params);

    let responseStr = `Hi ${params.get('name')} you are ${params.get('age')} years old and you live in ${params.get('city')}`
    response.end(responseStr);
}).listen(8080);

// http://localhost:8080/?name=Jenul&age=20&city=Melbourne