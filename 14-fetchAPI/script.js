const URL="https://catfact.ninja/facts";
const factPara=document.querySelector("#fact");
const btn=document.querySelector('#btn');


// const getFacts=async()=>{   //fetch API is used for both request and response.Fetch API uses Request and Response objects.
//     console.log("getting data ......");
//     let response=await fetch(URL); //Fectching URL is an asynchrounous work as it may take some time.Fetch will return a promise.This URL is the endpoint for the URL.Response will receive the data.A URL is called the endpoint of an API because it represents the exact destination where a client sends a request to access a specific service or resource.
//     console.log(response);  //A fetch API is form fetch(url,[options]).Above we are sending only the url in the fetch method.That's why it is called GET request.
//     console.log(response.status) //response is an object.It is of JSON format.Earlier it used to be of XML format.
//     //Today maximum api's return data in JSON fomat .It is also called AJAJ(Asynchronous js and JSON).
//     //When we send a request to an API.It sends a response in JSON format which needs to be converted to JavaScript Object.It is done with the help of json() method.
//  let data=await response.json();
//  console.log(data); //This data will be a usable data.It will lreturn an array.
//  console.log(data.data[0]);
//  factPara.innerText=data.data[0].fact;
 
// }; 
//Using Promises
function getFacts(){
    fetch(URL).then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
         factPara.innerText=data.data[0].fact;
 
    })
}
btn.addEventListener("click",getFacts);//As the button is clicked ,getFacts funcion will run.
