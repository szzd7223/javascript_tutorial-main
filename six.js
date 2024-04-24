//filter
const numArray = [1,2,3,4,5,6]

let newNums = numArray.filter((num) => num > 3)

// console.log(newNums)

newNums = []

numArray.forEach((num) => {
    if (num > 3) {
        newNums.push(num)
    }
})

console.log(newNums)

