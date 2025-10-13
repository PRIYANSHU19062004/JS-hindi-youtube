const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){ //We don't need to write the name of the callback function.
    console.log(val);
} )
//Arrow function as a call back function.
coding.forEach( (item) => {
   // console.log(item);
} )

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe) We only need to give the reference only.We don't need to execute the function .

coding.forEach( (item, index, arr)=> {
    //console.log(item, index, arr);
} )
//This will print the following:
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


//Objects inside the array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

     myCoding.forEach( (item) => {
     console.log(item.languageName);
     } )
     //Will print the output
    //  javascript
    //  java
    //  python