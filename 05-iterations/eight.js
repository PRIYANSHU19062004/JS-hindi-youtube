//reduce
//read from mdn documentation.Accumulator stores some values.Current value is the item from the array.

const myNums=[1,2,3]
const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval: ${currval}`)
    return acc + currval
},0) //accumulator is first passed 0.After accumulator stores the sum of accumulator value and current value.
console.log(myTotal);
