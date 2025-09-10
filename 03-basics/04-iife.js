//Immediately Invoked Function Expression(IIFE)

(function chai(){ //It is a named iife as it has a name.
  console.log(`DB CONNECTED`)  
})();//It is necessary to end it using a semicolon
//()()first parenthesis contains the function defination and second defination contains the execution.
//Why used iife?
//Avoid Global Namespace Pollution: By wrapping code inside an IIFE, you can prevent variables from being added to the global scope, reducing the risk of conflicts in larger codebases. 
//Immediate Execution: IIFEs are useful when you need to execute some code immediately and don't need to reuse it elsewhere.
//IIFE in arrow function
((name)=>{ //It is a unamed iffe.
    console.log(`DB CONNECTED 2 ${name}`)

})('hitesh');