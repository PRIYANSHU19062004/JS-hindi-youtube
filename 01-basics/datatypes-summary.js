//Data are categorized as primitive and non primitive based on how data is stored in memory and accessed.
//Primitive has 7 types.They are call by value.
//String,Number,Boolean,null,undefined,Symbol,BigInt
//Reference(Non Primitive)
//Array,Objects,Functions
const id=Symbol('123')
const anotherId=Symbol('123')
const OutsideTemp=null
console.log(id===anotherId); //false
/*The '123' is not a value stored inside the symbol — it’s just the description (also called the label) for that symbol.*/
/*The description ('123' here) is just a label for debugging — it does not affect the identity of the symbol.

Every time you call Symbol('123'), you get a brand new unique symbol.*/
const bigNumber=
343445543535353554n//Now it is already BigInt at background
const heros=["shaktiman","naagraj","doga"]
//Object written inside {} in the form of key value pairs
let myObj={
   name:"hitesh",
   age:22,
}
//function in JS can be treated as a variable
const myFunction=function(){
    console.log("Hello world");
}
console.log(typeof bigNumber)
console.log(typeof OutsideTemp)
console.log(typeof myFunction) //Actually it is object function
console.log(typeof id)
console.log(typeof myObj)
