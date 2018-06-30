let foo = 123;
{
  let foo = 456;
  let bar = 456;
}
console.log(foo); // 123
// console.log(bar); // reference error

var func = [];

for (let i = 0; i < 3; i++) {
  func.push(function () { console.log(i); });
}

for (var j = 0; j < 3; j++) {
  console.dir(func[j]);
  func[j]();
}

// const MAXROWS = 10;
// if (rows > MAXROWS) {};

