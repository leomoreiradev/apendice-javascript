// spread operator

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//Usando spread operator para colocar dentro de um so array os elementos de  a1 e a2
const a3 = [...a1, ...a2];
console.log(a3);

//Usando spread operator para colocar dentro de um so array os elementos de  a1 e a4
const a4 = [0, ...a1, 4];

console.log(a4);

//Com objetos
const carName = { name: "Gol" };
const carBrand = { brand: "VW" };
const otherInfos = { km: 10000, price: 49000 };

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 };

console.log(car);
