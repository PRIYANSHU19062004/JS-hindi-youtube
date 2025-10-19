const myNumbers=[1,2,3,4,5,6,7,8,9,10]

//const newNums=myNumbers.map((num)=>num+10) //map returns
//console.log(newNums);

//Chaining
const newNums=myNumbers
   .map((num)=>num*10)
   .map((num)=>num+1)  //here num will get the values return from the above map.
   .filter((num)=>num>=40)
console.log(newNums);

//**************************************Difference between map and filter *******************************************//
/*
Feature               	                                        map()	                                                                    filter()
Purpose	                                          Transforms each element of an array	                                           Selects elements based on a condition
Returns	                                              A new array of the same length	                                              A new array of equal or smaller length
Callback Return Value	                            Any value (used to build new array)	                                          true or false (to decide if element is included)
Changes Original Array	                                      ❌ No	                                                                              ❌ No
Typical Use Case	                                   Modify or compute something for each element	                                     Extract only required elements
Example	                                               arr.map(x => x * 2) → [2, 4, 6]	                                              arr.filter(x => x > 2) → [3]
Output Size                                               	Same as input	                                                              Smaller or equal to input
Chainable	                                                    ✅ Yes	                                                                           ✅ Yes
*/