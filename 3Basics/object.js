//by using constructor  it make singleton 

//object literls 

// for usingg as a symboll 
const mySym=Symbol("key1")
const JsUser = { // {} is an object with key-value pairs
  name: "bibek",
  "full Name": "bibek Kunwar", 
  //for access symboll used square brackets
//   mySym:"mykey1",
  [mySym]:"mykey1",
  email: "bibek@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["sun", "mon"]
};
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full Name"]);// thtis o[eration is not done by . operation
console.log(typeof JsUser.mySym);

console.log(JsUser[mySym]);
// for overite or value change 
JsUser.email="shadoow6632@gmail.com"
console.log(JsUser.email);
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




//alternative and best way
