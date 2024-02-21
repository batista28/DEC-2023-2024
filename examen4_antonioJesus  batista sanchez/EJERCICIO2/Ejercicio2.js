/*programa  que calcule el resultado de una potencia de forma recursiva. 
la base y el exponente(se va a pedir que introduzca el exponente hasta 
    que este sea un numero positivo )los introducira el  usuario por teclado
    la funcion recursiva potencia recibira como parametros la base y el exponente y
    tendra los siguiente casos :caso base si exponente es 0,devuelve 1 y caso recursivo potencia=base*base eevado a exponente -1*/
// Función recursiva para calcular la potencia
function potencia(base, exponente) {
  // Caso base: cualquier número elevado a 0 es 1
  if (exponente === 0) {
    return 1;
  }

  // Caso recursivo: base^exponente = base * base^(exponente-1)
  return base * potencia(base, exponente - 1);
}

// Función principal
function mostraPorPantalla() {
  let base = parseFloat(prompt("Ingrese la base:"));

  let exponente;
  do {
    exponente = parseInt(prompt("Ingrese el exponente (debe ser no negativo):"));
  } while (exponente < 0);

  // Calcularmos y mostrarmos el resultado por conola
  let resultado = potencia(base, exponente);
  console.log("Resultado:", resultado);
}

// Llamamos a la función principal
mostraPorPantalla();
