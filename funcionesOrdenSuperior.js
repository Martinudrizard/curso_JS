//copia por valor vs copia por referencia

let a = 1
let b = a  //copia por valor

console.log (a) // me muestra 1
console.log (b) //me muestra 1

a=+ 7

console.log(a) //me muestra 8
console.log(b) //me muestra 1


let persona ={
    nombre: "pepe",
    edad:22;
}

let persona2 = persona //me muestra dos veces lo mismo
console.log(persona)
console.log(persona2)


persona.nombre= "juancito"
console.log(persona)  //aca voy a ver juancito
console.log(persona2)  //y aca tmb voy a ver juancito


/////////////////////////////////////////////////////
const productos = [
    {id:1,nombre: "manzanas", stock: 10 },
    {id:2,nombre: "peras", stock: 5 },
    {id:3,nombre: "bananas", stock: 15 },
    {id:4,nombre: "uvas", stock: 8 },
    {id:5,nombre: "naranjas", stock: 2 },
    {id:6,nombre: "kiwis", stock: 4 },
    {id:7,nombre: "frutillas", stock: 7 },
]


//encontrar un producto en bas al id y retornarlo
//si no lo encuentra retornar false

//creo una funcion que recorra toda mi clase y que vaya buscando dentro de cada objeto
const encontrar = (identificador) = >{

    for(let i = 0;i<productos.length ;i++) {
        if(productos[i].id === identificador){
            return productos[i]; //el return aca sirve para que se corte el ciclo
        }
    }

    return false
};

let productoEncontrado = encontrar(4);
console.log(productoEncontrado)


//encontrar un elemento por id y sumarle 10 unidades

const encontrarYsumar = (iden) = >{
    Let miProducto =encontrar(iden) //reutilizo la funcion de arriba
    miProducto.stock+=10
    
};



//Filtrar productos que tengan stock mayor que 5 y devolver
//un array con esos productos

const filtrador = (miArray,)=>{
    let nuevoArray = []
    for (let i = 0; i < miArray.length; i++)miA{
        if(miArray[i].stock > 5 ){ // 
        nuevoArray.push(miArray[i])
        }
    }
    return nuevoArray
}
filtrador (productos)


////////////////////////////////////////////////////////////////////////
////PROGRAMACION FUNCIONAL O DECLARATIVO

productos.FILTER (ELEMENTO => ELEMENTO.STCOK > 5)

//callback, a estos metodos se les pasa funciones como argumentos
productos.filter(()=>{});
productos.map(()=>{});
productos.find(()=>{});


//funciones de orden superior
//funciones que retornan una funcion
//funcion que reciba como argumento otra funcion

const saludar = (nombre, otraFuncion)=>{
    console.log("hola " + nombre)
    otraFuncion()
}

const terminarSaludo ()=>{
    console.log("adios")
}

saludar ("pepe",terminarSaludo)


//un callback es una funcion que se pasa como arguemento a otra funcion
const items = [
    {id:1,nombre: "manzanas", stock: 10 },
    {id:2,nombre: "peras", stock: 5 },
    {id:3,nombre: "bananas", stock: 15 },
    {id:4,nombre: "uvas", stock: 8 },
    {id:5,nombre: "naranjas", stock: 2 },
    {id:6,nombre: "kiwis", stock: 4 },
    {id:7,nombre: "frutillas", stock: 7 },
];

//metodos de arrays
//find--> siempre devuelve el elemento o undefined(siempre el primero, corta la ejecucion)
//retornar en cada vuelta un booleano
let itemEncontrado= items.find((elemento)=>{return elemento.id === 5});

//teniendo en cuenta lo de la funciones flecha, me quedaria asi:
let itemEncontrado= items.find(elemento => elemento.id === 5);

//igual pero pidiendo que me ingresen el id
let id = Number(prompt("dame el id"))
let itemEncontrado = items.find( (elemento)=> {elemento.id === id})

//tambien puedo acceder al elemento
let itemEncontrado = items.find( (elemento,i)=> {console.log("el elemento "+elemento.nombre+ " esta en la posicion " + i)})


//filter -----> devuelve un nuevo array
//siempre retornar un booleano
//en este caso va creando un nuevo array con los elementos con stock > 5
let arrayFiltrado = items.filter((elemento)=>elemento.stock > 5)



//tener el mismo array de arriba pero sacarle el stock

const recorrerYCambiar = (arreglo) =>{
    let nuevoArray = []
    for (let i = 0; i < arreglo.length; i++) {
        nuevoArray.push({id:arreglo[i].id, nombre:arreglo[i].nombre , precio:100,})
        
    }
    return nuevoArray
}

let nuevoArray = recorrerYCambiar (items)

//lo mismo de arriba pero con map
//sirve para recorrer un array y devolver uno nuevo
//siempre  el nuevo array va a ser un array de la nueva longitud