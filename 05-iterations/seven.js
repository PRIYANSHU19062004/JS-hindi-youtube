const myNumbers=[1,2,3,4,5,6,7,8,9,10]

//const newNums=myNumbers.map((num)=>num+10) //map returns
//console.log(newNums);

//Chaining
const newNums=myNumbers
   .map((num)=>num*10)
   .map((num)=>num+1)  //here num will get the values return from the above map.
   .filter((num)=>num>=40)
console.log(newNums);

