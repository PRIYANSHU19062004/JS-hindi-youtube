let e=300 //e here and e inside block are different.e here has global scope.
if(true){
let a=10
const b=20
var c=30 //both c and d can be accessed outside the block.
d=40
let e=200
console.log("INNER: ",e)
}
//console.log(a); //let and const has block level scope.We will not be able to access a and b outside the block,which is considered good. 
//console.log(b);
console.log(c);//We will be able to access it outside the block which is not good.
console.log(d)//We will be able to access it outside the block which is not good.


function one(){
   const username="hitesh"
   function two(){
    const website="youtube"
    console.log(username);
   }
   //console.log(website);//will give error as website has block scope.
   two()
}
one()
if(true){
   const username="hitesh"
   if(username=="hitesh"){
    const website=" youtube"
    console.log(username+website)
   } 
   //console.log(website) will give error as webiste scope is inside the inner if statement.
}
//console.log(username); will also give error.

//++++++++++++++++++++++++++++interesting++++++++++++++++++++++
console.log(addone(5))//can be written before the function declaration also
function addone(num){
  return num+1
}
console.log(addTwo(5))//But in this case we can't call function before its declaration as here we have hold the function in a variable while declaring it.
const addTwo=function(num){//It is also a technique to create a function.It is like an expressions as a variable is holding the function.
    return num+2
}
