
// while loop
let i = 0;
while (i <= 5) {
    console.log(i)
    i++;
}

let j = 0;
do {
    console.log(j);
    j++;
} while (j <= -500);

// let k = 0;
// while (k < 5) {
//     console.log(k);
// }

let userInput = "";
while (userInput.length !== 8) {
  userInput = prompt("Enter 8 characters:");
}