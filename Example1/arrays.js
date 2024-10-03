//----------------------------forEach----------------------//
const NJMKL = ["Neeti","James","Mean","Kan","Lak"];
console.log(NJMKL);

// //using for loop
for (let i = 0; i < NJMKL.length; i++) {
  console.log(NJMKL[i]);
}

// Using map to log each element in the array
NJMKL.map(function(member) {
  console.log(member);
});

NJMKL.map((member) => {
  console.log(member);
});


