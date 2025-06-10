// const pizza = [
//     {'nombre': "Cuatro quesos", 'precio': 12.75},
//     {'nombre': "Margarita", 'precio': 10.50},
//     {'nombre': "Napolitana", 'precio': 11.20}
// ]

// Metodo 1

const fs = require('node:fs');
const pizzas = fs.readFileSync('pizzas.js', 'utf-8');

// console.log(pizzas);
// console.log(typeof(pizzas));
// Convertimos el string a un objeto JSON
const pizzasJson = JSON.parse(pizzas);

// console.log(pizzasJson);
// console.log(typeof(pizzasJson));
// console.log(pizzasJson[1]['nombre']);
// ===
// console.log(pizzasJson[1].nombre);

let menu = "\n\n\tNode's pizzas\n";
menu += "\t" + "-".repeat(menu.length - 1) + "\n";
// pizzasJson.forEach((pizza, index) => {
//     menu += '   ' +`${index + 1}. ${pizza.nombre} - ${pizza.precio}€\n`;
// });

for (let i = 0; i < pizzasJson.length; i++) {
    menu += '   ' +`${i + 1}. ${pizzasJson[i].nombre} - ${pizzasJson[i].precio}€\n`;
}

menu += "\n\nElige tu opción:\n"
// console.log(menu);

// Cuando se introduzca 08_pizzeria_1.js X, el mensaje será:
// Has elegido la opción X, que es una pizza de nombre Y y precio Z€.
const pizzaElegida = process.argv[2];

if (!pizzaElegida || isNaN(pizzaElegida) || pizzaElegida < 1 || pizzaElegida > pizzasJson.length) {
    // console.error('Por favor, elige una opción válida entre 1 y ' + pizzasJson.length);
    console.log(menu);
    process.exit(1);
} else {
    const pizzaSeleccionada = pizzasJson[pizzaElegida -1];
    // console.log(pizzaSeleccionada);
    console.log("\nHas elegido la opción " + pizzaElegida + ", que es una pizza " + pizzaSeleccionada.nombre);
    console.log("\nTu cuenta es de : " + pizzaSeleccionada.precio + "€\n");
}
// fs.writeFileSync('menu.txt', menu, 'utf-8');