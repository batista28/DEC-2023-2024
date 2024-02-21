function mismaLetras() {
  let palabra1 = prompt("Ingrese la primera palabra:");
  let palabra2 = prompt("Ingrese la segunda palabra:");

  let letras1 = palabra1.split("").sort();
  let letras2 = palabra2.split("").sort();

  if (letras1.length !== letras2.length) {
    return false;
  }

  for (let i = 0; i < letras1.length; i++) {
    if (letras1[i] !== letras2[i]) {
      return false;
    }
  }

  return true;
}

let resultado = mismaLetras();
console.log(resultado);
