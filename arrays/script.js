// let marks=[97,82,75,64,36]
// console.log(marks);
// console.log(marks.length);//property



// let heroes=["iroman","thor","hulk","spiderman"]
// console.log(heroes);

// for (let i=0; i< heroes.length;i++){
    // console.log(heroes[i]);
// }

//  for(let hero of heroes){
    //  console.log(hero);
    //  console.log(hero.toUpperCase());

// }

let marks=[85,97,44,37,76,60];

let sum=0;

for(let val of marks){
    // console.log(val);
    sum= sum + val;
}
let avg =sum/marks.length;
console.log(`avg marks of the class=${avg}`)