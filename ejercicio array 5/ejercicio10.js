let arrayConElementosNulos=[ 'patata', 0, '', undefined, 'frita', null, 5, false, NaN];
let arraySinElementosNulos=arrayConElementosNulos.filter(Boolean);

console.log(arraySinElementosNulos);