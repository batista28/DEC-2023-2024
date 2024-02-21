function fahrenheitACelsius(fahrenheit) {
  //  esta es la Fórmula de conversión: (F - 32) * 5/9
  var celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

// aqui solicitarmos al usuario la temperatura en grados Fahrenheit mediante prompt
var temperaturaFahrenheit = prompt(
  "Ingresa la temperatura en grados Fahrenheit:"
);

// Convertirmos la entrada del usuario a un número y realizar la conversión
temperaturaFahrenheit = parseFloat(temperaturaFahrenheit);
var temperaturaCelsius = fahrenheitACelsius(temperaturaFahrenheit);

// Mostraremos el resultado en la consola
console.log(
  temperaturaFahrenheit +
    " grados Fahrenheit son aproximadamente " +
    temperaturaCelsius.toFixed(2) +
    " grados Celsius."
);
