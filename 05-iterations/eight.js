//reduce.It is used in shopping carts.
//read from mdn documentation.Accumulator stores some values.Current value is the item from the array.

 const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,currval){ //currval contains the value of the current element in the array.On the first call,its value is array[0] if initial value is specified;otherwise its value is array[1].
//     console.log(`acc:${acc} and currval: ${currval}`)
//     return acc + currval
// },0) //accumulator is first passed 0.After accumulator stores the sum of accumulator value and current value.
// console.log(myTotal);

//reduce in arrow function
// const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
// console.log(myTotal)


const shoppingCart=[
{
    itemName:"js course",
    price:2999
},
{
    itemName:"python course",
    price:999
},
{
    itemName:"mobile development course",
    price:6999
},
{
    itemName:"data science course",
    price:12999
},
]
//Add all the prices in the shopping cart.
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);