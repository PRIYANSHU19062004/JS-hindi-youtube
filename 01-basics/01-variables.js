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
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //will print a table like
/*┌─────────┬──────────────┐
│ (index) │ Values       │
├─────────┼──────────────┤
│ 0       │ 144553       │
│ 1       │ 'hc@hgd.com' │
│ 2       │ '2142343'    │
│ 3       │ 'Bengaluru'  │
│ 4       │ undefined    │
└─────────┴──────────────┘
/*
Prefer not to use var because of issue in block scope and functional scope
*/