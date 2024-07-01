//Un sistema para una app web que pueda sacar entradas para un recital
//que tiene que ser mayor de edad --> 18 años o mas
// if (la condicion){lo que quiero hacer}

let nombre = prompt("ingrese su nombre");
let edad = Number(prompt("ingrese su edad"));

console.log("inicio");
if (edad >= 18) {
  //bloque de codigo
  console.log("gracias por su compra");
} else {
  //bloque de codigo
  console.log("debe ser mayor de edad");
}

console.log("fin");

let estaLogeado = true;
if (estaLogeado) {
  console.log("tiene acceso");
} else {
  console.log("no tiene acceso");
}

//18 o + ---> puedo entrar
//13 o +--> puedo entrar con un adulto
//-13 ---> no puedo entrar

let edad2 = Number(prompt("ingrese su edad"));
if (edad2 >= 18) {
  console.log("puede entrar");
} else if (edad2 >= 13) {
  console.log("puede entrar con un adulto");
} else {
  console.log("no puede entrar");
}

//18 o + ---> puedo entrar
//-18 y vengo con un adulto --> puedo entrar con un adulto
//-18 y no vengo con un adulto ---> no puedo entrar

let edad3 = Number(prompt("ingrese su edad"));
let estaAcompañado = false;
if (edad >= 18) {
  console.log("puede entrar");
} else if (edad < 18 && estaAcompañado) {
  console.log("puede entrar");
} else {
  console.log("no puede entrar");
}
