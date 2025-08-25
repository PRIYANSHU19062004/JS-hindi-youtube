const tinderUser=new Object()//It is a singleton object
//const tinderUser={}.It is a non singleton object
//Writing const tinderUser.id is wrong as we can't declare const again
tinderUser.id="123abc"
console.log(tinderUser) //will print empty object.