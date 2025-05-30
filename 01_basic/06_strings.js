const name="anuj"
const repoCount = 50

//console.log(name + repoCount +" value");// not recommended

//string interpolation is recommeded
console.log(`hello my name is ${name} and my repo count is ${repoCount} `)

let gameName=new String("angryBird")

//string is object not array
console.log(gameName[0])
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));


const newString =gameName.substring(0,4) //last value not inculded
console.log(newString);

const anotherString = gameName.slice(-8,4); //here we can use negative values //negative value means last pasun suru
console.log(anotherString);


const newString1="     anuj chava      ";
console.log(newString1.trim());

const url ="http://anujchavan"



