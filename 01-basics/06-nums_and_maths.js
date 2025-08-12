const score = 400 //Primitive type Number
console.log(score) //400
//It is by default number.But we explicitly define its type
const balance=new Number(100) //Number object (a wrapper around a numeric value).
//This Number object has extra methods and properties available from Number.prototype
console.log(balance) //[Number:100]
console.log(balance.toString())
console.log(typeof balance)
console.log(balance.length)
console.log(balance.toFixed(2)) //will give the output 100.00
//Used specially when making an Ecommerce application
console.log(balance.toFixed(1))//will give the output 100.0
const otherNumber1=23.9966 
const otherNumber2=123.9966 
const otherNumber3=1223.9966 
//In toPrecision() Number of significant digits. Must be in the range 1 - 21, inclusive.
console.log(otherNumber1.toPrecision(3))  //24.0
console.log(otherNumber2.toPrecision(3))  //124
console.log(otherNumber3.toPrecision(3))  //1.22e+3
const hundreds=1000000
console.log(hundreds.toLocaleString())//1,000,000 .The commas are usually by default of US standards
// Write just Number and enter in console.We will see many properties attached with number
//+++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++
//Maths is a library in JS by default
console.log(Math); //It is an object in itself and has many properties.Write this same command in console.
