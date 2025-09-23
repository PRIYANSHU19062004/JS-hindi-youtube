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
let value = 3
let negValue = -value
console.log(negValue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3); //will print hello hitesh
console.log("1"+2); //will print 12
console.log(1+"2") //12
console.log("1"+2+2) //122
console.log(1+2+"2") //32
console.log("1"+2); //will print 12
console.log(typeof(1+"2"))
console.log( (3 + 4) * 5 % 3); //after () %,*,/ has same priority
 console.log(+"") // Unary plus tries to convert its operand into a number.
/*Empty string "" → numeric conversion → 0.
+"123" → 123 (number)

+"abc" → NaN (Not a Number)

+true → 1

+false → 0*/
console.log(+" ") //will print output 0 as it is a string containing space .When JS convert a string into a number,it trims all the whitespaces.
let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion