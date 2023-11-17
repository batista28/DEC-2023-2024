let año = prompt("Introduce el año que quieres comprobar");

function comprobarAñoBisiesto(año) {
  if (año % 4 == 0) {
    console.log("El año introducido es bisiesto");
  } else {
    console.log("El año introducido no es bisiesto");
  }
}
comprobarAñoBisiesto(año);
