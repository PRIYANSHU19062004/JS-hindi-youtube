//if
const isUserLoggedIn=true
const temperature=41
if(2=="2"){
    console.log("executed") //will execute but 2 is not equal to "2"
 
}
if(2==="2"){ //Strict checking
    console.log("executed") //will not print
}
//=== checks type first and then compares the values.
// if(temperature===41){
//     console.log("less than 50")
// }
// else{
//     console.log("temperature is greater than 50")
// }
// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`User power: ${power}`)
// }
//console.log(`User power: ${power}`) will give error as power  is const so it has a local scope.
const balance=1000
if(balance>500)console.log("test") //Implicit scope
if(balance>500)console.log("test"),console.log("test2") //Not recommended at all
//+++++++++++++++++++
// if(balance<500){
//     console.log("less than");
// }else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200");
// }
//+++++++++++++++++++++++++++++++++++++
const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn && debitCard && 2==2 ){
    console.log("Allow to buy course")
}
if(loggedInFromGoogle || loggedInFromEmail
){
    console.log("User logged in")
}