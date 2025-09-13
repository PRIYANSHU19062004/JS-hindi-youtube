const userEmail="h@hitesh.ai"
if(userEmail){ //Here we didn't do any comparision
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}
const user1Email=""
if(user1Email){// as user1Email is empty string so else statement will execute.
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

//++++++++++++++++++++++++++++++++++
//falsy values-false,0,-0,BigInt 0n,"",null,undefined,NaN(Not a Number)
//truthy  values- "0",'flase'," ",[],{}empty object,function(){}empty function
const honda=[]
// if(honda.length===0){
//     console.log("Array is empty")
// }
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}

//++++++++++++++++++++++++++++++//
//Nullish Coalescing Operator(??):null undefined
//The nullish coalescing operator (??) is a logical operator in JavaScript that provides a default value only if the left-hand side is null or undefined.
let val1;
//val1=5??10 //5
//val1=null??10 //10
//val1=undefined??15//15
val1=null??10??20 //first value 10 will be assigned.

console.log(val1);

//Terniary Operator
//condition?true:false
const iceTeaPrice=100
iceTeaPrice<=80?console.log("less than 80"):console.log("more than 80") //more than 80

