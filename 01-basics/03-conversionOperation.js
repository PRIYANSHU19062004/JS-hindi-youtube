//Sometimes the user at backend don't know the type of the value requested from the frontend
let score = "33abc"
let ag=null
let ge=undefined
let bo=true
console.log(typeof score)
console.log(typeof(score))
let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(typeof(valueInNumber))
console.log(valueInNumber) //output will be NaN.It of a number type.
let number=Number(ag)
console.log(number)
let num=Number(ge)
console.log(typeof num)
console.log(num) //Will give the output NaN
let mun=Number(bo)
console.log(mun)
let isLoggedIn=0   
let booleanIsLoggedIn=Boolean(isLoggedIn) //1=>true , " "=>false, "hitesh"=>true,"13434"=>true,0=>false
console.log(booleanIsLoggedIn)
let somenumber=33
let stringNumber=String(somenumber)
console.log(stringNumber)
console.log(typeof stringNumber)