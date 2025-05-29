//primitive

//7 types:string,Number,Boolean ,symbol,BigInt
//eg
const score=100
const scoreValue=100.3

const isLoggedIn =false
const outsidetemp=null
let userEmail;

const id =Symbol('123')
const anotherId =Symbol('123')

console.log(id===anotherId);

const bigNumber =32131231232131n; //last la n then it will treat as bigint

//reference(Non primitive)

//array,objects,functions
  //dataype of all is object ,function cha pn object function. mentioned in documentation
const heros=["shaktiman","hanuman","ironman"]

let myObj={
    name: "anuj",
    age: 22
}

const myFunction =function(){
 console.log("hello world");
}

console.log("datatype                                           |  typeof result");

console.table([[score,typeof(score)],[isLoggedIn,typeof(isLoggedIn)],[userEmail,typeof(userEmail)],[id,typeof(id)],[bigNumber,typeof(bigNumber)],
[heros,typeof(heros)],[myObj,typeof(myObj)],[myFunction,typeof(myFunction)],])

//dynamically typed language :-data type mentioning not nessary
