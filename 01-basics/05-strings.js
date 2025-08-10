const name="hitesh-hc" 
//console.log(name+repoCount+"Value")
console.log(`Hello my name is ${name}and my rep count is ${repoCount}`) //String interpolation
const gameName=new String('hitesh-hc-com') //we are not creating a primitive string, we are creating a String object using the String constructor.
/*"hitesh-hc-com" (with quotes) → primitive string
new String("...") → String object (wrapper around the primitive)
The object property has extra properties and methods.Here string is an object .Index is a key and char is a value.
JS automatically wraps primitive strings in a temperory String object when we call metods.
*/
let srere='hdsifssf' 
console.log(typeof(gameName)) //object type
console.log(typeof srere) //string type
console.log()
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length); //8
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(3)); 
console.log(gameName.indexOf('t')) //go through all methods of Strings for the intereview
const newString=gameName.substring(0,4) //will not include the value at 4th index.
//We can't give -ve value to substring().It will not obey it
console.log(newString)
const anString=gameName.slice(0,4)
const anotherString=gameName.slice(-8,4)//If we give -ve value,It will start from reverse
console.log(anString)
console.log(anotherString)
const newStringOne= " hitesh "
console.log(newStringOne.trim()) //Will delete leading and trailing space.It works on only spaces and line terminations(/n)
const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh')) //will return true if url contains hitesh else false
console.log(gameName.split('-'))//will array split on basis of '-'
