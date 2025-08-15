//Objects can declared in two ways -like a literal and like a constructor
//singleton-when we form an object through a constructor then the object formed is singleton or it is one of its kind
//when we declare through literals then singletons are not formed
 
/////////////////++++++++++/////////////
//Object literals
const mySym=Symbol("key1") //Declaring a symbol
const mySym1=Symbol("key2")
const JsUser={
    name:"Hitesh",  //name is string in itself and we can give a value of any datatype to a key
    "fullName":"Hitesh",
    mySym:"mykey1", //not the correct way for writing a symbol
    [mySym1]:"myKey2", //this is the correct syntax
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
//ways of accessing an object
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["fullName"]) //only way to access fullName in the object
console.log(typeof JsUser.mySym) //will give string datatype which is wrong
console.log(JsUser[mySym1])
console.log(typeof JsUser[mySym1])

//Changing values of an object
JsUser.email="princefarswan1609farswan@gmail.com"
Object.freeze(JsUser)//Now no changes will be applied to JsUser
console.log(JsUser)