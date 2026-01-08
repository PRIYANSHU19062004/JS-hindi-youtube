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
let teacher1=new User("Dean","dean@gsmail.com")
class Admin extends User{
    constructor(name,email){
        super(name,email); //Calling the constructor of parent class "User" and passing the values emial and name.
    }
    editData(){
        DATA="Some new value";
    }
}
let admin1=new Admin("admin","admin@college12.com");