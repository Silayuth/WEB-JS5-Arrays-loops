//---slice(): Returns a shallow copy of a portion of an array

let fruit_products_slice = ['apple', 'banana', 'mango', 'pear', 'strawberry', 'orange'];

    const newArray = fruit_products_slice.slice(1, 3); // Returns elements at index 1, 2, and 3
    console.log(newArray); // Output: ['banana', 'mango']
    console.log(fruit_products_slice);



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



// //-----------------------------Real World Splice() & Splice()------------------------//

const cart = ['milk', 'eggs', 'Bananas','shampoo'];

function removeItem(itemName) {
  let itemIndex = cart.indexOf(itemName);
      console.log(itemIndex)
  if (itemIndex === -1) {
    console.error('Item not found in the cart.');
    return;
  }

  const itemToRemove = cart.splice(itemIndex, 1);

  console.log(cart);
  console.log(`Item ${itemToRemove} removed from the cart.`);
}
removeItem('Bananas');
console.log(cart); 