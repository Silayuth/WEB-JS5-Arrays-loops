// // for loop

// const NJMKL = ["Neeti","James","Mean","Kan","Lak"];
// for (let i = 0; i < NJMKL.length; i++){
//     const currentItem = NJMKL[i];
//     console.log('i = ' + i + ' NJMKL ' + currentItem);
// }


//while loop
const NJMKL = ["Neeti","James","Mean","Kan","Lak"];
let i = 0;

while (i < NJMKL.length) {
    const currentItem = NJMKL[i];
    console.log('i = ' + i + ' NJMKL ' + currentItem);
    i++;
}

//array in array
const theaterSeats = [
    ['A1', 'A2', 'A3', 'A4'],
    ['B1', 'B2', 'B3', 'B4'],
    ['C1', 'C2', 'C3', 'C4']
];

for (let i = 0; i < theaterSeats.length; i++) {
    const rowIdentifier = i + 1;
    
    for (let j = 0; j < theaterSeats[i].length; j++) {
        const seatIdentifier = theaterSeats[i][j];
        console.log(`Row ${rowIdentifier}, Seat ${j + 1}: ${seatIdentifier} (i = ${i}, j = ${j})`);
    }
}

