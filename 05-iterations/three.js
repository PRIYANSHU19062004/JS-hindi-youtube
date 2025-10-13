//for of loop
//We also put objects inside array and at each interation we derive some values from those objects.
// [{},{},{}]
const arr=[1,2,3,4,5]           //for arrays both for of and for in are used to iterate it.
for (const num of arr) {
    console.log(num);
    
}
const greetings="Hello World!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}
//Maps
const map=new Map()      // Map is an object in itself 
map.set('IN', "India")   //Map is iteratable by for-of loop.
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
     console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',                 //  Object can't be iterated by for of loop
    game2: 'Spiderman'            //Objects can be iterated by for-in loop and Object.keys()
}

for (const [key, value] of myObject) {
     console.log(key, ':-', value);
    
 }
