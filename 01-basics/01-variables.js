const accountId=144553
let accountEmail="prince@google.com"
var accountPassword="12345"
accountCity="Jaipur" //Not a good way to declare variable
let accountState  //; is optional in JS

//accountId=2 not allowed
console.log(accountId);  //log+Enter
accountEmail="hc@hgd.com"
accountPassword="2142343"
accountCity="Bengaluru"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
Prefer not to use var because of issue in block scope and functional scope
*/