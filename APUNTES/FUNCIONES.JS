// Función Básica:Definición: Una función básica es una secuencia de declaraciones que pueden ser llamadas por su nombre. Puede o no aceptar argumentos y puede o no devolver un resultado.
function saludar(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

saludar("Juan");

// Función con Parámetros Predeterminados:Definición: Permite establecer valores predeterminados para los parámetros de una función en caso de que no se proporcionen al llamarla.
function saludarConSaludo(nombre, saludo = "Hola") {
  console.log(`${saludo}, ${nombre}!`);
}

saludarConSaludo("María");

// Función de Flecha:Definición: Una función sin un nombre explícito que puede asignarse a una variable o utilizarse como argumento en otras funciones.
const sumar = (a, b) => a + b;

console.log(sumar(3, 5));

// Función Anónima:Definición: Una función sin un nombre explícito que puede asignarse a una variable o utilizarse como argumento en otras funciones.
const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(4, 6));

// Función con Retorno Múltiple:Definición: Una función que devuelve más de un valor, generalmente utilizando un objeto o una estructura de datos.
function obtenerInformacionPersona(nombre, edad) {
  return { nombre: nombre, edad: edad };
}

const persona = obtenerInformacionPersona("Ana", 25);
console.log(persona.nombre, persona.edad);

// Función Recursiva
function contarHastaCero(numero) {
  if (numero >= 0) {
    console.log(numero);
    contarHastaCero(numero - 1);
  }
}

contarHastaCero(5);

// Función con Parámetros Rest:Definición: Permite que una función acepte un número variable de argumentos como un array.
function sumarNumeros(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumarNumeros(1, 2, 3, 4, 5));

// Función con Callback:Definición: Una función que se pasa como argumento a otra función para ser ejecutada más tarde.
function operacionMatematica(a, b, operacionCallback) {
  return operacionCallback(a, b);
}

const suma = (x, y) => x + y;
console.log(operacionMatematica(3, 4, suma));

// Función con Cierre (Closure):Definición: Una función que tiene acceso a las variables de su ámbito externo, incluso después de que la función externa haya terminado de ejecutarse.
function contador() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const incrementarContador = contador();
incrementarContador();
incrementarContador();
//Función Recursiva:Definición: Una función que se llama a sí misma durante su ejecución.
function contarHastaCero(numero) {
  if (numero >= 0) {
    console.log(numero);
    contarHastaCero(numero - 1);
  }
}

contarHastaCero(5);

