let equipo = [
    ["saiyans", "jijantes", "porcinos f.c", "1k fc", "rayo del barcelona", "aniquiladores", "el baarrio", "los troncos", "xbuyers", "pio fc"],
    [15, 12, 12, 9, 9, 8, 6, 5, 4, 3],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [5, 4, 4, 3, 3, 2, 2, 1, 1, 1],
    [0, 0, 0, 0, 0, 2, 0, 2, 1, 0], 
    [1, 2, 2, 3, 3, 2, 3, 3, 4, 5],
    [21 - 3, 18 - 10, 17 - 21, 23 - 18, 11 - 20, 12 - 19, 9 - 12, 8 - 19, 11 - 23, 2 - 12]];

    for (let i = 0; i < equipo.length; i++) {
    for (let j = 0; j < equipo[i].length; j++) {
        console.log(equipo[i][j]);
        console.log(equipo[i + 1][j]);
        console.log(equipo[i + 2][j]);
        console.log(equipo[i + 3][j]);
        
        console.log(equipo[i + 4][j]);
        console.log(equipo[i + 5][j]);
        console.log(equipo[i + 6][j]);
    }
}