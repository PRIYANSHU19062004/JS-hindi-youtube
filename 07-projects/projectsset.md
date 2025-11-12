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

## project 2 solution
```javascript
//Here will be submit event not click event as there is a form.
const form=document.querySelector('form')
//const height=parseInt(document.querySelector('#height').value)
//The above usecase will give empty value to height.
//Whenever a form is submitted ,it submits by either post type or get type.But whenever it submits,its values goes to the url or server.We have to stop this default action.We do it throught a method on events.
form.addEventListener('submit',function(e){
  e.preventDefault()
  //Now we want height value and weight value int the form
  //The value we will get will be a string type so we have to parse it into an int value.
  //We have given the value to height and weight inside the evenListener as we want the values that we get after submit.

  const height = parseInt(document.querySelector('#height').value)    
  const weight = parseInt(document.querySelector('#weight').value)    
  const results=document.querySelector('#results')
  if(height===''||height<0||isNaN(height)){
      results.innerHTML=`Please give a valid height ${height}`;
  }
  else if(weight===''||weight<0||isNaN(weight)){
      results.innerHTML=`Please give a valid weight ${weight}`;
  }
  else{
   const bmi= (weight/((height*height)/10000)).toFixed(2)       //toFixed will show till 2 decimal values.
   //show the result
   results.innerHTML=`<span>${bmi}</span>`
  }
  
})



```







```