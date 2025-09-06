const name="hitesh-hc" 
let repoCount=32
//console.log(name+repoCount+"Value")
console.log(`Hello my name is ${name} and my rep count is ${repoCount}`) //String interpolation
const gameName=new String('hitesh-hc-com') //we are not creating a primitive string, we are creating a String object using the String constructor.
/*"hitesh-hc-com" (with quotes) → primitive string
new String("...") → String object (wrapper around the primitive)
The object property has extra properties and methods.Here string is an object .Index is a key and char is a value.
JS automatically wraps primitive strings in a temperory String object when we call methods.
*/
let srere='hdsifssf' 
console.log(typeof(gameName)) //object type
console.log(typeof srere) //string type
console.log()
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length); //13
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(3)); 
console.log(gameName.indexOf('t')) //go through all methods of Strings for the intereview
const newString=gameName.substring(0,4) //will not include the value at 4th index.
//We can't give -ve value to substring().It will not obey it
console.log(newString)
const anString=gameName.slice(0,4)
const anotherString=gameName.slice(-8,4)//If we give -ve value,It will start from reverse so start from gameName.length+(-8)index which is 13-8=5th index and will end at 4th index but will not include element aat 4th index.
//As(5>4)or(starting index>ending index) so it will give and empty string as the result.
console.log(anString)
console.log(anotherString)
const newStringOne= " hitesh "
console.log(newStringOne.trim()) //Will delete leading and trailing space.It works on only spaces and line terminations(/n)
const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh')) //will return true if url contains hitesh else false
console.log(gameName.split('-'))//will array split on basis of '-'

//++++++++++++++++++++++++++++++++++++++++++++Difference between substring and slicing of Strings in Javascript++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*Both .substring() and .slice() are JavaScript string methods for extracting a portion of a string, but they have subtle differences in how they handle parameters and negative values.
string.substring(startIndex, endIndex)
string.slice(startIndex, endIndex)

startIndex → where extraction begins (inclusive)
endIndex → where extraction stops (exclusive)
Feature	                                               .substring()	                                                                   .slice()
Negative indexes	                                Treats negative values as 0	                                                       Counts from the end of the string

Order of parameters                              	If startIndex > endIndex, swaps them automatically	                      Keeps the order — returns "" if start > end


let str = "JavaScript";
console.log(str.substring(4, -2)); // "Java"  (-2 becomes 0)
console.log(str.slice(4, -2));     // "Scri"  (-2 means 2 chars from end)
let str = "JavaScript";
const str= `JavaScript`
console.log(str.substring(8, 4)); // "Scri"  (swapped to substring(4,8))
console.log(str.slice(8, 4));     // ""      (no swap, returns empty string)
*/