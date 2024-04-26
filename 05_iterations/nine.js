//reduce
const arr = [1,2,3,4,5]

const total =arr.reduce(function (accumulator, currval) {
    // console.log(`acc: ${accumulator}, currval: ${currval}`)
    return accumulator + currval
}, 0)

// console.log(`total is ${total}`);

//reduce using arrow function
const arr1 = [1,2,3,4,5]

const total1 =arr1.reduce((accumulator, currval) => accumulator + currval, 0)

console.log(`total1 is ${total1}`);

//practical usage
let cart = [
    {
        game: "GTA vice city",
        price: 200
    }
    ,
    {
        game: "GTA 5",
        price: 300
    }
    ,
    {
        game: "GTA 4",
        price: 400
    }
]

const totalCost = cart.reduce((acc, curr) => acc + curr.price, 0)

console.log(`totalCost is ${totalCost}`);