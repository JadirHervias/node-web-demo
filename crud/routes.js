
var http = require("http");
 
var fs   = require("fs");

http.createServer(function(request, response){

    response.writeHead(200, {'Content-Type': 'text/html'});
 
    switch(request.url){
        case '/':
            page = "index.html";
            break;
        case '/nosotros':
            page = "index.html";
            break;
        default:
            page = "index.html";
            break;
    }
     
    fs.readFile("../templates/"+page, function(error, data){
        response.write(data);
        response.end();
    });
 
}).listen(8081, 'localhost');
 
console.log("Servidor funcionando en http://localhost:8081");

