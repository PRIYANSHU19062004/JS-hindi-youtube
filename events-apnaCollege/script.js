let btn=document.getElementById('button')
btn.onclick=(e)=>{
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a); //26 
    console.log(e);
    console.log(e.target); //Location of the event. clientX is the horizontal position of event and clientY is the verticle position
    console.log(e.type) //click
}   
let box=document.querySelector("#box1");
box.onmouseover=()=>{                        //It has more priority than inline event handling.
    console.log("You are inside box.")
}
const handler2=()=>{
    console.log("button2 was clicked")

}
let btn2=document.getElementById('button2');

btn2.addEventListener("click",handler2
)

btn2.removeEventListener("click",handler2) //only reference can be passed.
let modeBtn=document.querySelector("#button4");
let currMode="light"; //is currMod change to dark and vice vers
modeBtn.addEventListener("click",()=>{
    console.log("You are trying to change the mode.")    //All this can be done through adding and removin classes also using classList
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black"
    }
    else{
        currMode="light"
        document.querySelector("body").style.backgroundColor="white"
    }
    console.log(currMode)
})