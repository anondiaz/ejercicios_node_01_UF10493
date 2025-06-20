// Variables de configuración
const http = require ("node:http");
const PUERTO = 8000;

// Levantamos el servidor HTTP
const server = http.createServer((req, res) => {

    let body = '';
    let title = '';

    if(req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        title = 'Inicio';
        body = `<h1>${title}</h1><a href='/contacto'>Ir a la página de contacto</a>`;
        body += `<p>Bienvenido a la página de Inicio.</p>`;
    } else if(req.url === '/contacto') {
        res.writeHead(200, { "Content-Type": "text/html" });
        title = 'Contacto';
        body = `<h1>${title}</h1><a href='/'>Volver a la raíz</a>`;
        body += `<p>Esta es la página de contacto.</p>`;        
    } else {
        res.writeHead(404, { "Content-Type": "text/html"});
        body = `<h1>404 - Página no encontrada</h1>`;
        body += `<a href='/'>Volver a la página de inicio</a>`;
    }


    const html =`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        </head>
    <body>
    ${body}
    </body>
    </html>
    `;

    res.write(html);
    res.end();

});

// Configuramos el servidor para que escuche en el puerto especificado
server.listen(PUERTO, () => {
    console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
}
);
