let fecha_inicial=new Date('1995-11-16').getTime();
let fecha_actual=new Date('2023-10-19').getTime();

let diferencia_dias=fecha_actual - fecha_inicial;

console.log(diferencia_dias/(1000*60*60*24));
