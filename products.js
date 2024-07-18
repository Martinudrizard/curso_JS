const products = [
  {
    id: 1,
    title: "smartphhone",
    price: 699.99,
    description:
      "un smartphone de ultima generacion con pantalla OLED y camara de 108 MP",
    category: "electronica",
    imageUrl: "https://via.placeholder.com/30",
  },
  {
    id: 2,
    title: "laptop",
    price: 1299.99,
    description: "laptop potente con i7 y 16 gb de ram",
    category: "electronica",
    imageUrl: "https://via.placeholder.com/30",
  },
  {
    id: 3,
    title: "auriculares inalambricos",
    price: 199.99,
    description:
      "auriculares con cancelacion de ruido y hasta 20 horas de autonomia",
    category: "electronica",
    imageUrl: "https://via.placeholder.com/30",
  },
  {
    id: 4,
    title: "reloj inteligente",
    price: 299.99,
    description:
      "reloj inteligente con monitor de ritmo cardiaco y gps integrado",
    category: "electronica",
    imageUrl: "https://via.placeholder.com/30",
  },
  {
    id: 5,
    title: "tablet",
    price: 499.99,
    description: "tablet con pantalla de 10 pulgadas y 64 gb de almacenamiento",
    category: "electronica",
    imageUrl: "https://via.placeholder.com/30",
  },
];

console.log(products);

let containerProduct = document.createElement("div");
document.body.append(containerProduct);

//for (let i = 0; i < products.length; i++) {
//const productCard = document.createElement("div");
//productCard.innerHTML = `<h2>${products[i].title}</h2><h3> ${products[i].description}</h3> <h>${products[i].price}</h4><img src ="" alt=" "/>`;
//productCard.className = "card";

//containerProduct.appendChild(productCard);
//}

products.forEach((elemento) => {
  const productCard = document.createElement("div");
  productCard.innerHTML = `<h2>${elemento.title}</h2>
  <h3> ${elemento.description}</h3> 
  <h4>${elemento.price}</h4><img src ="" alt=" "/>`;
  productCard.className = "card";
  containerProduct.appendChild(productCard);
});
