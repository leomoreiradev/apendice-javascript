// Destructuting

const fruits = ["Maça", "Laranja", "Mamão"];

//Com array
const [maca, laranja, mamao] = fruits;

console.log(maca);
console.log(laranja);
console.log(mamao);

const productDetails = {
  name: "Mouse",
  price: 39.99,
  category: "Perifericos",
  color: "cinza",
};

//Com objeto
const { name, price, category, color } = productDetails;

console.log(`O nome do produto é ${name}, custa R$${price}, 
pertence a categorias ${category} e sua cor é ${color} `);
