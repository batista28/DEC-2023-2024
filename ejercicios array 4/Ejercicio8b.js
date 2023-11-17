let numeros = [2, 3, 56, 3, 7, 89, 12, 2, 3, 5, 6];

let contador_numeros = {};
let numero_repetido = 0;
let numero_repetido_max = 0;

numeros.forEach(function(numero) {
    if (contador_numeros[numero]) {
        contador_numeros[numero] += 1;
    } else {
        contador_numeros[numero] = 1;
    }

    if (numero_repetido < contador_numeros[numero]) {
        numero_repetido = contador_numeros[numero];
        numero_repetido_max = numero;
    }
});

console.log("Objeto con repeticiones");
console.log(contador_numeros);
console.log("repeticion maxima: " + numero_repetido);
console.log("elemento: " + numero_repetido_max);
