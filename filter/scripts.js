//filter é um metodo de array que filtra dados
// filtra os dados que não queremos e traz apenas
//o que estamos esperamos daquele array

//Array original
const arr = [1, 2, 3, 4, 5];

//Trazer apenas os numeros maiores
//Novo array
const highNumbers = arr.filter((n) => {
  //Ser n maior ou igual a 3 retorne dentro do array
  if (n >= 3) {
    return n;
  }
});

console.log(highNumbers);

const users = [
  { name: "Matheus", available: true },
  { name: "Pedro", available: false },
  { name: "João", available: false },
  { name: "Marcos", available: true },
];

//Traga apenas os usuarios available = true
const availableUsers = users.filter((user) => user.available);

//Traga apenas os usuarios available diferente de true !user.available
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);
