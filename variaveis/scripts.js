//var let e const
var x = 10;
var y = 15;
if (y > 10) {
  var x = 5;
  console.log(x);
}

console.log(x);

let a = 10;
let b = 15;
if (b > 10) {
  let a = 5;
  console.log(a);
}

console.log(a);

let index = 100;

for (let index = 0; index < 5; index++) {
  console.log(index);
}
console.log(index);

function logName() {
  const name = "Matheus";
  console.log(name);
}

const name = "Pedro";

logName();

console.log(name);
