function lanzarDados(veces) {
  let puntuacionGanadora = 0;
  let lanzamientosGanadores = [];

  for (let i = 0; i < veces; i++) {
    // Lanzarmos dos dados
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    // Calcularmos  la puntuación del lanzamiento
    let puntuacionActual = dado1 + dado2;

    // Comprobar si es la puntuación ganadora
    if (puntuacionActual > puntuacionGanadora) {
      puntuacionGanadora = puntuacionActual;
      lanzamientosGanadores = [{ dado1, dado2 }];
    } else if (puntuacionActual === puntuacionGanadora) {
      lanzamientosGanadores.push({ dado1, dado2 });
    }
  }

  return { puntuacionGanadora, lanzamientosGanadores };
}

// Ejemplo de uso: lanzar dados 5 veces
const resultado = lanzarDados(5);
console.log(`Puntuación ganadora: ${resultado.puntuacionGanadora}`);
console.log("Lanzamientos ganadores:", resultado.lanzamientosGanadores);
