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

let cambio = 0;
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
let dineroIngresado = 0;

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

// Seleccionar dinero a ingresar

let opcionDinero;

do {    
    console.log("¿Cuánto dinero deseas ingresar?");
    console.log("1. $2000");
    console.log("2. $5000");   
    console.log("3. $10000");
    console.log("4. $20000");

    opcionDinero = Number(prompt("Selecciona una opción del 1 al 4"));

} while (opcionDinero < 1 || opcionDinero > 4);

switch (opcionDinero) {
    case 1:
        dineroIngresado = 2000;
        console.log("Dinero ingresado = 2000");
        break;

    case 2:
        dineroIngresado = 5000;
        console.log("Dinero ingresado = 5000");
        break;

    case 3:
        dineroIngresado = 10000;
        console.log("Dinero ingresado = 10000");
        break;  

    case 4:     
    dineroIngresado = 20000;
    console.log("Dinero ingresado = 20000");
    break;
}

console.log("Dinero ingresado:", dineroIngresado);

// Relacionar selección con producto

switch (opcionCafe) {

    case 1:
        productoSeleccionado = "Capuchino";
        console.log("Producto seleccionado: Capuchino");
        console.log("Precio: $" + capuchino);
        break;

    case 2:
        productoSeleccionado = "Americano";
        console.log("Producto seleccionado: Americano");
        console.log("Precio: $" + cafeAmericano);
        break;

    case 3:
        productoSeleccionado = "Mocachino";
        console.log("Producto seleccionado: Mocachino");
        console.log("Precio: $" + mocachino);
        break;

    case 4:
        productoSeleccionado = "Chocolate Caliente";
        console.log("Producto seleccionado: Chocolate Caliente");
        console.log("Precio: $" + chocolateCaliente);
        break;

    case 5:
        productoSeleccionado = "Leche Caliente";
        console.log("Producto seleccionado: Leche Caliente");
        console.log("Precio: $" + lecheCaliente);
        break;
}


// stock disponible 

let stockDisponible = 0;

switch (productoSeleccionado) {
    case "Capuchino":
        stockDisponible = stockCapuchino;
        break;
    
    case "Americano":
        stockDisponible = stockCafeAmericano;
        break;     

    case "Mocachino":
        stockDisponible = stockMocachino;
        break;

    case "Chocolate Caliente": 
        stockDisponible = stockChocolateCaliente;
        break;

    case "Leche Caliente":
        stockDisponible = stockLecheCaliente;
        break;
}

if (stockDisponible <= 0) {
    console.log("Producto sin stock, no se puede realizar la compra");
}
else {
    console.log("Hay stock disponible");
}   
    



// COMPRA EXITOSA - SISTEMA DE VUELTAS
if (stockDisponible > 0) {
    switch (productoSeleccionado) {
        case "Capuchino":
            if (dineroIngresado >= capuchino) {
                vueltas = dineroIngresado - capuchino;
                alert("Compra de capuchino exitosa, tus vueltas son: $" + vueltas);
            } else {
                alert("Dinero insuficiente para comprar capuchino");
            }
            break;

        case "Americano":
            if (dineroIngresado >= cafeAmericano) {
                vueltas = dineroIngresado - cafeAmericano;
                alert("Compra de cafe americano exitosa, tus vueltas son: $" + vueltas);
            } else {
                alert("Dinero insuficiente para comprar cafe americano");
            }
            break;

        case "Mocachino":
            if (dineroIngresado >= mocachino) {
                vueltas = dineroIngresado - mocachino;
                alert("Compra de mocachino exitosa, tus vueltas son: $" + vueltas);
            } else {
                alert("Dinero insuficiente para comprar mocachino");
            }
            break;

        case "Chocolate Caliente":
            if (dineroIngresado >= chocolateCaliente) {
                vueltas = dineroIngresado - chocolateCaliente;
                alert("Compra de chocolate caliente exitosa, tus vueltas son: $" + vueltas);
            } else {
                alert("Dinero insuficiente para comprar chocolate caliente");
            }
            break;

        case "Leche Caliente":
            if (dineroIngresado >= lecheCaliente) {
                vueltas = dineroIngresado - lecheCaliente;
                alert("Compra de leche caliente exitosa, tus vueltas son: $" + vueltas);
            } else {
                alert("Dinero insuficiente para comprar leche caliente");
            }
            break;

        default:
            alert("Producto no válido");
            break;
    }
} else {
    alert("Producto sin stock, no se puede realizar la compra");
}

// mensaje de compra exitosa

let mensaje = "Gracias por tu compra, vuelve pronto";
alert(mensaje); 