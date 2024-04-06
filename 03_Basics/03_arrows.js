// const user = {
//     username: "hitesh",
//     price: 999,
//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`) //"this" refers to the context of the object
//         console.log(this) //prints the whole object
//     }
// }

// user.welcomeMessage()
// user.username = "sam" //change the value of username
// user.welcomeMessage() 


// function chai() {
//     let username = "amogus"
//     console.log(this) //prints a lot of stuff about the object
//     console.log(this.username) //prints undefined because this is not defined inside the function
// }
// chai() 

//arrow function

const welcomeMessage = () => {
    username = "hitesh"
    console.log(this.username) //prints undefined
    console.log(this) //prints empty object
}
welcomeMessage()

//normal usage of arrow function 
const add = (num1, num2) => {
    return num1 + num2
}
console.log(add(4,6))

//arrow function with implicit return
const add2 = (num1, num2) => (num1 + num2)
console.log(add2(4,6))

