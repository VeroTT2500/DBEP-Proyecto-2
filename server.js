const http = require('http');
const fs = require('fs');
//HTTP => (request, response)

http.createServer((request, response)=> {
    const file = request.url == '/' ? './Concesionario/pagina_inicio.html':`./Concesionario${request.url}`;
    fs.readFile(file, (err, data)=>{ 
        if(err) {
            response.writeHead(400, {"Content-Type":"Text/plain"});  
        response.write("Not found");
        response.end();
        } else {
            const ext = request.url== '/' ? "html" : request.url.split(".").pop();
            switch (ext) {
                case 'html':
                    response.writeHead(200, {"Content-Type":"Text/html"}); 
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

}).listen(8888, () => {
    console.log ('Servidor corriendo en http://localhost:8888');
});http
    