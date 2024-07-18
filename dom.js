//acceder al documento mediante una variable globar

console.log(document.body); //variable document

//RECUPERAR ELEMENTOS
//obtiene un elemento en base a un id
let subtitle = document.getElementById("subtitulo");
console.log(subtitle);
//obtiene un elemento en base a la clase
//trae un array con todos los elementos
let title = document.getElementsByClassName("titulo");
console.log(title);

//en base a la etiqueta
let miH3 = document.getElementsByTagName("h3");
console.log(miH3);

//puedo bscar por clase(.clase), elemento(h4), o id(#id)
//me trae la primer coincidencia
let miElemento = document.querySelector(".titulo");
console.log(miElemento);

//me trae todos los que tienen esa clase
let misElementosTitles = document.querySelectorAll(".titulo");
console.log(misElementosTitles);

//me trae el texto de un nodo
miElemento.innerText = "este es mi nuevo titulo";

//
let contenedorDeProductos = document.querySelector(".container");
console.log(contenedorDeProductos.innerHTML); //accedo a los hijos de ese contenedor
contenedorDeProductos.innerHTML = `<h3>nuevo h3</h3>`;

//CREAR ELEMENTOS

//crear el elemento
let categorias = document.createElement("div");
categorias.innerHTML = `<h3> este es el nuevo nodo desde js</h3>`;
document.body.append(categorias); //lo agrego en el body

let categoria = document.createElement("div");
document.body.append(categoria);

let tarjeta = document.createElement("h3");
tarjeta.innerText = "esta es mi primer tarjeta";
document.body.append(tarjeta);

categorias.appendChild(tarjeta);
