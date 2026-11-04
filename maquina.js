
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

let dineroIngresado = 5000;

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

let lecheUtilizadaCapuchino = lecheCapuchino * cantidadCapuchinos;
let lecheUtilizadaMocachino = lecheMocachino * cantidadMocachinos;
let lecheUtilizadaCaliente = lecheParaLecheCaliente * cantidadLecheCaliente;

console.log("Dinero ingresado", dineroIngresado)
console.log("Cambio", cambio)
console.log("Dinero insuficiente", dineroInsuficiente)

//estructura de control

//Seleccionar producto

let opcionCafe;

do {
    console.log("1. Capuchino")
    console.log("2. Cafe americáno")
    console.log("3. Mocachino")
    console.log("4. Chocolate caliente")
    console.log("5. Leche caliente")
}

while (opcionCafe < 1 || opcionCafe > 5)
// Valor del producto

let productoSeleccionado = prompt("¿Qué producto deseas? capuchino, americano, mocachino, chocolate o leche");

switch (productoSeleccionado) {
    case "Capuchino":
    console.log("capuchino $" + capuchino)
    break;

switch (productoSeleccionado) {
    case "Americano":
    console.log("Cafe Americáno $" + cafeAmericano);
    break;

switch (productoSeleccionado) {
    case "Mocachino":
    console.log("Mocachino $" + mocachino);
    break;

switch (productoSeleccionado) {
    case "Chocolate Caliente":
    console.log("Chocolate Caliente $" + chocolateCaliente)
    break; 

switch (productoSeleccionado) {
    case "Leche Caliente":
    console.log("Leche caliente $" + lecheCaliente)
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
        console.log("Compra de cafe americáno exitosa, tus vueltas son:", vueltas);
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
        break;
}