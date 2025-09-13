
// let index=0
// while (index<=10) {
//     console.log(`Value of index is ${index}`);
//     index=index+2;
// }
let myArray=['flash','batman','superman']
let arr=0
while(arr<myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr=arr+1;
    
}
let score=11    //will go in loop atleast once and the condition is checked later.
do {            //output will be "core is 11".
   console.log(`Score is ${score}`);
   score++;
} while(score<=10);
