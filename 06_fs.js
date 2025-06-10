const fs = require('node:fs');
// console.log(fs);

let texto = 'En un lugar de la mancha ';
texto += 'de cuyo nombre no quiero acordarme ';


fs.writeFileSync('prueba.txt', texto, 'utf-8');

let texto2 = 'no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. \n';
texto2 += 'Una olla de algo más vaca que carnero, salpicón las más noches, algún palomino de añadidura los sábados, algún ducatillo de cuando en cuando los viernes, algún palomino de añadidura los sábados, algún ducatillo de cuando en cuando los viernes.';
// fs.appendFileSync('prueba.txt', texto2, 'utf-8');

const textoCompleto = fs.readFileSync('pruebas.txt', 'utf-8', (err) => {     
    if (err) throw err;
    console.log("Texto leído correctamente:");
});
console.log(textoCompleto);
