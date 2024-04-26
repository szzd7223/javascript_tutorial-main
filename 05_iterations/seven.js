//map function
const arr = [1,2,3,4,5,6,7,8,9,10]
let newArr = arr.map((num) => num+10)
// console.log(newArr)

newArr = []
arr.forEach(function (num){
    return newArr.push(num+10)
})
console.log(newArr)