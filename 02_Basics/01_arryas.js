//arrays

const myArray = [1,2,3,4,5, "heelo", true]
console.log(myArray)
console.log(myArray[1])


//array methods

myArray.push("andsfnjf", 23) //add element(s) to end of the array
console.log(myArray)

myArray.pop() //remove last element from the array
console.log(myArray)

myArray.unshift(5, 'abc') //add element(s) to start of the array
console.log(myArray)

myArray.shift() //remove first element from the array
console.log(myArray)

console.log(myArray.includes(3)) //returns true or false depending on if the element is present in array or not

console.log(myArray.indexOf('abc')) //return the index of the element in arguement if it is present in array, returns -1 if the element is not present in array

const newArray = ["Red", "dead", "redemption", "2"]
console.log(newArray + " " + typeof newArray) 
console.log(newArray.join() + " " +  typeof newArray.join()) //it joins the elements of the array and covert it into string


//slice and splice

const arr = [1,2,3,4,5]

const sliceArr = arr.slice(0,3) //slices the array from first arguement to n-1 th arguement (in this case, from 0 to 2)
console.log(sliceArr)
console.log("A ", arr) //the original array is intact

const spliceArr = arr.splice(0,3) //slices array from 0 to 3 (here)
console.log(spliceArr)
console.log("B ", arr) //the original array is changed