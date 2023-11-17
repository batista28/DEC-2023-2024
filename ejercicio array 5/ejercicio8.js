let letras=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let introducirNumero=prompt("introduce el numero de dni(sin la letra)");
let introducirLetra=prompt("introduce la letra de dni".toUpperCase);

if (introducirNumero<0 || introducirNumero>99999999) {
    alert("el numero introducido es incorrecto");
}else{
    letraCalculada=introducirNumero[numero%23];
    if(letraCalculada!=introducirLetra){
        alert("la letra indicada no es correcta");
    }else{
        alert("el numero y la letra son correctos")
    }
}
