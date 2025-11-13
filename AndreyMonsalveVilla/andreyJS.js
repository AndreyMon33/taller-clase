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