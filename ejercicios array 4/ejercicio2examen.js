// Función para almacenar información sobre módulos en un Map
function almacenarInformacionModulos() {
    // Crear un nuevo Map
    let modulosMap = new Map();

    // Agregar información sobre los módulos
    agregarModulo(modulosMap, "Programación Avanzada", "Profesor1", 60);
    agregarModulo(modulosMap, "Desarrollo de Interfaces", "Profesor2", 80);
    agregarModulo(modulosMap, "Bases de Datos", "Profesor3", 70);
    agregarModulo(modulosMap, "Proyecto Final", "Profesor4", 100);

    // Mostrar la información almacenada en el Map
    mostrarInformacion(modulosMap);
}

// Función para agregar información de un módulo al Map
function agregarModulo(mapa, nombreModulo, nombreProfesor, horas) {
    mapa.set(nombreModulo, {
        profesor: nombreProfesor,
        horas: horas
    });
}

// Función para mostrar la información almacenada en el Map
function mostrarInformacion(mapa) {
    console.log("Información de módulos en segundo de DAW en el IES Mar de Cádiz:");

    // Iterar sobre las entradas del Map
    mapa.forEach((value, key) => {
        console.log(`Módulo: ${key}, Profesor: ${value.profesor}, Horas: ${value.horas}`);
    });
}

// Llamar a la función principal
almacenarInformacionModulos();
