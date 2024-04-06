//scope
 let a = 10 //global scope

if(true) {
    let b = 20 //local scope
}
console.log(a) //10

//  console.log(b) //error

//if we use var even locally, it will be global scope
if(true) {
    var c = 30
}
console.log(c) //it won't give error and it will be printed, hence avoid unintended use of var


//hoisting

console.log(function1(10)) //will return 11
function function1(num) {
    return num+1
}

console.log(function2(10)) //will give error because it is not defined yet. this is called hoisting
const function2 = function(num) {
    return num+2
}
