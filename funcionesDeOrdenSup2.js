let usuarios = [
  {
    nombre: "pepe",
    email: "pepe@gmail.com",
    telefono: "12345",
  },
  {
    nombre: "juan",
    email: "juan@gmail.com",
    telefono: "123456",
  },
  {
    nombre: "maria",
    email: "maria@gmail.com",
    telefono: "1234",
  },
];

//forEach
//nunca retorna nada ni me pide que retorne algo adentro
let arrayForEach = usuarios.forEach((usuario, indice) => {
  usuario.id = indice + 1; //le estoy agregando a cada elemento de mi array un indice
  usuario.nombre = usuario.nombre.toUpperCase(); //paso a mayus
  usuario.nombre.charAt(0).toUpperCase() + usuario.nombre.slice(1); //1ra letra a mayus
});
console.log(arrayForEach); //esto no me muestra nada pq no devuelve nada
console.log(usuarios); //aca si los veo con el id ya

let palabra = "juancito";
palabra.slice(1);
//recibe desde donde quiero quiero cortar la palabra hasta donde
//si le paso 1 solamente me corta hasta el final

//some --->devuelve un booleano
//me pide que retorne algo adentro

let existeJuan = usuarios.some((usuario) => usuario.nombre === "juan");

//every

let todosTienenEmail = usuarios.every((usuarios) =>
  usuarios.email.includes("@")
);

let juanTieneEmailValido = usuarios.find(
  (usuario) => usuario.nombre === "juan"
);
console.log(juanTieneEmailValido.email.includes("@"));

//de esta forma no es estatico
const DeterminarSiTieneEmailValido = (nombre) => {
  let usuario = usuarios.find((usuario) => usuario.nombre === nombre);
  let tieneEmailValido = usuario.email.includes("@");
  return tieneEmailValido;
};

let maria = DeterminarSiTieneEmailValido("maria");
console.log({ maria: maria }); //mas profesional para no confundirme en el csl
//tambien podria poner console.log({ maria });

let usuariosDos = [
  {
    id: 1,
    nombre: "pepe",
    email: "pepe@gmail.com",
    telefono: "12345",
  },
  {
    id: 2,
    nombre: "juan",
    email: "juan@gmail.com",
    telefono: "123456",
  },
  {
    id: 3,
    nombre: "maria",
    email: "maria@gmail.com",
    telefono: "1234",
  },
];

//objeto math --->matematico

Math.max(1, 3, 6, 4);

let arrayDeIds = usuariosDos.map((usuario) => usuario.id);
let max = Math.max(...arrayDeIds);

let numero = 5.4;
console.log(Math.ceil(numero)); //numero entero mas cercano al techo (6)
console.log(Math.floor(numero)); //numero entero mas cercano al piso (5)
console.log(Math.round(numero)); //numero entero mas cercano dependiendo del decimal (5 )

let aleatorio = Math.random();
console.log(aleatorio); //numero aleatorio entre 0 y 1 pero nunca es 1

//objeto date --->fechas

let fecha = new Date();
console.log(fecha); //me muestra la fecha de hoy
//años mes dia -->el mes empieza en 0
console.log(fecha.getDay()); //numero del dia de la semana
console.log(fecha.getMonth()); //enero = 0, diciembre =11
console.log(fecha.getDate()); //dia del mes
console.log(fecha.getFullYear()); //año

let fechaFutura = new Date("2024-09-15");
console.log(fechaFutura);

//asi le agrego horario especifico
let fechaFutura = new Date("2024-09-15T20:00:00");
console.log(fechaFutura);
console.log(fechaFutura.getHours());
console.log(fechaFutura.getMinutes());
console.log(fechaFutura.getSeconds());

console.log(fechaFutura - fecha); //me devuelve en milisengundo
console.log((fechaFutura - fecha) / (1000 * 60 * 60)); //paso a horas

//ordenar --> sort
//reducir un array a su minima expresion -->reduce

let arrayCuentas = [
  {
    id: "1",
    cbu: 473268473,
    tipoDeCuenta: "cuenta corriente",
    saldoEnPesos: 5100,
    titularCuenta: "pepito",
    estadoDeCuenta: "al dia",
  },
  {
    id: "2",
    cbu: 546764454,
    tipoDeCuenta: "cuenta corriente",
    saldoEnPesos: 500,
    titularCuenta: "carlos",
    estadoDeCuenta: "al dia",
  },
  {
    id: "3",
    cbu: 43565463556,
    tipoDeCuenta: "caja de ahorro",
    saldoEnPesos: 5100,
    titularCuenta: "maria",
    estadoDeCuenta: "con deuda",
  },
];

let nums = [1, 4, 5, 7, 3, 2];
nums.sort((a, b) => a - b); //ordena en forma ascendente el array
nums.sort((a, b) => b - a); //forma descendente

let palabras = ["casa", "avion", "abeja", "mariposa"];
palabras.sort((a, b) => a - b);

let x = palabras.sort((a, b) => a.localeCompare(b));

arrayCuentas.sort((a, b) => a.saldoEnPesos - b.saldoEnPesos); //ordenado en base al saldo
arrayCuentas.sort((a, b) => a.id - b.id); //ordenado en base al id

//reduce

const sumarArray = () => {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) {
    acc += nums[i];
  }
  return acc;
}; //asi seria sin reduce

//asi con reduce
let numeritos = [1, 4, 7, 3, 4, 6];
let total = numeritos.reduce((acc, elemento) => {
  return acc + elemento; //de esta forma me daria la suma de los numeros
});
