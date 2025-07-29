// let marks=[97,64,32,49,99,96,86];

// let toppers=marks.filter((val)=>{
// return val>90;
// })
// console.log(toppers);


let n = prompt("enter a Number:");

let arr=[];
for(let i=1; i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((res ,curr)=>{
    return res + curr;
})
console.log("sum=",sum);

let factorial=arr.reduce((res ,curr)=>{
    return res * curr;
})
console.log("factorial=",factorial);