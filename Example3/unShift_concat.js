//----------------------------------------unshift-----------------------------------------//

const NJMKL = ["Neeti","James","Mean","Kan","Lak"];

NJMKL.unshift("Generation"); //add Generation to the beginning of the array
console.log(NJMKL);

NJMKL.unshift("GenKX", 99);//add GenKX and 99 to the beginning of the array
console.log(NJMKL); 


//-------------------------------------Real World----------------------------//
// Existing email messages in the inbox
// const existingEmails = [
//     {
//       sender: 'john@example.com',
//       subject: 'Meeting agenda',
//       body: 'Hi team, please find attached the agenda for our meeting tomorrow.'
//     },
//     {
//       sender: 'jane@example.com',
//       subject: 'Vacation request',
//       body: 'Hi manager, I would like to request vacation leave for next week. Please let me know if it\'s approved.'
//     }
//   ];
  
//   console.log('Existing email messages in the inbox:');
//   console.log(existingEmails);
  
//   // New incoming email
//   const newEmail = {
//     sender: 'mary@example.com',
//     subject: 'Project update',
//     body: 'Hi team, here is the latest update on our project progress.'
//   };
  
//   // Adding the incoming email to the beginning of the existing emails (inbox)
//   existingEmails.unshift(newEmail);
  
//   // Display updated email inbox with the incoming email at the top
//   console.log('\nUpdated email inbox after adding incoming email:');
//   console.log(existingEmails);
  


//-----------------------------------------concat-----------------------------------------//
// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const combineArray = array1.concat(array2);
// console.log(combineArray) //output [1,2,3,4,5,6]

// //----------------------------------Real World-----------------------------//
// // User's browsing history
const userHistory = ['Milk', 'Eggs'];
const trendingItems = ['Shampoo', 'Sun Cream'];
const newArrivals = ['Electric Toothbrush', 'Summer Fruit Drink'];

// Merging the arrays to generate recommended products
const recommendedProducts = userHistory.concat(trendingItems, newArrivals);

// Displaying recommended products to the user
console.log('Recommended Products:');
console.log(recommendedProducts);




