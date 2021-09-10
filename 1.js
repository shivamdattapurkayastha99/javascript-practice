arr=[1,2,4,6,32] 
function avg(a,b,c) {
    return a+b+c/3;
}
// let a=avg(...arr)
// let b=[4,7,...arr,67] 
// let a=[...arr] 
// let a2=[5,7,9] 
// let a=[...arr,...a2]
obj1={
    name1:"Shivam",
    number:"1234",
    favLang:"javascript"    
}
// let obj2={}
// obj2.name=obj1.name
// obj2.number=obj1.number
// obj2.favLang="Python"
let obj2={...obj1,favLang:"Python"}
// console.log(obj2);
// console.log(a);
// let name1=obj1.name
// let number=obj1.number
// let favLang=obj1.favLang
let {name1,number,favLang}=obj1
console.log(name1,number,favLang);