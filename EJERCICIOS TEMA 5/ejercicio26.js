

//aqui creamos la clase persona con dos propiedades que son nombre y edad y la encapsulamos 
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  obtenerNombre() {
    return this.nombre;
  }

  obtenerEdad() {
    return this.edad;
  }
}

