//calcular el precio final de una compra con descuento
//la idea es que ingrese el precio del producto y que ingrese el tipo de producto
//las categorias y sus descuentos son las siguientes
//electronica 20%
//ropa 15%
//alimentos 10%
//muebles 25%
//juguetes 5%
//si la categoria no esta en la lista no aplico descuento

let descuento = (tipoProducto, precio) => {
  switch (tipoProducto) {
    case "electronica":
      return precio * 0.2;
    case "ropa":
      return precio * 0.15;
    case "alimentos":
      return precio * 0.1;
    case "muebles":
      return precio * 0.25;
    case "juguetes":
      return precio * 0.2;
    default:
      return "no aplica descuento y su precio es " + precio;
  }
};

let precioIngresado = Number(prompt("ingrese el precio de su producto"));
let categoriaIngresada = prompt("ingrese la categoria de su producto");
let precioFinal = descuento(categoriaIngresada, precioIngresado);
console.log(precioFinal);
