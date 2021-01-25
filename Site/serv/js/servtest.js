var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    console.log('request ', request.url);
    
    var filePath = '..'+ request.url;
    if (filePath == '../') {
        filePath = '../html/index.html';
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    console.log(extname);
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';
    if (filePath != '../html/index.html')
    {switch (extname) {case '.html' : filePath = '../html'+ request.url; break;}}

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        } 
    });

    

}).listen(8066);
console.log('Server running at http://127.0.0.1:8066/');