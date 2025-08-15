//array is of object type
//Arrays in JavaScript are resizable.They can be mix of datatypes.
//JavaScript arrays are not associative arrays and so,array elements cannot be accessed using arbitrary strings as indexes.
//JavaScript array-copy_operations create shallow copies.
//A shallow copy of and object is a copy whose properties share the same references(point to the same underlying values)as those of the source object from which the copy was made.Any change to the copy lead to the same change in the original array
//A deep copy of an object is a copy whose properties don't share the same references as those of the source object.
const myArr=[0,1,3,5,34,5]
const myHeroes=["shaktiman","naagraj"]
const myArr2=new Array(1,2,3,4)
console.log(myArr[0])
//Array methods

myArr.push(6)//Add values inside an array
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(9)//Add values inside an array at start.But it raises a problem that it shifted all the values of an array
console.log(myArr)
myArr.shift()//Remove values from the array at the start
console.log(myArr.includes(9)) //will return false or true
console.log(myArr)
console.log(myArr.indexOf(9))//will return -1 as 9 dont exist in the array right now.
///////////////////////JOIN////////////////////
//binding array
const newArr=myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof(newArr))

//slice,splice
console.log("A",myArr)
const myn1=myArr.slice(1,3) //include 1 and 2
console.log(myn1)
console.log("B",myArr)
const myn2=myArr.splice(1,3)
console.log(myn2)
console.log("C",myArr)

