function jugar(rondas = 5) {
  for (let i = 0; i < rondas; i++) {
    var jugador1Dado1 = Math.random() * 6;
    var jugador1Dado2 = Math.random() * 6;
    var jugador2Dado1 = Math.random() * 6;
    var jugador2Dado2 = Math.random() * 6;
    var resultadoJugador1 = jugador1Dado1 + jugador1Dado2;
    var resultadoJugador2 = jugador2Dado1 + jugador2Dado2;
    if (resultadoJugador1 < resultadoJugador2) console.log("Ha ganado  el  jugador 2");
    else {
      console.log("Ha ganado  el  jugador 1");
    }
    console.log(resultadoJugador1);
    console.log(resultadoJugador2);
  }
}
jugar(7);
