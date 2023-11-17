//Quitar los elementos no duplicados de un array sin conjuntos.

let numeros= [1,2,,6,1,2,5,9,9,'33','33'];

let resultado = numeros.filter((item,index)=>{
  return numeros.indexOf(item) !== index;
})
console.log(resultado); 