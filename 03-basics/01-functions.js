function sayMyName(){
    console.log("PRIYANSHU")//function defination
}
sayMyName//It is the reference.It tells that the function lives here .
sayMyName()//It will execute the function
// function addTwoNumbers(number1,number2){ //number1 and number2 are parameters.
//    console.log( number1+number2)

// }
function addTwoNumbers(number1,number2){ //number1 and number2 are parameters.
    let result=number1+number2 //The result declared inside the function has scope only inside the function
    return result       //we can also directly reurn number1+number2.
    console.log("Priyanshu") //will not print as it is after return statement.

}
addTwoNumbers()//will return NaN as no arguments given.
addTwoNumbers(3,"4")//34 due to implicit coersion.3 and "4" are arguments.
addTwoNumbers(3,"a") //3a
addTwoNumbers(3,null)//3
const result=addTwoNumbers(3,5)
//console.log("Result: ",result)

function loginUserMessage(username){ //undefined and empty string are considered as false values.  
    if(username===undefined){  //can also be written as !username
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// function loginUserMessage(username="Sam"){ //Sam is the default argument if no argument given in the function name.
//     if(username===undefined){ 
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
console.log(loginUserMessage("Priyanshu"))
console.log(loginUserMessage()) //undefined just logged in is the output if no if statement.

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200,400,500)) //will only print 200.
function calculateCartPrice1(...num1){ //... is the REST operator.Now we can paas any number of arguments to the function calculateCartPrice1.
    return num1
}
console.log(calculateCartPrice1(200,400,500)) //[ 200, 400, 500 ]
function calculateCartPrice2(val1,val2,...num1){ 
    return num1
}
console.log(calculateCartPrice1(200,400,500,2000)) //[ 200, 400, 500 ]
console.log(calculateCartPrice2(200,400,500,2000)) //[ 500, 2000 ].val1=200,val2=400.


const user={
    username:"Priyanshu",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user) //Username is Priyanshu and price is 199
handleObject({
    username:"sam", //Username is sam and price is 399
    price:399
})
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){ //getArray is any array
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); //will return 400 as the output.
console.log(returnSecondValue([200,400,500,1000]));//will return 400 as the output.
