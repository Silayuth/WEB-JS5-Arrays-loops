// for (let i = 0; i < 5; i++){
//     console.log('Hello World ' + i);
// }

// for (let i = 0; i <= 5; i++){
//     if (i % 2 !== 0 ) console.log('I am odd ' + i);
// }

// for (let i = 5; i >= 1; i--){
//     if (i % 2 !== 0 ) console.log('I am odd ' + i);
// }

// let arr = ["a", "b", "c"];
// for (let i=0; i<arr.length; i++) { // will loop 3 times (length of arr = 3)
//     console.log(arr[i]);
// }




//---------------------------------For loop-----------------//
const inventory = [
  { product_name: "Sticky Notes", quantity_in_stock: 20, unit_price: 0.8 },
  { product_name: "Highlighters", quantity_in_stock: 15, unit_price: 2 },
  { product_name: "All-Purpose Cleaner", quantity_in_stock: null, unit_price: 2.5 },
  { product_name: "Washing up liquid", quantity_in_stock: 15, unit_price: 1.8 },
  { product_name: "Laundry Detergent", quantity_in_stock: 20, unit_price: 3 }
];

let totalValue = 0;

for (let i = 0; i < inventory.length; i++) {
  const product = inventory[i];
  if (product.quantity_in_stock !== null) {
    totalValue += product.quantity_in_stock * product.unit_price;
  }
}

console.log("Total value of all products in inventory: $" + totalValue);




// // post-increament (i++) - assign before add
// let num = 0;
// let a1 = num++; //assign a1 = num then num = num+1
// console.log(a1);
// console.log(num);

// // // pre-increament (++i) - add then assign
// let num1 = 0;
// let b1 = ++num1; // num1 = num1+1 then assing b1 = num1
// console.log(b1);
// console.log(num1);


// // let i = 0;
// // while (i < 5) {
// //   console.log(i++);
// // }

// // let j = 0;
// // while (j < 5) {
// //   console.log(++j);
// // }



// // // Pre-increment //
// // // --> If you need the variable to be incremented first and then used in an operation, use pre-increment.

// // // Loop Control: When you want to increment a loop variable before using it as a condition.
// // for (let i = 0; i < 5; ++i) {
// //     console.log(i); // i is incremented before being used in the loop body
// // }
// // // Output: 0, 1, 2, 3, 4

// // // Accumulation: When you want to accumulate a value while iterating and need the updated value for each iteration.
// // let sum = 0;
// // for (let i = 1; i <= 5; ++i) {
// //     sum += i; // Increment 'sum' with the updated 'i' value in each iteration
// // }
// // console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)