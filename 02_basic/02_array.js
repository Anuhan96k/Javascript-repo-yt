const marval_heroes=["ironman","spiderman","thor"];
const dc_heroes=["superman","flash","batman"];


// marval_heroes.push(dc_heroes);//instead of merging two array, it has taken array as a element
// console.log(marval_heroes); 
// console.log(marval_heroes[3][1]);

const allHeroes=marval_heroes.concat(dc_heroes);
console.log(allHeroes);

//sperad operator :-  ... 
//eg. glass drop kijie hogya spread 
//array ke elemetn sperad out ho gye , 

const all_new_heroes=[...marval_heroes,...dc_heroes];
console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6],7[6,7,[4,5]]]

const real_another_array=another_array.flat(infinity)//combines the all inner subarrays into one //parameter:- depth to which it should go

console.log(real_another_array);


console.log(Array.isArray("Anuj"));

//array conversion
console.log(Array.from("Anuj"));

console.log(Array.from({name:"hitesh"}))//op:[]  //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))