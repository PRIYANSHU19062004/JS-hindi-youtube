const user={
    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this) //will print current context
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()//sam ,welcome to website
console.log(this)//will give output {} as current context is empty as we are in node environmentso this is reffereing to an empty object.{} will not appear in the console for  this code.Inside browser most global object is Window.
// function chai(){
//     console.log(this) //Now it will print many values.
// }
// function chai(){
//     let username="hitesh"
//     console.log(this.username) //It will give undefined.This context only working in the objects.
// }
// const chai=function(){
//     let username: "hitesh"
//     console.log(this.username) //will also give undefined
// }
// chai()
const chai=()=>{    //arrow function introduced in ES6
    let username="hitesh"
    console.log(this) //{}
    console.log(this.username) //undefined
}
// chai()

//++Basic arrow function
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4)) //7

//++Implicit return
const addTwo=(num1,num2)=>num1+num2//no need to write return statement
console.log(addTwo(3,4)) //7
//Can also be written as
//const addTwo=(num1,num2)=>(num1+num2)
const addObject=(num1,num2)=>({username:"hitesh"}) //return object.To return object it should be wrapped in a paranthesis.
console.log(addObject)