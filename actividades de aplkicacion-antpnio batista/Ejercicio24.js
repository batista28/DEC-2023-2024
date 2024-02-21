let numero = prompt("Introducir el numero ");
function tablaMultiplicar() {
  for (let i = 1; i < 10 + 1; i++) {
    let tablanumero = numero * i;
    console.log(numero + "*" + i + "=" + tablanumero);
  }
}

tablaMultiplicar(numero);
