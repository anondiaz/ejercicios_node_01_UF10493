// Versión actual de node en ejecución
// console.log(`Versión de Node.js: ${process.versions.node}`);

// Versión del motor V8
// console.log(`Versión de V8: ${process.versions.v8}`);

 // Muestra los argumentos de la línea de comandos
// console.log(process.argv);

// if (process.argv[2] == '1234') {
//     console.log('Has podido entrar');
// } else {
//     console.log('Contraserña incorrecta');
// }

if (process.argv[2] == '--help') {
    console.log('Menú de ayuda');
    console.log('...');
} else {
    console.log('Ejecutar la aplicación');
}

console.log(`Buenos días, ${process.argv[2]} !`);