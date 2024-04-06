// function definition
function myFunction() {
    console.log("This is a function")
}

myFunction()

//function to add two numbers
function add(a, b) {
    console.log(a + b)
}
add(2,4) //prints 6

//function with return statement
function add(a, b) {
    return a + b
}
const result = add(2,4)
console.log("rssult: ",result)

//function with default value
function add(a=7, b = 5) {
    return a + b
}
console.log("default value: ", add())

//function with rest parameter
function calculateCartPrice(...numbers) {
    return numbers
}
console.log(calculateCartPrice(100, 200, 300, 400, 500)) //returns an array [100, 200, 300, 400, 500]

//function with rest parameter with default values
function calculateCartPrice1(val1, val2, ...numbers) {
    return numbers
}
console.log(calculateCartPrice1(100, 200, 300, 400, 500)) //returns an array [300, 400, 500] (val1=100, val2=200)

//function with object parameter
const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject) {
    console.log(`hello ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)

//function with array parameter
const arr = [100, 200, 300, 400, 500]

function handleArray(anyArray) {
    return anyArray[3]
}
console.log("handleArray: ", handleArray(arr))
