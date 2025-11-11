# Projects related to DOM
## project link
[Click here](
    https://stackblitz.com/edit/stackblitz-starters-gckf2rde?description=HTML/CSS/JS%20Starter&file=styles.css,index.html,ColorChanger.js&terminalHeight=10&title=Static%20Starter
)
# Solution Code

## project 1
```javascript
console.log("Priyanshu")
 
const buttons=document.querySelectorAll('.button') //buttons will store all the buttons as console.
const body=document.querySelector("body")
buttons.forEach(function(button){
  console.log(button);
  //We will apply even listener on each button.
  button.addEventListener('click',function(e){   //e is an even object.
    console.log(e)
    console.log(e.target)   //will print the target from which this event has occured.
   if(e.target.id==='grey'){
     body.style.backgroundColor=e.target.id
   }
   if(e.target.id==='white'){
     body.style.backgroundColor=e.target.id
   }
   if(e.target.id==='blue'){
     body.style.backgroundColor=e.target.id
   }
   if(e.target.id==='yellow'){
     body.style.backgroundColor=e.target.id
   }
   
   if(e.target.id==='purple'){
     body.style.backgroundColor=e.target.id
   }
   

});
});
 





```