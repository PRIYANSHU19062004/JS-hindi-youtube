let DATA="secret information."
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data=",DATA);
    }
}
let student1=new User("Priyanshu","princefarswan1609@gmial.com");
let student2=new User("abhai","afafbafaf.@gmail.com");