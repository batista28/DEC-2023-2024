function compararMatrices(matriz1, matriz2) {
  // Verificar que las matrices tienen las mismas dimensiones
  if (
    matriz1.length !== 4 ||
    matriz2.length !== 4 ||
    matriz1.some((row) => row.length !== 4) ||
    matriz2.some((row) => row.length !== 4)
  ) {
    throw new Error("Las matrices deben ser de 4x4");
  }

  // Inicializar la matriz resultante con ceros
  const matrizResultado = Array.from({ length: 4 }, () => Array(4).fill(0));

  // Comparar las matrices y llenar la matriz resultado
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (matriz1[i][j] === matriz2[i][j]) {
        matrizResultado[i][j] = matriz1[i][j];
      }
    }
  }

  return matrizResultado;
}

// Ejemplo de uso
const matrizA = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const matrizB = [
  [1, 20, 3, 40],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const resultado = compararMatrices(matrizA, matrizB);
console.log(resultado);
