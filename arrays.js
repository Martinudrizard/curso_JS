//array --> coleccion

//los arrays tienen elementos ----- los objetos prop y metodos
let numerosDeLaSuerte = [2, 5, 12]; //asi agruparia mis numeros de la suerte para no poner muchas variables
let palabras = ["casa", "avion", "pepe"];

//trabajan por posiciones ----> empiezan en 0
console.log(palabras[2]); //asi me muestra "pepe"

let nombre = "jorge";
console.log(nombre[0]); //me muestra la j ya que sirve para string tambien

//propiedades ---> length (cantidad de elementos)
console.log(palabras.length); //me devuelve la longitud, empieza a contar desde 1

console.log(palabras[palabras.length - 1]);

let numeros = [5, 2, 7, 4, 9];

//para recorrer todo el arreglo
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

//para cambiar el elemento de un arreglo
numeros[1] = 15;

//sumo 10 a cada elemento de un array
for (let i = 0; i < numeros.length; i++) {
  numeros[i] += 10;
}


//arrays de objetos

const telefonos = [
    {
        nombre: "motorola"
        precio: 30
        stock:3
    },
    {
        nombre:"samsung"
        precio: 20
        stock:1
    },
    {
        nombre: "iphone"
        precio: 100
        stock:5
    }
];

class Telefono{
    constructor(nombre, precio, stock){
        this.nombre = nombre
        this.precio =precio
        this.precio = precio
    }
}

let telefonoNuevo = new Telefono ("xiaomi", 200, 7)
telefonos.push(telefonoNuevo) //agrego a mi arreglo el telefono nuevo


//funcion para calcular si vendo todo 

let calcularVentaTotal = () =>{
    let valorTotal = 0
    for(let i = 0; i < telefono.length; i++) {
        valorTotal = valorTotal + (telefonos[i].precio * telefonos[i].stock)
        //valorTotal += telefonos[i].precio * telefonos[i].stock
    }
    return valorTotal
}




//recorro todo y muestro el nombre de cada una
for ( let i = 0; i < telefonos.length ; i++) {
    console.log (telefonos[i].nombre)
}

//metodos internos de los arreglos
let numeritos = [1,6,2,7,1];
console.log (numeritos.length) //la longitud
numeritos.push("pepe") //me agrega "pepe" a mi arreglo
let existe = numeritos.includes ("juan") //pregunta si existe el elemento (T,F)
numeritos.pop() //eliminar el ultimo elemento de mi array

let z = numeritos.pop
console.log(z) //voy a ver el elemento eliminado

let seguimos = confirm("queres agregar otro telefono?") //metodo del navegador
console.log(seguimos)

const agregarTelefonos = ()=>{
    let nombre = prompt ("ingrese el nombre")
    let precio = Number(prompt ("ingrese el precio"))
    let stock = Number (prompt ("ingrese el nombre"))

    let telefonoNuevo = new Telefono(nombre,precio,stock)
    
    telefonos.push (telefonoNuevo); //se lo agrego a mi array de telefonos
}

let continuar = confirm("quiere agregar un nuevo telefono?")
while(continuar){
    agregarTelefonos()
    continuar = confirm("quiere agregar otro?")
}


let frase = "hola como estas"
console.log (frase.length) //longitud
let fraseMayuscula = frase.toUpperCase() //me escribe en mayuscula
console.log(frase.indexOf("a")) //indice donde se encuentra la letra a, siempre es la 1ra. -1 si no lo encuentra
console.log(frase.lastIndexOf("a")) //me devuelve el ultimo
console.log(frase.includes("a"))