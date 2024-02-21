function esPrimo(numero) {
  // 1 y números negativos no son primos
  if (numero <= 1) {
    return false;
  }

  // Verificar si es divisible por algún número desde 2 hasta la raíz cuadrada del número
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      // Si es divisible por algún número, no es primo
      return false;
    }
  }

  // Si no fue divisible por ningún número, es primo
  return true;
}

// Ejemplo de uso
const numero = 17;
if (esPrimo(numero)) {
  console.log(`${numero} es un número primo.`);
} else {
  console.log(`${numero} no es un número primo.`);
}
