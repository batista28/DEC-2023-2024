let introducirNumero = prompt("introduce el numero que quiere comprobar si es multiplo de 10");
function buscarMultiplos(introducirNumero) {
  if (introducirNumero % 10 == 0) {
    console.log("el numero introducido es multiplo de diez");
  } else {
    console.log("el numero inroducido no es un multiplo de diez");
  }
}

buscarMultiplos(introducirNumero);
