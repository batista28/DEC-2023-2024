/*crea una clase para modelar un objeto telefono movil que tenga 
al menos estas propiedades:cpu,RAM,almacenamiento,ancho,
alto y numCamaras.Añade tambien un metodo llamado toString()
quemuestre en pantalla la informacion del objeto creado .crea cuatro objetos con distintos numeros de parametros en la creacion y muestra 
en pantalla la informacion de cada objeto*/

// Definición de la clase TelefonoMovil
class TelefonoMovil {
  // Constructor de la clase con propiedades obligatorias y valores predeterminados
  constructor(cpu, RAM, almacenamiento, ancho = 0, alto = 0, numCamaras = 0) {
    this.cpu = cpu;
    this.RAM = RAM;
    this.almacenamiento = almacenamiento;
    this.ancho = ancho;
    this.alto = alto;
    this.numCamaras = numCamaras;
  }

  // Método toString para mostrar la información del objeto
  toString() {
    return `Teléfono Móvil:\nCPU: ${this.cpu}\nRAM: ${this.RAM}\nAlmacenamiento: ${this.almacenamiento}\nAncho: ${this.ancho}\nAlto: ${this.alto}\nNúmero de Cámaras: ${this.numCamaras}`;
  }
}

// Creación de objetos con distintos números de parámetros
const telefono1 = new TelefonoMovil("Snapdragon 865", "8 GB", "128 GB", 6.2, 15.1, 3);
const telefono2 = new TelefonoMovil("carabante 990", "6 GB", "64 GB", 6.0, 14.5, 2);
const telefono3 = new TelefonoMovil("Apple A14 Bionic", "4 GB", "256 GB", 5.8, 13.8);
const telefono4 = new TelefonoMovil("valladares 980", "12 GB", "256 GB", 6.4, 16.0, 4);

// Mostrar la información de cada objeto en pantalla
console.log(telefono1.toString());
console.log("\n--------------------------------\n");
console.log(telefono2.toString());
console.log("\n--------------------------------\n");
console.log(telefono3.toString());
console.log("\n--------------------------------\n");
console.log(telefono4.toString());
