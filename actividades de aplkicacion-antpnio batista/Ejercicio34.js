function fibonacciVariante(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const secuencia = fibonacciVariante(n - 1);
    const nuevoElemento =
      secuencia[secuencia.length - 1] +
      secuencia[secuencia.length - 2] +
      secuencia[secuencia.length - 3];
    secuencia.push(nuevoElemento);
    return secuencia;
  }
}

const elementos = 10;
const resultado = fibonacciVariante(elementos);
console.log(resultado);
