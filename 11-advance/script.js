// console.log("one");
// console.log("two");
// console.log("three");
//first one then two and then three will print.So it is synchronous programming.

function hello(){
    console.log("hello");
}
setTimeout(hello,2000)//timeout-after how much the work should be done.2s=2000ms.
console.log("hi")
setTimeout(()=>{
    console.log("hello")
},4000);
console.log("Bye") //Bye will not wait for settimeout to complete.


//************************************************************************************************************ ****************************************************************************/
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){  //sumCallback is a callback funtion.We can't pass it with parenthesis.
    sumCallback(a,b);
}
calculator(1,2,sum);
//Above instead of sum we could have passed whole function too.
calculator(1,2,(a,b)=>{
    console.log(a*b);
})
const hello=()=>{
    console.log("hello");
}
setTimeout(hello,3000);
///////////////////////////////////////////////////////

function getData(dataId){ //2s to search data and send  //getData returns data or it is a database
    setTimeout(()=>{
    console.log("data"+dataId)
    },2000);
}




