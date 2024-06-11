//variables y tipos de datos primitivos
let nombre = "pepe";
let apellido = "perez";
/*alert(nombre)  //puedo ver si me esta capturando bien el nombre
alert(apellido)*/
console.log(nombre);
/*console.log(nombre) //me muestra en la consola de inspeccionar
console.log(apellido)*/

const documento = "44875142"; //--->number

nombre = "juancito";

console.log(nombre);

//documento = "111111"  si voy a la consola me va a tirar un error porque no puedo reasignar el valor de una constante

let edadDeLaPersona = 31;
console.log(edadDeLaPersona);

//prompt("por favor ingresa un numero") le pido un dato al usuario con prompt

//si quiero guardar el dato ingresado puedo usar una variable como abajo

//let numero = prompt("por favor ingresa un numero")
//console.log (numero)

let precio = 12.5;

//console.log("hola pepito como estas") no siempre la persona que ingrese se va a llamar pepito

//let nombreDeUsuario = prompt ("ingrese su nombre")  //asi cambia el saludo dependiendo de la persona
//console.log("hola "+ nombreDeUsuario + " como estas")  //puedo cambiar el console.log por un alert
/*let n1= 4
let n2 = 5
let total = n1+n2
console.log(total)*/

/*let n1 = prompt("ingrese el 1er numero")
let n2 = prompt("ingrese el 2do numero")
let total = n1 + n2
console.log(total)*/ //n1=10 y n2= 5, asi me va a mostrar 105 porque llega como string
//con number convierto eso que llega como string a numero y ahi si me lo sumaria

let n1 = Number(prompt("ingrese el 1er numero"));
let n2 = Number(prompt("ingrese el 2do numero"));
let total = n1 + n2;
console.log(total); //asi me lo transforma a numero y me lo suma

////TIPOS DE DATOS BOOLEANOS --> 0 / 1

console.log(n1 > n2);
