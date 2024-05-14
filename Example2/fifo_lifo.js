//---------------------------------push------------------------------------//
// const NJMKL = ["Neeti","James","Mean","Kan","Lak"];
// NJMKL.push("jsd7*");
// console.log(NJMKL);


//---------------------------------shift---------------------------------//
// const NJMKL = ["Neeti","James","Mean","Kan","Lak", "jsd7*"];
// NJMKL.shift();
// console.log(NJMKL);

//---------------------------------pop--------------------------------//
// const NJMKL = ["Neeti","James","Mean","Kan","Lak", "jsd7*"];
// NJMKL.pop();
// console.log(NJMKL);

//------------------------------FIFO--------------------------------//
// Initialize an array to represent our inventory
let fruitInventory = [];

// Function to add new fruits to the inventory
function addFruitToInventory(fruit) {
    // Add the new fruit batch to the end of the inventory array
    fruitInventory.push(fruit);
}

// Function to sell fruits from the inventory
function sellFruitFromInventory() {
    // Check if there are any fruits in the inventory
    if (fruitInventory.length > 0) {
        // Sell the oldest fruit (first element in the array) from the inventory
        const soldFruit = fruitInventory.shift(); // Remove the first element from the array
        console.log(`Sold ${soldFruit} from inventory.`);
    } else {
        console.log("No fruits available in inventory to sell.");
    }
}

// Example usage:
addFruitToInventory("Apple"); 
addFruitToInventory("Banana"); 
addFruitToInventory("Orange"); 

console.log(fruitInventory)
sellFruitFromInventory(); // Sell the oldest fruit (Apple) from the inventory
sellFruitFromInventory(); // Sell the next oldest fruit (Banana) from the inventory






//------------------------------------LIFO----------------------------//

// Simulating a browser history stack using an array (LIFO)
const browserHistory = [];

// Function to simulate navigating to a new page
function navigateTo(url) {
    console.log(`Navigating to ${url}`);
    browserHistory.push(url); // Adding the new page to the top of the stack
}

// Function to simulate pressing the back button
function goBack() {
    if (browserHistory.length > 0) {
        const previousPage = browserHistory.pop(); // Removing the top page from the stack
        console.log(`Going back to ${previousPage}`);
    } else {
        console.log('No more pages in history.');
    }
}

// Simulate navigating through pages
navigateTo('https://thailand.generation.org/'); // Homepage
navigateTo('https://thailand.generation.org/#picker'); // Program Page
navigateTo('https://thailand.generation.org/programs/jsd/'); // learn more JSD Page

goBack(); // Pressing the back button (LIFO operation)
goBack(); // Pressing the back button again
goBack(); // Pressing the back button once more

