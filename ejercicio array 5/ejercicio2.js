//Utilizando la estructura for, crear un script que calcule el factorial de un número entero.

let introducirNumero = "Introduce el numero para calcular el factorial :";
let respuestaNumero = prompt(introducirNumero);
let numero=parseInt(respuestaNumero);
	let total = 1; 
	for (i=1; i<=numero; i++) {
		total = total * i; 
	}
console.log(total);

