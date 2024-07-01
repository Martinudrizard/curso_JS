//sirven para no repetir codigo y tambien para que se ejecute solo cuando yo les diga

//declaracion de una funcion

let edad = 2;

function saludar() {
  //bloque de codigo
  let nombre = "pepe";
  console.log("hola");

  if (true) {
    let x = 15;
    let apellido = "udrizard";
    console.log(nombre); //puedo usar la variable nombre porque esta dentro del bloque
  } else {
    let y = 12;
  }

  //console.log(apellido) esto no se puede ya que apellido esta en el if declarada
}

//ejecucion, invocacion, llamar a la funcion

saludar();

//scope --> ambiente en donde existe la variable (variables globales o locales)
//puedo crear una variable con el mismo nombre que otra mientras esten en distinto ambiente
//si hay dos variables con el mismo nombre, me va a dar la que esta mas cercana a su scope

let nombre = "pepito";

function saludar() {
  console.log(nombre);
}

saludar();

function sumar() {
  let n1 = 2;
  let n2 = 5;
  //alert(n1 + n2);
  return n1 + n2;
}
//sumar()
let resultado = sumar();

function restar() {
  let n1 = 2;
  let n2 = 5;
  alert(n1 - n2);
}
restar();

function saludar2() {
  let nombre = "juan";
  let saludoFinal = "hola" + nombre + "como estas?";
  return saludoFinal;
}
//saludar2();
let saludito = saludar2();

function restar2(n1, n2) {
  return n1 - n2; //los parametros hacen que mi funcion sea reutilizable
}

let resultadoResta2 = restar2(10, 3);
console.log(resultadoResta2);

function saludar3(nombre) {
  return "hola" + nombre + "como estas?";
}

let saludito = saludar(prompt("nombre"));
console.log(saludito);
//esto me va a devolver "hola undefined como estas?" porque no le pase nada a la variable nombre
//undefined con string y NaN con numeros

//funciones expresadas o anonimas, no tienen nombre
//las tengo que guardar en una variable

let multiplicar = function (n1, n2) {
  return n1 * n2;
};

let result = multiplicar(3, 5);
console.log(result);

//console.log( typeof multiplicar) me va a mostrar el tipo de dato que es "function"

//FUNCIONES QUE VOY A USAR A PARTIR DE AHORA
//EXPRESADA ---> ANONIMA ---> ARROW  (FUNCION FLECHA)

let dividir = (n1, n2) => {
  return n1 / n2;
};
let resultadoDivision = dividir(10, 2);
console.log(resultadoDivision);

//funcion que reciba una cantidad de pesos y me diga cuantos dolares son

let conversion = (cantidadPesos) => {
  return cantidadPesos / 1000;
};
let cantidadEnDolares = conversion(20000);
console.log(cantidadEnDolares);

let conversion = (cantidadPesos) => {
  return cantidadPesos / 1000;
};

let cantidadPesos = Number(prompt("Ingrese la cantidad de pesos:"));
let cantidadEnDolares = conversion(cantidadPesos);

console.log(cantidadEnDolares);

//la funcion flecha la puedo escribir así si tengo una sola variable y una sola linea de codigo
//let conversion = cantidadPesos => cantidadPesos /1000

//calcular el impuesto a la patente
//impuesto --> 100
//depende la marca del auto se le agrega x cantidad
//vw -->30
//audi --> 40
//volvo -->20
//renault -->10
//mercedes -->45

let calcImp = (marcaDelAuto) => {
  let impuestoBase = 100;
  switch (marcaDelAuto) {
    case "vw":
      return (impuestoBase += 30);
    case "audi":
      return (impuestoBase += 40);
    case "volvo":
      return (impuestoBase += 20);
    case "renault":
      return (impuestoBase += 10);
    case "mercedes":
      return (impuestoBase += 45);
    default:
      return "la marca no debe pagar impuestos";
  }
  return impuestoBase;
};

let marca = prompt("ingrese la marca de su vehiculo");
let impuesto = calcImp(marca);
console.log(impuesto); //impuestoBase no porque esta definido dentro de la funcion
