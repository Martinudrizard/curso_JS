const paletas = [
  {
    marca: "adidas",
    modelo: "metalbone hrd 3.3",
    precio: "$450",
    caracteristicas:
      "Adidas Metalbone 3.3, pala de diamante oversize de Ale Galán. Diseñada para jugadores de alto rendimiento. Modelo de pala de la colección 2024.",
    material: "soft eva",
    imagen: "imagenes/adidashrd3.3.jpg",
  },
  {
    marca: "adidas",
    modelo: "metalbone pro edt by ale galan",
    precio: "$550",
    caracteristicas:
      "Adidas Metalbone 3.3, pala de diamante oversize de Ale Galán. Diseñada para jugadores de alto rendimiento. Modelo de pala de la colección 2024.",
    material: "aluminio y carbono",
    imagen: "imagenes/adidas.2024.jpg",
  },
  {
    marca: "nox",
    modelo: "NOX AT10 GENIUS 18K AGUSTIN TAPIA 2024",
    precio: "$324",
    caracteristicas:
      "Nox AT10 Genius 18K Agustín Tapia 2024, pala en forma de lagrima para los jugadores más exigentes. Hecha con materiales de lujo como el núcleo multicapa y las caras de Carbon Alum 18K.",
    material: "carbono 18k",
    imagen: "imagenes/NOX AT10 GENIUS 18K AGUSTIN TAPIA 2024.jpg",
  },
  {
    marca: "nox",
    modelo: "NOX LA10 BY LEO AUGSBURGER 2024",
    precio: "$219",
    caracteristicas:
      "Pala Nox La10 By Leo Augsburger 2024, una pala de diamante para jugar como el argenti Leo Augsburguer. Resistente y resolutiva.",
    material: "carbono 12k",
    imagen: "imagenes/NOX LA10 BY LEO AUGSBURGER 2024.jpg",
  },
  {
    marca: "babolat",
    modelo: "BABOLAT TECHNICAL VIPER JUAN LEBRON 2024",
    precio: "$379.95",
    caracteristicas:
      "Esta pala está diseñada para proporcionar máxima potencia y precisión, ideal para jugadores agresivos que buscan un rendimiento superior en la pista.",
    material: "carbono y eva",
    imagen: "imagenes/BABOLAT TECHNICAL VIPER JUAN LEBRON 2024.jpg",
  },
  {
    marca: "babolat",
    modelo: "BABOLAT TECHNICAL VERON JUAN LEBRON 2024",
    precio: "$259.94",
    caracteristicas:
      "Esta pala está diseñada para proporcionar un equilibrio entre potencia y control, ideal para jugadores que buscan una pala versátil y de alto rendimiento en la pista.",
    material: "carbono y eva",
    imagen: "imagenes/BABOLAT TECHNICAL VERON JUAN LEBRON 2024.jpg",
  },
];

console.log(paletas);

//creo un elemento div en el cuerpo y voy iterando sobre cada elemento en el
//arreglo de paletas y creo un div para cada paleta
//depsues agrego un boton de comprar para cada tarjeta
//y despues agrego cada tarjeta al contenedor container paletas
let containerPaletas = document.createElement("div");
containerPaletas.className = "containerPaletas";
document.body.append(containerPaletas);

paletas.forEach((elemento) => {
  const paletasCard = document.createElement("div");
  paletasCard.innerHTML = `
    <img src="${elemento.imagen}" alt = "imagen">
    <h2>${elemento.marca}</h2>
    <h2>${elemento.modelo}</h2> 
    <h2>${elemento.caracteristicas}</h2> 
    <h2>${elemento.material}</h2> 
    <h4>${elemento.precio}</h4>
  `;
  const comprarButton = document.createElement("button");
  comprarButton.textContent = "Comprar";
  paletasCard.className = "card";
  paletasCard.appendChild(comprarButton);
  containerPaletas.appendChild(paletasCard);
});

//pregunto al usuario que marca de paleta quiere comprar

//////////////////////////
let continuar = true;
let precioTotal = 0;

while (continuar) {
  let marcaAComprar = prompt("que marca de paletas quiere comprar");
  let marcaFiltrada = paletas.filter(
    (elemento) => elemento.marca === marcaAComprar
  );
  //validacion por si la marca no existe
  if (marcaFiltrada.length === 0) {
    alert("marca no existente, vuelve a ingresar");
    continue;
  }
  console.log(
    "estos son los modelos disponibles de la marca seleccionada: ",
    marcaFiltrada
  ); //le muestro el array y ahora lo hago elegir entre el modelo

  let modeloAComprar = prompt("que modelos de los mostrados desea comprar?");
  let modeloFiltrado = marcaFiltrada.find((elemento) => elemento.modelo);
  //validacion de modelo
  if (!modeloFiltrado) {
    alert("modelo no existente, vuelve a ingresar");
    continue;
  }
  console.log("esto es todo sobre su modelo: ", modeloFiltrado);
  ///validacion por la cantidad
  let cantidadAComprar = Number(prompt("cuantas paletas desea comprar?"));
  if (isNaN(cantidadAComprar) || cantidadAComprar <= 0) {
    alert("cantidad no valida, vuelve a ingresar");
    continue;
  }

  //convierto el precio a numero para poder hacer la cuenta
  let precioConNumero = Number(modeloFiltrado.precio.replace("$", ""));
  let precioUnidad = precioConNumero * cantidadAComprar;
  precioTotal += precioUnidad;
  console.log(
    `Has seleccionado ${cantidadAComprar} paletas del modelo ${modeloFiltrado.modelo} de la marca ${modeloFiltrado.marca}, que cuesta ${precioUnidad}.`
  );
  continuar = confirm("desea seguir comprando?");
}

alert(`El total a pagar por toda la compra es: $${precioTotal}`);

//si me dice NaN es porque no me toma el numero
