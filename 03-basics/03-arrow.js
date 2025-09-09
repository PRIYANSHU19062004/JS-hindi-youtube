const user={
    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this) //will print current context
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()//sam ,welcome to website
console.log(this)//will give output {} as current context is empty as we are in node environmentso this is reffereing to an empty object.