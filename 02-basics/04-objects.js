const tinderUser=new Object()//It is a singleton object
//const tinderUser={}.It is a non singleton object
//Writing const tinderUser.id is wrong as we can't declare const again
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser) 
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Prince",
            lastname:"Farswan"
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.firstname)
//console.log(regularUser.fullname?.userfullname.firstname)
const obj1={1:"a",2:"b"} 
const obj2={3:"a",4:"b"}
const obj7={5:"a",6:"b"}
const obj3={obj1,obj2}//Problematic
const obj4=Object.assign(obj1,obj2) 
const obj5=Object.assign({},obj1,obj2) //{} is an optional parameter.But its good to give it as it is treated as a target.
const obj8=Object.assign({},obj1,obj2,obj7)
console.log(obj3)
console.log(obj4)
console.log(obj5)
console.log(obj8)
//we will actually use below method to combine objects
const obj9={...obj1,...obj2}
console.log(obj9)

//Values coming from database
//Objects inside an array
const users=[
{
    id:1,
    email:"h@gmail.com"
},
{
    id:1,
    email:"h@gmail.com"
},
{
    id:1,
    email:"h@gmail.com"
},
{
    id:1,
    email:"h@gmail.com"
}


]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)) //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ].Key value pair is converted into an array.
console.log(tinderUser.hasOwnProperty('isLoggedIn'))//will return true if property isLoggedIn is present insider the object tinderUser
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// const {courseInstructor}=course
// console.log(courseInstructor); //will print Hitesh
const {courseInstructor:instructor}=course
console.log(instructor); //will print Hitesh
/* JSON stands for JavaScript Object Notation.
 It is a text-based format used to store and exchange data between computers, servers, and applications.
 You can think of JSON as a way to send information in a structured and readable format.
*/
//Below is the format of a JSON.
//API is in object format.
/*{
    name:"hitesh",             keys are string in JSON.Values can be of number or any other datatypes.
    coursename:"js in hindi",
    price:"free"
}*/
//APIs can be in array format also.
[
    {},
    {},
    {}
]

