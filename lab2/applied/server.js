let http = require('http');
let fs = require('fs');

http.createServer(function (request, response) {

    const url = new URL(request.url, `http://${request.headers.host}`);
    var fileName = '';
    switch (url.pathname) {
        case '/':
            fileName = './views/index.html';
            break;

        case '/assessments':
            fileName = './views/assessments.html';
            break;
        
        case '/topics':
            fileName = './views/topics.html';
            break;

        case '/run':
            q = url.searchParams;
            n1 = parseInt(q.get('n1'));
            n2 = parseInt(q.get('n2'));
            opt = q.get('opt');
            
            let result;
            switch (opt) {
                case 'add':
                    result = n1 + n2;
                    break;
                case 'sub':
                    result = n1 - n2;
                    break;
                case 'multi':
                    result = n1 * n2;
                    break;
                case 'div':
                    result = n1 / n2;
                    break;
                default:
                    result = 'error';
                    break;
            }

            msg = `... ${result}`;
            response.end(msg);
            return;

        case '/date':
            q = url.searchParams;
            day = parseInt(q.get('day'));
            month = parseInt(q.get('month'));
            year = parseInt(q.get('year'));
            result = getDaysDiff(day, month, year);
            msg = `The days since sem 2 start: ${result}`;
            response.end(msg);
            return;

        default:
            return; // If a request with unknown pathname arrives, simply ignore it.
    }

    fs.readFile(fileName, function(error, content) {
        if (error) {
            console.log('Sorry there was an error...');
        }
            
        response.end(content);
    });
}).listen(8080);

console.log('Server running at port 8080');

/**
 * Get days difference
 * @param {day} d 
 * @param {month} m 
 * @param {year} y 
 * @returns week number since August 3,2020; returns -1 if the input is before 3rd of August 2020
 */
function getDaysDiff(d, m, y) {
    let returnValue = -1;
    let currentDay = new Date();
    currentDay.setDate(parseInt(d));
    currentDay.setMonth(parseInt(m) - 1); // months start from 0
    currentDay.setYear(parseInt(y));

    let firstDay = new Date(2023,6,24); // first day in semester 2

    if (currentDay >= firstDay) {
        var diffDays = parseInt((currentDay - firstDay) / (1000 * 60 * 60 * 24)); //gives day difference 
        returnValue = (Math.floor(diffDays / 7) + 1);
    }
    return (returnValue);
}

