const products = [
  {
    id: 1,
    name: "Taladro Percutor 800W",
    description: "Ideal para trabajos en concreto, madera y metal.",
    price: 4200,
    stock: 7,
    image: "/img/taladro800.jpg",
    category: "taladro",
  },
  {
    id: 2,
    name: "Taladro Atornillador Inalámbrico",
    description: "Taladro a batería 18V con velocidad variable.",
    price: 6900,
    stock: 4,
    image: "/img/taladroinalambrico.webp",
    category: "taladro",
  },
  {
    id: 3,
    name: "Martillo de Uña 16oz",
    description: "Martillo de acero forjado con mango antideslizante.",
    price: 850,
    stock: 15,
    image: "/img/martillouña.webp",
    category: "martillo",
  },
  {
    id: 4,
    name: "Martillo Mazo de Goma",
    description: "Ideal para trabajos donde no se debe dañar la superficie.",
    price: 690,
    stock: 10,
    image: "/img/martillogoma.jpg",
    category: "martillo",
  },
  {
    id: 5,
    name: "Cortadora de Césped Eléctrica",
    description: "Motor de 1200W, ideal para jardines medianos.",
    price: 14500,
    stock: 3,
    image: "/img/cortapastoelectrica.jpg",
    category: "cortacesped",
  },
  {
    id: 6,
    name: "Cortadora de Césped a Nafta",
    description: "Potente motor de 4 tiempos, arranque manual.",
    price: 22800,
    stock: 2,
    image: "/img/cortapastoanafta.jpg",
    category: "cortacesped",
  }
];


const getProducts = () => {
  return new Promise ((resolve, reject) => {

    setTimeout(()=>{
      resolve(products);

    },1500);
  }
);
};



const getProductById = (productId) =>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=> {
      const product = products.find((product)=>product.id === Number(productId)) ;
      resolve(product);
    },1500)
  })
}

export {getProducts,getProductById};