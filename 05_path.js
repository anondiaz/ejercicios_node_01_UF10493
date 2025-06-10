// Importa el módulo 'path' de Node.js
// Este módulo proporciona utilidades para trabajar con rutas de archivos y directorios
const path = require('node:path');

// Muestra el separador de directorios del sistema operativo
// console.log(path.sep);

// const ruta = "proyecto/css/style.css";
const rutaCSS = path.join("proyecto", "css", "style.css");
console.log(rutaCSS);

console.log(path.dirname(rutaCSS)); // Muestra el directorio del archivo CSS
console.log(path.basename(rutaCSS)); // Muestra el nombre del archivo CSS