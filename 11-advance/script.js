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

// function getData(dataId){ //2s to search data and send  //getData returns data or it is a database
//     setTimeout(()=>{
//     console.log("data"+dataId)
//     },2000);
// }
//We first want data1,then data2 and then data3.
//What is we want to get first data and then search for the next data.We want data with indiavidual delay.
// getData(1);
// getData(2);
// getData(3);

//data1
//data2
//data3

//We want individual delay.Like data 1,then wait for 2ms and then get data 2.We will use callback here
//getData(2,getData(2)) will immediately execute getData(2) inside as it has paranthesis.But we first want to execute the getData(1) and then getData(2)
//So we use arrow function which didn't immediately execute the function
//Call back are passed through callbacks.

function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){  //Call only if getNextData exists.
            getNextData();
        }
     
    },2000);
}
getData(1,()=>{
    getData(2); //Calback passed.
})  //Now first data1 and then after 2s,data2 will be printed.
//Similarly we can do for data3 and data4 also.
getData(1,()=>{
    console.log("getting data2....");
    getData(2,()=>{
        console.log("getting data3.....")
        getData(3,()=>{
            console.log("getting data4......");
            getData(4,()=>{

            });
        });
    });
});

//The above code is very complex.This is called callback hell or nested callbacks ,also called as Pyramid of Doom.
//To solve this we use Promises.



