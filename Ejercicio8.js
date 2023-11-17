let introducirNumero="Introduce el numero :";
let respuestaN = prompt(introducirNumero);
let numero=parseInt(respuestaN);

numeroAleatorio=Math.random(1,10);
if(numeroAleatorio==numero){
alert("buen trabajo") ;}
else{
    alert("Fallaste ,intentalo otra vez");
}