//-----------------------Create Array---------------------------//
// const NJMKL = ["Neeti","James","Mean","Kan","Lak"];
// console.log (NJMKL); 

//--------------------------Access Array----------------------//
// const NJMKL = ["Neeti","James","Mean","Kan","Lak"];
// console.log ( NJMKL[1]); 

//---------------------------Modifying Array-------------------//
// const NJMKL = ["Neeti","James","Mean","Kan","Lak"];
// console.log (NJMKL); 

// NJMKL[3] = 99;
// console.log(NJMKL)

//----------------------------Length---------------------------//
// const NJMKL = ["Neeti","James","Mean","Kan","Lak"];
// console.log (NJMKL.length);

//----------------------------forEach----------------------//
const NJMKL = ["Neeti","James","Mean","Kan","Lak"];
console.log(NJMKL);

// //using for loop
for (let i = 0; i < NJMKL.length; i++) {
  console.log(NJMKL[i]);
}

// Using map to log each element in the array
NJMKL.map(function(members) {
  console.log(members);
});

NJMKL.map((members) => {
  console.log(members);
});


