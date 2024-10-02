
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i = ${i}, j = ${j}`)
    }
}

const matrix = [
    ['A1', 'A2', 'A3', 'A4'],
    ['B1', 'B2', 'B3', 'B4'],
    ['C1', 'C2', 'C3', 'C4']
];

for (let i = 0; i < matrix.length; i++) {
    const row = i + 1;
    for (let j = 0; j < matrix[i].length; j++) {
        const column = matrix[i][j];
        console.log('i = ', i);
        console.log('j = ', j);
        console.log('matrix[i][j] = ', matrix[i][j]);
    }
}

