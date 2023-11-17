let mensajeNumero1 = "Introduce el primer numero :";
let respuestaN1 = prompt(mensajeNumero1);
let numero1=parseInt(respuestaN1);
let mensajeNumero2 = "Introduce el segundo numero :";
let respuestaN2= prompt(mensajeNumero2);
let numero2=parseInt(respuestaN2);
if(numero1==numero2){
    alert((numero1 + numero2)*3);
}
else{
    alert("los numeros no son iguales");
}