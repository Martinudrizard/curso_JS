let nombreTelefono = "motorola";
let precioTelefono = 100;
let descripcionTelefono = " sdjjd jsnkdjsd jnasd";

//anchor -->objetos --->pares de clave : valor

let telefono = {
  precio: 100,
  nombre: "motorola",
  descripcion: "este es el mejor",
};
console.log(telefono);

//anchor ---> dot notation
let telefono = { //es un objeto
  precio: 100,
  nombre: "motorola",
  descripcion: "este es el mejor",
};
console.log(telefono.descripcion);

//anchor ---> propiedades  //scon caracteristicas

//anchor --> metodos  //clave pero que tiene asignado una funcion
let telefono = {
  precio: 100,
  nombre: "motorola",
  descripcion: "este es el mejor",
  aumentarPrecio function => {
    return "el precio aumentó";
  },
};
let x = telefono.aumentarPrecio();
console.log(x);

telefono.nombre = "samsung" //le cambio el valor al campo nombre con la notacion dot notation
telefono.stock =15 //esta propiedad no existia pero se la agrego asi

delete.telefono.precio; //con el delete le borro la propiedad que quiero pero no se usa nunca


//anchor ---> this, this.nombre. apunta al objeto en el que estoy trabajando
const perro ={
    nombre: "jack",
    edad: 3,
    ladrar function (){
        return"wau wau";
    },
    hablar function (){
        return"hola mi nombre es jack"
    }
};
perro.color = "blanco y marron" 
let retorno = perro.hablar() //guardo la ejecucion de una funcion
console.log(retorno)

perro.nombre = "pepito" //me sigue diciendo jack proque la funcion está estatica
let retornoDos = perro.hablar()
console.log (retornoDos)

const perro ={
    nombre: "jack",
    edad: 3,
    ladrar function (){ //dentro de un objeto no puedo usar la funcion flecha
        return"wau wau";
    },
    hablar: (nombreFinal)=>{
        return"hola mi nombre es " + nombreFinal
    }
};

perro.nombre = "pepito" //aca si me cambia el nombre
let retornoDos = perro.hablar(perro.nombre)
console.log (retornoDos)

//este es el mejor de los casos
const perro ={
    nombre: "jack",
    edad: 3,
    ladrar function (){
        return"wau wau";
    },
    hablar: (nombreFinal)=>{
        return"hola mi nombre es " + this.nombre  //cuando estoy dentro del objeto en vez de perro.nombre uso this.nombre
    }
};

perro.nombre = "pepito" //aca si me cambia el nombre
let retornoDos = perro.hablar()
console.log (retornoDos)

//le estoy agregando un metodo 
perro.aumentarEdad = function (){
    this.edad = this.edad + 1 //++ , += 1
}
console.log(perro.edad)
console.log(perro.aumentarEdad)


//anchor ---> bracket notation sirve para cuando son variables
console.log(perro["edad"]) //le paso la propiedad como un string

let retornarPropiedad = ()=>{
    return perro.nombre
}
let resultado = retornarPropiedad()
console.log(resultado)

let retornarPropiedad = (prop)=>{
    return perro[prop]
}
let resultado = retornarPropiedad()
console.log(resultado)


//anchor ---> class - constructor
class Telefono {
    constructor(nombre, precio, stock){
        this.nombre = nombre, //lo del lado izq es como quiero que se llamen despues las variables
        this.precio = precio,
        this.stock = stock
    }
}
//creando un nuevo telefono

let nombre1 = prompt("nombre del telefono")
let telefono1 = new Telefono(nombre1, 100,5)
let telefono2 = new Telefono("iphone", 200,3)
console.log(telefono1)
console.log(telefono2)


//agregando metodos en una clase
class Producto{
    constructor(nombre, precio, stock, estaDisponible){
        this.nombre = nombre 
        this.precio = precio
        this.stock = stock
        this.estaDisponible = estaDisponible
    }
    //metodo
    vender(cantidad){
        this.stock = this.stock - cantidad
        //this.stock -= cantidad
        this.ckeckearDisponibilidad() //chequeo la disponibilidad dentro del metodo
    }
    //si no hay disponibilid
    ckeckearDisponibilidad(){
        this.estaDisponible = this.stock > 0 ? true : false
        // this.estaDisponible = this.stock > 0
        
    }
}

let televisor = new Producto("tele",100,10,true)
televisor.vender(3)
//televisor.vender(10) me deberia de decir que no esta disponible
console.log(televisor.stock)

televisor.ckeckearDisponibilidad()
console.log(televisor.estaDisponible)
