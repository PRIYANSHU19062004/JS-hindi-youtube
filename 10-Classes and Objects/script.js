const student={
    fullName:"Priyanshu Singh",  //Properties or states
    marks:94.4,
    printMarks:function(){     //method or behaviour
        console.log("marks=",this.marks);  //this.marks refers to student.marks here. 
    },
    
};
//Every Object has an inbuilt special property called Prototype having own states or properties.
console.log(student.toString) //This toString function is provided by the prototype property.This prototype is itself an object having properties and methods.
//
const employee={     //Both ways of writing methods inside an object are correct.
    tax:10,
    calcTax(){
        console.log("tax rate is 10%");
    },
    calctax2:function(){
        console.log("tax rate is 10%")
    }
};
const karanArjun={
    salary:50000,
    calcTax(){                           //Prototype of karanArjun also has calcTax method of employee object but calcTax of karanArjun method will override it.
        console.log("tax rate is 20%");
    }
}
//We want to use calcTax1 of employee object in karanArjun Object,we write employee like prototype inside karanArjun
karanArjun._proto_=employee;
//Prototype  of karanArjun object will have all the properties and methods  of employee object 
//Now we can use those methods for the object karanArjun also.
//Type of prototype is reference to an object.

//*****************Classes in JavaScript are the blueprint for the objects. **********************************************/
class ToyotaCar{
    constructor(price,mileage){
        console.log("creating new object") //Now whenever we will create an object, the constucter will be invoked and print "Creating new object"
        this.price=price;
        this.mileage=mileage;
    }
  start(){
    console.log("start");
  }   //No need to seperate methods from , in classes.
  stop(){
    console.log("stop");
  }
  setBrand(brand){
    this.brand=brand; //this refers to the object for which the function is being called.Here 'brand' with 'this' is the property of the object and 'brand' at the RHS of '=' sign is the argument of the setBrand.
  }
}
let fortuner=new ToyotaCar(3000000,10);
//We will see the methods start() and stop() of ToyotaCar class and also a constuctor inside the prototype of the object fortuner.
console.log(fortuner.stop);
console.log(fortuner.start);
let lexus=new ToyotaCar(2000000,20);
lexus.setBrand("lexus"); //Now the object lexus will have its property brandName=lexus.
//A consturtor is created for both lexus and fortuner objects.
fortuner.setBrand("fortuner");


/************************************Inheritence**************************************** */
class Parent{
    hello(){
        console.log("hello");
    }
}
class Child extends Parent{}
let obj=new Child();

class Person{
    constructor(){
        console.log("enter parent constructor")
        this.species="homo sapiens";
    }
    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }
    work(){
        console.log("do nothing");
    }
}
class Engineer extends Person{
    constructor(branch){
        console.log("enter child constructor")
        super(); //to invoke parent class constructor.//As if we form a consturctor inside a child class(derived class) then before forming the constructor ,we have to use 'super' to call the parent class constructor.Else it will give error.
   
        this.branch=branch;
        console.log("exit child constructor")
    }
    work(){
        console.log("solve problems,build something");
    }
}
let PriyanshuObj=new Engineer();
class Doctors extends Person{
    work(){
        console.log("treat patients.")
    }
}
 let engObj=new Engineer("chemical engg");
// enter child constructor
// enter parent constructor
// exit child constructor

class P1{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log("eat");
    }
}
class C1 extends P1{
    constructor(name){
        super(name);
    }
    work(){
        super.eat() //eat() of parent class will be called.We can't directly access methods and properties of parent class.We have to use them throuh super keyword.
        console.log("Solve problems,build something.")
    }
}
let child=new C1("Prince") 
console.log(child) //
// C1 {name: 'Prince'}
// name 
 // "Prince"
 // [[Prototype]]

