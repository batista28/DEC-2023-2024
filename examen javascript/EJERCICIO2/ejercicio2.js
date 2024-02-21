//aqui creamos nuestra cllase Hotel  que tedra vrios metodos como calcular el precio final o consulta de habitaciones
class Hotel {
  constructor(nombre, ubicacion, estrellas, precio, numHabitaciones) {
    this.nombre = nombre;
    this.ubicacion = ubicacion;
    this.estrellas = estrellas;
    this.precio = precio;
    this.numHabitaciones = numHabitaciones;
    this.reservas = {};
  }

  consultarHabitacionesDisponibles(fecha) {
    if (!this.reservas[fecha]) {
      // No hay reservas para la fecha proporcionada, todas las habitaciones están disponibles
      return this.numHabitaciones;
    } else {
      // Calcularemos el numero de habitaciones disponibles restando las habitaciones reservadas
      const habitacionesReservadas = Object.keys(this.reservas[fecha]).length;
      const habitacionesDisponibles = this.numHabitaciones - habitacionesReservadas;
      return habitacionesDisponibles > 0 ? habitacionesDisponibles : 0;
    }
  }

  // crearemos el metodo para caalcular el precio final y para este metodo haremos un switch dependiendo de numeros de estrellas para calcular el precio final de hotel
  calcularPrecioFinal() {
    let precioFinal = this.precio;

    switch (this.estrellas) {
      case 1:
        precioFinal *= 1.02;
        break;
      case 2:
        precioFinal *= 1.05;
        break;
      case 3:
        precioFinal *= 1.07;
        break;
      case 4:
        precioFinal *= 1.1;
        break;
      case 5:
        precioFinal *= 1.15;
        break;
      default:
        console.log("Numero de estrellas no valido.");
        return null;
    }

    return precioFinal;
  }
}

//aqui creamos la clase cliente con sus metodos como darse de alta o de baja
class Cliente {
  constructor(nombre, apellido, DNI, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.DNI = DNI;
    this.edad = edad;
    this.reservas = {};
    this.dadoDeAlta = false;
  }

  darDeAlta() {
    if (!this.dadoDeAlta) {
      this.dadoDeAlta = true;
      console.log(`Cliente ${this.nombre} ${this.apellido} dado de alta.`);
    } else {
      console.log(`El cliente ${this.nombre} ${this.apellido} ya esta dado de alta.`);
    }
  }

  darDeBaja() {
    if (this.dadoDeAlta) {
      this.dadoDeAlta = false;
      console.log(`Cliente ${this.nombre} ${this.apellido} dado de baja.`);
    } else {
      console.log(`El cliente ${this.nombre} ${this.apellido} no esta dado de alta.`);
    }
  }
}
//creamos la clase empresario con su metodo de consulta hoteles
class Empresario {
  constructor(codigo) {
    this.codigo = codigo;
    this.hoteles = [];
  }

  consultarListaHoteles() {
    console.log(`Lista de hoteles para el empresario ${this.codigo}:`);
    this.hoteles.forEach((hotel, index) => {
      console.log(`${index + 1}. ${hotel.nombre}`);
    });
  }
}
//a partir de aqui haremos ejemplos de usos de cada funcion

// aqui creamos los hoteles requeridos para el empresario Mario
const hotel1 = new Hotel("Hotel1", "Ubicacion1", 3, 100, 10);
const hotel2 = new Hotel("Hotel2", "Ubicacion2", 4, 150, 10);
const hotel3 = new Hotel("Hotel3", "Ubicacion3", 5, 200, 20);

// creamos a  el empresario Mario con la lista de hoteles que tiene
const empresario1 = new Empresario("Mario");
empresario1.hoteles.push(hotel1, hotel2, hotel3);

// aqi mostramos por consola la lista de hoteles que tiene el empresario mario
console.log(empresario1.consultarListaHoteles());

//Darmos de alta a un cliente
const cliente1 = new Cliente("Alvaro", "Valladares", "123456789", 25);
cliente1.darDeAlta();

//aqui creamos a un cliente para probar el darse de baja
const cliente2 = new Cliente("Juan", "Perez", "123456789", 25);
cliente2.darDeAlta();
cliente2.darDeBaja();
cliente2.darDeBaja();

//aqui creamos eun hotel para probar la funcion de calcular el precio final
const Hotel2 = new Hotel("Hotel1", "Ubicacion1", 3, 100, 10);
console.log("el precio final de hotel es: " + hotel2.calcularPrecioFinal());

// Reservar una habitación para el 2024-01-19
hotel1.reservas["2024-01-19"] = { 123456789: true };

// Consultar las habitaciones disponibles para el 2024-01-19 y que deberia imprimir 9 (10 habitaciones totales - 1 habitación reservada)
console.log(
  "El numero de habitaciones disponibles es: " +
    hotel1.consultarHabitacionesDisponibles("2024-01-19")
);
