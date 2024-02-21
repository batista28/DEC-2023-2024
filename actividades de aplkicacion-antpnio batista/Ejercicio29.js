function llenarYOrdenarArray() {
  // Crear un array de 10 elementos y llenarlo con números aleatorios entre 1 y 100
  const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

  // Ordenar el array de manera que los números que terminan en 0 aparezcan primero
  array.sort((a, b) => {
    const ultimaCifraA = a % 10;
    const ultimaCifraB = b % 10;

    if (ultimaCifraA === ultimaCifraB) {
      // Si las últimas cifras son iguales, ordenar normalmente
      return a - b;
    } else {
      // Ordenar según las últimas cifras
      return ultimaCifraA - ultimaCifraB;
    }
  });

  return array;
}

// Ejemplo de uso
const resultado = llenarYOrdenarArray();
console.log("Array llenado y ordenado:", resultado);
