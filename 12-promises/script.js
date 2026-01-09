let promise=new Promise((resolve,reject)=>{
console.log("I am a Promise");
//Before resolve,Promise state is pending.
resolve(123);
//Now the PromiseState is fullfilled and PromiseResult is 123.
})
console.log(promise) //Promise is an object.So it has a prototype.It also has properties like PromiseState,PromiseResult.
//Promise has 3 states-pending,fullfilled(resolved),rejected
//We can generte error inside a promise or get the final result
 let promise2=new Promise((resolve,reject)=>{
    console.log("I am Promise2");
    reject("some error occured.")
    //Now the promise state is rejected and promiseResult is "some error occured."
});
//Generally we don't create promise object.Whenever we request for some data from the API,it returns us promise.
//API return new Promise

function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data",dataId);
        resolve("success") //Promise will resolve as soon as we print the data.
        if(getNextData){  //Call only if getNextData exists.
            getNextData();
        }
     
    },5000);
    });
}
//Whenever we call getData,we get a promise in return.
let finalVal=getData(13) //finalVal will get the Promise and after 5s,final val will get the data.for 5s,PromsieState will be pending and after 5s,the promise state will be fulfilled.
// finallVal=getData(13)
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
// script.js:21 data 13
// finallVal
// Promise {<fulfilled>: 'success'}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "success"


const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        resolve("success");
    });
};
let promise3=getPromise();
promise3.then((res)=>{
    console.log("promise fulfilled",res);
});
promise3.catch((err)=>{
    console.log("rejected",err);
});

function asynFunc(){
    return new Promise((resolve,reject)=>){
        setTimeout(()=>{
         console.log("some data1.")
        },3000)
    }
}
