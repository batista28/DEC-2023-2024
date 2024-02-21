function mantenerDiagonalPrincipal(matriz) {
  // Verificarmos que la matriz tien las dimensiones corrctas
  if (matriz.length !== 3 || matriz.some((row) => row.length !== 3)) {
    throw new Error("La matriz debe ser de 3x3");
  }

  // Crearmos una nueva matriz con ceros
  const matrizModificada = Array.from({ length: 3 }, () => Array(3).fill(0));

  // Copiarmos la diagonal principal de la matriz original
  for (let i = 0; i < 3; i++) {
    matrizModificada[i][i] = matriz[i][i];
  }

  return matrizModificada;
}

const matrizOriginal = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrizModificada = mantenerDiagonalPrincipal(matrizOriginal);
console.log(matrizModificada);
