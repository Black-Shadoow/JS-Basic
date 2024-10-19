
// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
//console.log(myArr);


const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);
myArr.unshift(8) //add number at begenning 
//console.log(myArr)
myArr.shift() //remove first element
//console.log(myArr);

myArr.shift()
//console.log(myArr);
console.log(myArr.includes(9));



//const newArr = myArr.join() // it returns array element in the form of string 

//console.log(myArr);
//console.log( newArr);
// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
