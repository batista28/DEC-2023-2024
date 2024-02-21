//En ESTA TARE LE PROPORCIONAMOS EL INICIO DE UNA DEFINICION PARA UNA CLASE SHAPE.TIENE TRES PROPIEDADES:nombre,lados y longitudLado y los inicializa.
/*esta clase solo modela  formas cuyos lados tienen lamisma longitud ,como un cuadrado o un trianguloequilatero.
una vez creada la clase deberas:
agregue un cronstructor a esta clase .el constructor toma argumentos para las propiedades nombre,lado y longtudlado y los inicializa.

agregue un nuevo metodo caclPerimeter() a la clase,que clacula su perimetro(la longitud del borde eterior de la forma) y registra el resultado en consola.
cree una nueva instancia de la shape llamada square con 4 lados de 5cm de longitud.

llame a su caclPerimeter() metodo  para ver si registra el resultado del calculo en la consola de navegador como se esperaba,
realiza el metodo tostring para esta clase.

a continuacion ,crea una clase Square que herede de shape y agregue un metodo calcArea() que calcule el area del cuadrado ,tambien confgure el constructor
para que las propiedades del nombre y lados se establezcan automaticamente.cree una instancia de la clase square2 llamada square con los valores de propiedad apropiados y llame a sus metodos calcPerimeter( y calcArea( para demostrar que funciona bien
    y mostraarlotanto por pantalla como por consola*/

// aqui definimos la clase Shape con las propiedades nombre,lados ylongitudLado
class Shape {
  constructor(nombre, lados, longitudLado) {
    this.nombre = nombre;
    this.lados = lados;
    this.longitudLado = longitudLado;
  }
  //aqui creamos el metodo para calcular el perimetro de la forma
  calcPerimeter() {
    const perimetro = this.lados * this.longitudLado;
    console.log(`El perimetro de la forma ${this.nombre} es ${perimetro} cm.`);
  }

  //aqui el metodo toString para dar los datos de la forma,lados,y la longitud de esos lados
  toString() {
    return `Forma: ${this.nombre}, Lados: ${this.lados}, Longitud de Lado: ${this.longitudLado}`;
  }
}

const square = new Shape("Cuadrado", 4, 5);

// Llamadmos al metodo calcPerimeter de la instancia square para calcular su perimetro
square.calcPerimeter();

// y mostramos el resultado por la consola con el metodo Tostring
console.log(square.toString());

// esta es la definicion de la clase Square que hereda de Shape
class Square extends Shape {
  constructor() {
    super("Cuadrado", 4, 5);
  }

  //aqui creamos el metodo para calcular la area  y que lo muestre por consola
  calcArea() {
    const area = this.longitudLado * this.longitudLado;
    console.log(`El area del cuadrado es ${area} cm².`);
  }
}

const square2 = new Square();

square2.calcPerimeter();
square2.calcArea();
