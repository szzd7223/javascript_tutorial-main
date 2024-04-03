const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = new Object({4:"d", 5:"e", 6:"f"})

const obj3 = {obj1,obj2} //normal combining

console.log(obj3) //{obj1: {...}, obj2: {...}}

const obj4 = Object.assign({}, obj1, obj2) //we use {} to create an empty object

console.log(obj4) //{1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f"}

const obj5 = {...obj1, ...obj2} //spread operator (most used)

console.log(obj5) //{1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f"}

//get array of keys and values and entries
console.log("keys", Object.keys(obj1)) //["1", "2", "3"]
console.log("values", Object.values(obj1)) //["a", "b", "c"]
console.log("entries", Object.entries(obj1)) //[["1", "a"], ["2", "b"], ["3", "c"]]

//check if a particular property exists in an object
console.log("1" in obj1) //true
console.log("7" in obj1) //false
//alternate method
console.log(obj1.hasOwnProperty("1")) //true
console.log(obj1.hasOwnProperty("7")) //false