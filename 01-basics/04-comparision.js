console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);/* JavaScript does type coercion in these comparisons."2" is a string, but when compared with a number using > (or <),
JavaScript converts the string to a number.*/
console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true
/*Loose equality (==) does not convert undefined to a number here.
Undefined is only loosely equal to null and itself — nothing else.*/
console.log(undefined == 0);
/*Relational operators (>, <, >=, <=) do convert values to numbers.
Number(undefined) → NaN*/
console.log(undefined > 0);
console.log(undefined < 0);
console.log("2"===2);//false
/*=== is the strict equality operator.

Strict equality checks both:

Value is the same

Type is the same*/
/*== is the loose equality operator
It allows type coercion — if the types differ, JavaScript tries to convert them to the same type before comparing.*/


