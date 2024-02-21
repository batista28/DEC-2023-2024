function obtenerLetraDNI(numeroDNI) {
  const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";

  if (
    typeof numeroDNI !== "number" ||
    isNaN(numeroDNI) ||
    numeroDNI < 0 ||
    numeroDNI > 99999999
  ) {
    return "Número de DNI no válido";
  }

  const resto = numeroDNI % 23;
  const letra = letrasDNI.charAt(resto);

  return letra;
}

const numeroDNI = 12345678;
const letraDNI = obtenerLetraDNI(numeroDNI);
console.log(`La letra correspondiente al DNI ${numeroDNI} es: ${letraDNI}`);
