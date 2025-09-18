//const coding=["js","ruby","Java","python","cpp"]
// const values=coding.forEach( (item) =>{
 //console.log(item);
//  return item
 
//})
//console.log(values); //will give undefined as for each will not return anything.

const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums =myNums.filter((num)=>{
//      return num>4}) //filter returns values.we have to give a call back fxn to filter which will access each value.
// console.log(newNums);

//We can do this by for each also
const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);

