try {
  // Error 1: División por cero
  let resultado = 10 / 0;

  // Error 2: Accediendo a una propiedad indefinida
  let objeto = {};
  console.log(objeto.propiedad.inexistente);

  // Error 3: Intentando llamar a una función inexistente
  funcionInexistente();
} catch (error) {
  console.error("Se ha producido un error:", error.message);
}
