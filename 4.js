// map filter reduce 
// 1.Map
a=[1,2,3,4,5,63,34,56];
let a2=a.map((value)=>{
    return value*2;
})
console.log(a,a2);
// 2.Filter 
let a3=a.filter((value)=>{
    return value>6;
})
console.log(a3);
// 3.Reduce 
let a4=a.reduce((val1,val2)=>{
    return val1+val2;
})
console.log(a4);
