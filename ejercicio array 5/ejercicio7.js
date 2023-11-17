let introducirCadena=prompt("introduce la cadena que quieras comprobar si es palindromo o no");

    let resultado = "La cadena \""+introducirCadena+"\" \n";
  
    // aqui pasaremos a minusculas la cadena
    let cadenaOriginal = introducirCadena.toLowerCase();
  
    // Convertir la cadena en un array
    let letrasConEspacios = cadenaOriginal.split("");
  
    // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
    var cadenaSinEspacios = "";
    for(i in letrasConEspacios) {
      if(letrasConEspacios[i] != " ") {
        cadenaSinEspacios += letrasConEspacios[i];
      }
    }
  
    let letras = cadenaSinEspacios.split("");
    let letrasReves = cadenaSinEspacios.split("").reverse();
  

    let sonIguales = true;
    for(i in letras) {
      if(letras[i] == letrasReves[i]) {
      
      }
      else {
        // si alguna de las letras no es igual en ese caso nuestra variante sonIguales es false
        sonIguales = false;
      }
    }
  
    if(sonIguales) {
      resultado += " es un palíndromo";
    }
    else {
      resultado += " no es un palíndromo";
    }
  
 console.log(resultado);