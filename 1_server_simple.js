const http = require("node:http");
// console.log(http); // Muestra el módulo http // El módulo http nos permite crear un servidor HTTP en Node.js

//La petición = request -> req
//La respuesta = response -> res

// Asignamos un puerto para el servidor
const PUERTO = 8000;
const css = `
<style>
h1 {
    color: red;
    font-family: Arial, sans-serif;
    font-size: 2rem;
}
</style>
`

// Creamos un servidor HTTP
const server = http.createServer((req, res) => {
    // console.log(res.statusCode);
    if(req.url === "/") {
        // res.writeHead(200, { "Content-Type": "text/plain" });
        // res.end("¡Hola, mundo!");
        // console.log("Estamos en la ruta raiz");
        res.writeHead(200, { "Content-Type": "text/html", "Charset": "UTF-8"
                         });
        res.write(`${css}<h1>Todo Ok, estamos en la raiz del proyecto</h1>`);   
        res.write("<a href='/about'>Ir a la página de información</a>");
        res.end();
    }
    else if(req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html", "Charset": "UTF-8" });
        res.write("Esta es la página de información.");
        res.write(`<br>`);
        res.write("<a href='/'>Ir a la página de inicio</a>");
        res.end();
    }
    else {
        console.log(res.statusCode);
         res.writeHead(404, { "Content-Type": "text/html", "Charset": "UTF-8" });
         res.write(`${css}<h1>404 - Página no encontrada</h1>`);
         res.write("<a href='/'>Volver a la página de inicio</a>");
         res.end();
         return;
    }
});

// Configuramos el servidor
server.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});

