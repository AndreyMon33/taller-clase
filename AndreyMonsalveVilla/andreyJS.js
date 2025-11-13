/*Ejercicio 1*/

let articulo1 = prompt("Ingrese el precio del primer articulo:");
let articulo2 = prompt("Ingrese el precio del segundo articulo:");
let articulo3 = prompt("Ingrese el precio del tercer articulo:");

let resultado = parseInt(articulo1) + parseInt(articulo2) + parseInt(articulo3);

console.log("Resultado total de los articulos:", resultado);

/*Ejercisio 2*/

let anchoPared = prompt("Ingrese el ancho de la pared en metros:");
let largoPared = prompt("Ingrese el alto de la pared en metros:");

let areaPared = parseFloat(anchoPared) * parseFloat(largoPared);

console.log("El area de la pared es de:", areaPared);

/*Ejercisio 3*/

let largoPotrero = prompt("Ingrese el largo del potrero:");
let anchoPotrero = prompt("Ingrese el ancho del potrero:");

let perimetroPotrero = parseFloat(2) * (parseFloat(largoPotrero) + parseFloat(anchoPotrero));

console.log("El perimetro del potrero es de:", perimetroPotrero);

/*Ejercisio 4*/

let temperaturaFahrenheit = prompt("Ingrese la temperatura en °F(Fahrenhaint):");

let temperaturaCelsius = (parseFloat(temperaturaFahrenheit) - parseFloat(32)) / parseFloat(1.8);

console.log("La temperatura en °C(Celsius) es:", temperaturaCelsius);

/*Ejercisio 5*/

let anho = prompt("Ingrese su año de nacimmiento:");

let anhoActual = parseFloat(2024) - parseFloat(anho);

console.log("Siendo el 2024 tu edad es de:", anhoActual);

/*Ejercisio 6*/

let nombreUsuario = prompt("¿Cual es tu nombre?");
let apellidoUsuario = prompt("¿Cual es tu apellido?");

console.log("Bienvenido", nombreUsuario, apellidoUsuario, "Disfruta tu tiempo en la pagina");

/*Ejercisio 7*/

let nota1 = prompt("Ingresa tu primera nota en una escala del 0 al 5:");
let nota2 = prompt("Ingresa tu segunda nota en una escala del 0 al 5:");
let nota3 = prompt("Ingresa tu tercera nota en una escala del 0 al 5:");

let promedioNotas = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / parseFloat(3);

console.log("Tu promedio es:", promedioNotas);

/*Ejercisio 8*/

let valorHorasTrabajadas = prompt("Ingrese el valor de las horas:");
let precioHorasTrabajadas = prompt("Ingresa la cantidad de horas trabajadas:");

let totalPrecioHoras = parseFloat(valorHorasTrabajadas) * parseFloat(precioHorasTrabajadas);

console.log("El total de tu salario en base a tus horas trabajadas es:", totalPrecioHoras);

/*Ejercisio 9*/

let distanciaMillas = prompt("Ingrese la distancia que va a recorrer en millas:");

let distanciaKilometros = parseFloat(distanciaMillas) * parseFloat(1.60934);

console.log("La distancia a recorrer en kilometros es de:", distanciaKilometros);