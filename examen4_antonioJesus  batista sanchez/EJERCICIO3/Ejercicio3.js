// Definición de la función anónima invertida
let invertida = function (cadena) {
  // Utilizar split, reverse y join para invertir la cadena
  return cadena.split("").reverse().join("");
};

// Ejemplo de uso
let textoOriginal = "Hola, mundo!";
let textoInvertido = invertida(textoOriginal);

console.log("Texto original:", textoOriginal);
console.log("Texto invertido:", textoInvertido);
