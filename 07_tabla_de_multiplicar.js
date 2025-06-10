// El usuario introducirá en el terminal un texto así
// node 07_tabla_de_multiplicar.js 5
// El valor final es el número del cual realizaremos
// la tabla de multiplicar del 1 al 10
// Esta tabla la guardaremos en un fichero llamado:
// tabla_de multiplicar del_X <- X es el número

// La salida seria así:
// Tabla de multiplicar del 5
// =============
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

const fs = require('node:fs');

const numero = process.argv[2];
const multIni = process.argv[3];
const multFin = process.argv[4];

// const lenArray = process.argv.length

// if (lenArray == 2) {
//     console.log("Falta el numero para multiplicar");
// } else if (lenArray == 3) {
//     console.log("Falta los números Inicio y fin de la multiplicación");
// } else {

// }

if (!numero || isNaN(numero)) {
    console.error('Por favor, introduce un número válido como argumento.');
    process.exit(1);
}

if (!multIni || isNaN(multIni)) {
    console.error('Por favor, introduce un número válido como multiplicador mínimo.');
    process.exit(1);
}

if (!multFin || isNaN(multFin)) {
    console.error('Por favor, introduce un número válido como multiplicador máximo.');
    process.exit(1);
}

const nombreFichero = `tabla_de_multiplicar_del_${numero}.txt`;
let texto = `Tabla de multiplicar del ${numero}:\n`;
// console.log(texto.length);
texto += "=".repeat(texto.length -1);
for (let i = multIni; i <=multFin; i++) {
    texto += `\n\t${numero} x ${i} = ${numero * i}`;
}

// texto += "=".repeat(texto.length -1);

fs.writeFileSync(nombreFichero, texto, 'utf-8');

