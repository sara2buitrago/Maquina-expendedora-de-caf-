// Productos y precios

const capuchino = 4000;
const cafeAmericano = 3000;
const mocachino = 5000;
const chocolateCaliente = 4000;
const lecheCaliente = 4000;

// Leche utilizada por bebida

const lecheCapuchino = 100;
const lecheMocachino = 100;
const lecheParaLecheCaliente = 200;

// Cantidades en gramos

const gramosCapuchino = 20;
const gramosCafeAmericano = 15;
const gramosMocachino = 20;
const gramosChocolateCaliente = 25;
const gramosLecheCaliente = 20;

let gramosDisponibles = 1000;

// Dinero ingresado

let precio = 0;


// Stock de productos

let stockCapuchino = 15;
let stockCafeAmericano = 15;
let stockMocachino = 15;
let stockChocolateCaliente = 15;
let stockLecheCaliente = 15;

let lecheDisponible = 1000;

// Compra

let productoSeleccionado = "capuchino";
let vueltas = 0;

// Calcular cambio

let cambio = dineroIngresado - 0;
let gramosRestantes = gramosDisponibles - 0;
let lecheRestante = lecheDisponible - 0;

let precioDosCapuchinos = capuchino * 2;
let precioDosCafeAmericano = cafeAmericano * 2;
let precioDosMocachinos = mocachino * 2;
let precioDosChocolateCaliente = chocolateCaliente * 2;
let precioDosLecheCaliente = lecheCaliente * 2;

let cantidadCapuchinos = 0;
let cantidadMocachinos = 0;
let cantidadLecheCaliente = 0;

let lecheUtilizadaCapuchino = lecheCapuchino * cantidadCapuchinos;
let lecheUtilizadaMocachino = lecheMocachino * cantidadMocachinos;
let lecheUtilizadaCaliente = lecheParaLecheCaliente * cantidadLecheCaliente;

let dineroInsuficiente = 0;

let dineroIngresado = Number(prompt("Ingresa el dinero para tu compra"));

console.log("Dinero ingresado", dineroIngresado);
console.log("Cambio", cambio);
console.log("Dinero insuficiente", dineroInsuficiente);

// Estructura de control

// Seleccionar producto


let opcionCafe;

do {
    console.log("1. Capuchino");
    console.log("2. Cafe americano");
    console.log("3. Mocachino");
    console.log("4. Chocolate caliente");
    console.log("5. Leche caliente");

    opcionCafe = Number(prompt("Selecciona una opción del 1 al 5"));

} while (opcionCafe < 1 || opcionCafe > 5);

// Relacionar selección con producto

switch (opcionCafe) {

    case 1:
        productoSeleccionado = "Capuchino";
        break;

    case 2:
        productoSeleccionado = "Americano";
        break;

    case 3:
        productoSeleccionado = "Mocachino";
        break;

    case 4:
        productoSeleccionado = "Chocolate Caliente";
        break;

    case 5:
        productoSeleccionado = "Leche Caliente";
        break;
}

console.log("Producto seleccionado:", productoSeleccionado);

// Valor del producto

productoSeleccionado = prompt("¿Qué producto deseas? Capuchino, Americano, Mocachino, Chocolate Caliente o Leche Caliente");

switch (productoSeleccionado) {
    case "Capuchino":
        console.log("Capuchino $" + capuchino);
        break;

    case "Americano":
        console.log("Cafe Americano $" + cafeAmericano);
        break;

    case "Mocachino":
        console.log("Mocachino $" + mocachino);
        break;

    case "Chocolate Caliente":
        console.log("Chocolate Caliente $" + chocolateCaliente);
        break;

    case "Leche Caliente":
        console.log("Leche caliente $" + lecheCaliente);
        break;
}


// Dinero insuficiente  

switch (productoSeleccionado) {

    case "Capuchino":
        if (dineroIngresado < capuchino) {
            console.log("Dinero insuficiente para comprar capuchino");
        }
        break;

    case "Americano":
        if (dineroIngresado < cafeAmericano) {
            console.log("Dinero insuficiente para comprar cafe americano");
        }
        break;

    case "Mocachino":
        if (dineroIngresado < mocachino) {
            console.log("Dinero insuficiente para comprar mocachino");
        }
        break;

    case "Chocolate Caliente":
        if (dineroIngresado < chocolateCaliente) {
            console.log("Dinero insuficiente para comprar chocolate caliente");
        }
        break;

    case "Leche Caliente":
        if (dineroIngresado < lecheCaliente) {
            console.log("Dinero insuficiente para comprar leche caliente");
        }
        break;

    default:
        console.log("Producto no válido");
        break;
}

// COMPRA EXITOSA

switch (productoSeleccionado) {
    case "Capuchino":
        vueltas = dineroIngresado - capuchino;
        console.log("Compra de capuchino exitosa, tus vueltas son:", vueltas);
        break;

    case "Americano":
        vueltas = dineroIngresado - cafeAmericano;
        console.log("Compra de cafe americano exitosa, tus vueltas son:", vueltas);
        break;

    case "Mocachino":
        vueltas = dineroIngresado - mocachino;
        console.log("Compra de cafe mocachino exitosa, tus vueltas son:", vueltas);
        break;

    case "Chocolate Caliente":
        vueltas = dineroIngresado - chocolateCaliente;
        console.log("Compra de chocolate caliente exitosa, tus vueltas son:", vueltas);
        break;

    case "Leche Caliente":
        vueltas = dineroIngresado - lecheCaliente;
        console.log("Compra de leche caliente exitosa, tus vueltas son:", vueltas);
        break;

    default:
        console.log("Producto no válido");
        break;
}



// mensaje de compra exitosa

let mensaje = "Gracias por tu compra, vuelve pronto";
console.log(mensaje); 