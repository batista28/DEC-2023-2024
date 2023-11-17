let colores = [["Naranja", "lima", "Turquesa", "Rosa", "Rojo"], ["#F39C12", "#COF312", "#12F3E5", "#F312AF", "#F31212"]];
let color = prompt("Introduce un color para saber su código");
for (let i = 0; i < colores.length; i++) {
    for(let j = 0; j < colores[i].length; j++)
    if (color == colores[i][j]) {
        console.log(colores[i+1][j])
    }
}

