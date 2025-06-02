//singleton
//object.create()
//jab constructor se object banega to singleton object
//otherwise not singleton


//object literals 

//Q.symbol ko key ki tarh use krna he ?

const mySym=Symbol("key1")


const Jsuser={
    name:"hitesh",
    "full name":"anuj chavan" ,//can't access this using . so we use another way to access it
    age:18,
    //mySym:"myKey1"  this wrong cuz it is treating as string
    [mySym]:"myKey1",
    location:"jaipur",
    email:"hitesh@google.com",
    isloggedIn:false,
    lastLoginDays:["monday","saturady"]
}

console.log(Jsuser.email);
//another way to access
console.log(Jsuser["email"])
console.log(Jsuser["full name"])

// console.log(typeof Jsuser.mySym);
console.log(Jsuser[mySym])


//??????chaging object values?????

JsUser.email="amu@gmail.com";
//object ko lock krna //edit nhi hoga then
object.freeze(JsUser)

JsUser.greeting=function() {
    console
}

