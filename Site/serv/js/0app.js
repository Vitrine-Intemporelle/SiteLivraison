var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var querystring = require('querystring');
var rl = require('readline-sync');


http.createServer(function (request, response) {
    console.log('request ', request.url);

		// parsing URL
		var myURL = url.parse(request.url);
		var myURLQuery = querystring.parse(myURL.query);
		
		if (myURLQuery.name != null && myURLQuery.email != null && myURLQuery.tel != null && myURLQuery.desc != null)
		{
			// parsing JSON
			var filename = "../json/data.json";
			var rawd = fs.readFileSync(filename);
			var data = JSON.parse(rawd);
		
				var form = [];
				form[0] = myURLQuery.name;
				form[1] = myURLQuery.email;
				form[2] = myURLQuery.tel;
				form[3] = myURLQuery.desc;
				
						//push data
							data.sheet.push({Name : form[0], Email : form[1], Phone : form[2], Text : form[3]});
						var input = JSON.stringify(data, undefined, 4);
						fs.writeFileSync(filename, input);
	
		}
    var filePath = '..'+ request.url;
    if (filePath == '../')
	{
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
                fs.readFile('../html/index.html', function(error, content) {
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

}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');