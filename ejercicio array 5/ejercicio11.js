 let cadena=prompt("introducer la cadena que quiere comprobar");
 let resultado="La cadena esta\""+cadena+"\" ";
 if(cadena == cadena.toUpperCase()) {
resultado += " formada solo por mayusculas";
  }
  else if(cadena == cadena.toLowerCase()) {
    resultado += " formada solo por minusculas";
  }
  else {
    resultado += " formada por mayusculas y minusculas";
  }

  console.log(resultado);
