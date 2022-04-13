//Map percorre todos os elementos do array querendo modificad os elementos

const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira Eletrica", price: 49.99, category: "Eletro" },
  { name: "Fogão", price: 400.0, category: "Eletro" },
  { name: "Calça Jeans", price: 50.99, category: "Roupas" },
];

//Para cada obj product do array products
//Verifique se a category é igual a 'Roupas'
//se verdade add a propriedade onSale e set o valor true
products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);
