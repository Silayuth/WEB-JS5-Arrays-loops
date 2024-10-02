//------------------------------------------------------------------------------------------------------------------------------------//

// //---splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
let fruit_products = ['apple', 'banana', 'mango', 'pear', 'strawberry', 'orange'];

// Replace 'banana' with 'kiwi' at index 1
fruit_products.splice(1, 1, 'kiwi');

console.log(fruit_products); 

// Remove 'mango' and 'pear' from the array starting from index 2
fruit_products.splice(2, 2);

console.log(fruit_products); 

// Add 'grape' and 'pineapple' starting from index 2
fruit_products.splice(2, 0, 'grape', 'pineapple');

console.log(fruit_products); 
