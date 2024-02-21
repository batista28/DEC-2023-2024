let palabras = ["dew", "yt", "gre", "^", "$", "&", "saµµµte"];
let alfabetoEspañol = /[a-zA-ZóúüñÁÉíÓÚÜÍZáéÑ¡¿]/;

function alfabetoEspanolNO(palabras) {
  let resultado = palabras.map((palabra) =>
    palabra
      .split("")
      .filter((letra) => !alfabetoEspañol.test(letra))
      .join("")
  );

  return resultado;
}

let resultado = alfabetoEspanolNO(palabras);
console.log(resultado);
