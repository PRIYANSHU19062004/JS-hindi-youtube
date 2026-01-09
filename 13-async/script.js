async function hello(){
    console.log("hello");
}
//When we will excute the hello function.It will pring hello and return a promise too.We can make a normal function as async function.
//await pauses the execution of its surrounding async function until the promise is settled.It can be used only inside a async function.

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("weather data");
        resolve(200) //200 represents a successfull API call.
    },2000);
 })
}
//api is an asynchrounous call.
async function getWeatherData(){
    await api();//1st call.First call be completed and then 2nd call will be completed.
    await api();//2nd call
}
//Async-await
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000)
    });
}
async function getAllData(){
    console.log("getting data1..............");
   await getData(1);
   console.log("getting data2.................");
   await getData(2);
   console.log("getting data3...............");
   await getData(3);
    
}//Async-await code is very easier to understand in comparision to promise chain and callback hell.
//We use IIFE for running this async-await code.

(async function (){
    console.log("getting data1..............");
   await getData(1);
   console.log("getting data2.................");
   await getData(2);
   console.log("getting data3...............");
   await getData(3);
})(); 

