const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// marver_heros.push(dc_heros)
// console.log(marver_heros) //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marver_heros[3][1])
// marvel.heros.contact(dc_heros)
// console.log(marvel_heros)//will give same output as push.
const allHeros=marvel_heros.concat(dc_heros)
console.log(allHeros) //will give the output[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//spread operator
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);// all values in the array will spread out
console.log(Array.isArray("Hitesh")) //will give the output false
console.log(Array.from("Hitesh"))//will form a new array [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"hitesh"}))//will give an empty array .Interesting case for the interviews
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)) //will give the output [ 100, 200, 300 ]


