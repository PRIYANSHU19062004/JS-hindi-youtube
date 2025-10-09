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
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//There are two types of memories-Stack(Primitive Type) and Heap(Non Primitive)
let myYoutubename="sofsaofsff.com"
let anothername=myYoutubename //anothername gets the copy of value ,not the exact value
console.log( anothername)
anothername="chaiorcode"
console.log(anothername)
console.log(myYoutubename)
let userOne={
    email:"sfasfas",
    upi:"sfadfa"
}
let userTwo=userOne
userTwo.email="hitesh.googl.com"
console.log(userOne.email)
console.log(userTwo.email)
/*The variable stores only a reference (address) to that object in the heap.

When assigning a non-primitive to another variable, JavaScript copies the reference, so both variables point to the same object.
No matter what the variables are always stored in stack memory.But the non-primitive variable in the stack only stores a reference (address) to the object in the heap.
For the diagram please refer to notes of Day-04
*/

//++++++++++++++++++++++++++++++++++++++++++//
/*In JavaScript, typeof is an operator, not a function.
It doesn’t need parentheses (though you can use them for clarity).

It works directly on its operand, like + or !.
It’s a unary operator (takes only one operand) and returns a string describing the type.*/

