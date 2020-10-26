var http = require('http');
const { request } = require('https');
fs = require('fs');

http.createServer(function(solicitud, respuesta) {
    respuesta.writeHead(200, { 'Content.Type': 'text/html' });

    var url = solicitud.url;
    var metodo = solicitud.method;
    var header = solicitud.headers;
    var estado = solicitud.statusCode;

 if (url === '/contacto' && metodo === "POST") {
        var html = fs.readFileSync('./confirmacion.html');
        respuesta.write(html);
        respuesta.end;
    } else {
        var html = fs.readFileSync('./error.html');
        respuesta.write(html);
        respuesta.end;
    }
}).listen(8080, function() {
    console.log('servidor iniciado');

});