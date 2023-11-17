//Quitar los elementos duplicados de un array con conjuntos.

let arrayDuplicados=[1,7,4,7,7,2];
let conjunto=new Set(arrayDuplicados);
let arraySinDuplicados=[...conjunto];

console.log(arraySinDuplicados);