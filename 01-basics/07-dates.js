//DATES
 let myDate=new Date()
 console.log(myDate.toString())
 console.log(myDate.toDateString())
 console.log(myDate.toLocaleString())
 console.log(typeof myDate)//Object

/* let myCreatedDate=new Date(2023,0,23) //Mon Jan 23 2023 //Months in JS start from 0
 console.log(myCreatedDate.toDateString())
 let mydatedf=new Date(2023,0,23,5,3) //1/23/2023, 5:03:00 AM
 console.log(mydatedf.toLocaleString())
*/
let myCreatedDate=new Date("2023-01-14")
let myCreatedDate2=new Date("01-14-20203") //This format followed in India
console.log(myCreatedDate.toLocaleString())

//+++++++TimeStamps++++++++++++++++
let myTimeStamp=Date.now()
console.log(myTimeStamp) //1755004970005//It is the millisecond value from January 1, 1970
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())//1673654400000 milliseconds from 1st january
console.log(Date.now())//will give value in milliseconds
console.log(Math.floor(Date.now()/1000))
let newDate=new Date()
console.log(newDate.getMonth()) //Will give the month number.Month number will start from 0
console.log(newDate.getDay()) //will give the day number
