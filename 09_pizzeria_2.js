// Mostrar el menú, pero hay que especificar por una parte:
// -- los dos tipos de masa
// Por otra que solo se pueden elegir 4 ingredientes
// 9_pizzeria_2.js 2 3 4 5 6
// Has elegido la masa normal y los ingredientes: tomate, champiñones, mozzarella y pepperoni.
// El precio es de 16.5€.

const ingredientes = require('./ingredientes.js');
// console.log(ingredientes);
// console.log (process.argv.length)
if (process.argv.length < 7) {
   
    let menu = "\n\n\tNode's pizzas menú\n";
    menu += "\t" + "-".repeat(menu.length - 1) + "\n";
    // pizzasJson.forEach((pizza, index) => {
    //     menu += '   ' +`${index + 1}. ${pizza.nombre} - ${pizza.precio}€\n`;
    // });
    menu += "Masas\n\n";
    for (let i = 0; i < ingredientes.length; i++) {
        if (i <= 1) {
            menu += `\t${i + 1}. Masa ${ingredientes[i].ingrediente} - ${ingredientes[i].precio}€\n`;
        }
    }

    menu += "\nIngredientes(Elegir 4)\n\n";
    for (let i = 0; i < ingredientes.length; i++) {
        if (i >= 2) {
        menu += `\t${i + 1}. ${ingredientes[i].ingrediente} - ${ingredientes[i].precio}€\n`;
        }
    }

    menu += "\n\nElige tus opciones, 1 masa y 4 ingredientes:\n"

    console.log(menu);

    process.exit(1);

} else if (process.argv.length > 7) {
    console.log("Has introducido más de 4 ingredientes, por favor, elige 4 ingredientes.");
    process.exit(1);
} else {
    const masaElegida = process.argv[2];    
    const ingredientesElegidos = process.argv.slice(3, 7); // Tomamos los siguientes 4 argumentos
    if (!masaElegida || isNaN(masaElegida) || masaElegida < 1 || masaElegida > 2) {
        console.error('Por favor, elige una masa válida en el menú numeros 1 y 2');
        process.exit(1);
    }
    if (ingredientesElegidos.length < 1 || ingredientesElegidos.length > 4){
        console.log("Debes elegir 4 ingredientes");
        process.exit(1);
    }
    let precioTotal = ingredientes[masaElegida - 1].precio; // Masa elegida
    // console.log(masaElegida);
    // console.log(ingredientesElegidos);
    let ingredientesSeleccionados = [];
    ingredientesElegidos.forEach((ingrediente) => {
        if (!isNaN(ingrediente) && ingrediente >= 3 && ingrediente <= ingredientes.length) {
            ingredientesSeleccionados.push(ingredientes[ingrediente - 1].ingrediente);
            precioTotal += ingredientes[ingrediente - 1].precio;
        } else {
            console.log(`El ingrediente ${ingrediente} no es válido.`);
            console.log(`Debes elegir un número entre 3 y ${ingredientes.length} para los ingredientes.`);
            process.exit(1);
        }
    })
    
    
    primerosIngredientes = ingredientesSeleccionados.slice(0, 3);
    ultimoIngrediente = ingredientesSeleccionados[3];
    console.log(`\nHas elegido la masa ${ingredientes[masaElegida - 1].ingrediente} y los ingredientes: ${primerosIngredientes.join(', ')} y ${ultimoIngrediente}.`);
    console.log("El precio es de " + precioTotal.toFixed(2) + "€.\n");

}
