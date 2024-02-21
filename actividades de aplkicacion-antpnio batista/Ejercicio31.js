function operacionesMatematicas() {
  // Solicitar al usuario que ingrese al menos 4 números
  var numeros = [];
  for (var i = 0; i < 4; i++) {
    var input = prompt("Ingresa un número:");
    // Convertir la entrada a número y agregarlo al array
    numeros.push(parseFloat(input));
  }

  // Suma de los números
  var suma = numeros.reduce((acc, num) => acc + num, 0);

  // Media aritmética
  var media = suma / numeros.length;

  // Multiplicación del primero y el último
  var multiplicacion = numeros[0] * numeros[numeros.length - 1];

  // División del segundo con el penúltimo
  var division = numeros[1] / numeros[numeros.length - 2];

  // Devolver un objeto con los resultados
  return {
    suma: suma,
    media: media,
    multiplicacion: multiplicacion,
    division: division,
  };
}

// Ejemplo de uso
var resultados = operacionesMatematicas();
console.log(resultados);
