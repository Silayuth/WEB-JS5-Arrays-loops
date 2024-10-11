
for (let i = 0; i < 5; i++) {
  console.log(i);
  for (let j = 0; j < 5; j++) {
    console.log(`j = ${j}`);
  }
}

const nestedArr = [
  ['A0', 'A1', 'A2'],
  ['B0', 'B1', 'B2'],
  ['C0', 'C1', 'C2']
];

console.log(nestedArr[2]);
console.log(nestedArr[2][0]);