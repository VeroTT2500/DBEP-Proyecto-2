const http = require('http'); //Permite usar un módulo como una librería, como usar import, del lado de servidores se ve require, del lado del cliente se usa import
const fs = require('fs');
//HTTP => (request, response)

http.createServer((request, response)=> {
    const file = request.url == '/' ? './WWW/index.html':`./WWW${request.url}`;
    fs.readFile(file, (err, data)=>{ //Archivo, función flecha que indique instrucciones
        if(err) {
            response.writeHead(400, {"Content-Type":"Text/plain"});  //writeHead Dice el código de estatus con el que quiero contestar y el content-type
        response.write("Not found");
        response.end();
        } else {
            const ext = request.url== '/' ? "html" : request.url.split(".").pop();
            switch (ext) {
                case 'html':
                    response.writeHead(200, {"Content-Type":"Text/html"});  //writeHead Dice el código de estatus con el que quiero contestar y el content-type
                break;
                case 'css':
                    response.writeHead(200, {"Content-Type":"Text/css"});
                break;
                default:
                    response.writeHead(200, {"Content-Type":"Text/plain"});
            }
       
        response.write(data);
        response.end();
    }}); 

}).listen(8888);http