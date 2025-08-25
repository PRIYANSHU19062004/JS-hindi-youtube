//Objects can declared in two ways -like a literal and like a constructor
//singleton-when we form an object through a constructor then the object formed is singleton or it is one of its kind
//when we declare through literals then singletons are not formed.Multiple instances of that object are formed.
//singleton objects are created like Object.create
/////////////////++++++++++/////////////
//Object literals
const mySym=Symbol("key1") //Declaring a symbol.'mySym' is the name of the symbol.
const mySym1=Symbol("key2")
//JsUser is an object.
const JsUser={
    name:"Hitesh",  //name is string in itself or it is by default string and we can give a value of any datatype to a key
    "fullName":"Hitesh",
    mySym:"mykey1", //not the correct way for writing a symbol.
    [mySym1]:"myKey2", //this is the correct syntax of writing a symbol.
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
//ways of accessing an object
console.log(JsUser.email)
console.log(JsUser["email"])//more better way to access an object
console.log(JsUser["fullName"]) //only way to access fullName in the object
console.log(JsUser.mySym)//will return correct key1 which is correct but still datatype of mySym will be string.It is not symbol.
console.log(typeof JsUser.mySym) //will give string datatype which is wrong
console.log(JsUser[mySym1])//wll give output mykey1
console.log(typeof JsUser[mySym1])

//Changing values of an object
JsUser.email="princefarswan1609farswan@gmail.com" //will overwrite the value of the email.
console.log(JsUser)
JsUser.greeting=function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting)//will give the reference of the function.Function is not executed.
console.log(JsUser.greeting());//will print "Hello JS user"
JsUser.greetingTwo=function(){
    console.log(`Hello JS User,${this.name}`) //this referes to the current object.
}
console.log(JsUser.greetingTwo())
Object.freeze(JsUser)
JsUser.email="Prince@microsoft.com"