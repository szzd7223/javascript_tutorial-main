//forof loops on strings
sampleString = "hello"
for (const character of sampleString) {
    // console.log(character)
}

//forof loops on arrays
sampleArray = [1, 2, 3, 4, 5]
for (const number of sampleArray) {
    // console.log(number)
}

//maps
sampleMap = new Map()
sampleMap.set(1, "one")
sampleMap.set(2, "two")
sampleMap.set(3, "three")
sampleMap.set(1, "one") //it wont show cuz maps are unique
// console.log(sampleMap)

//forof loops on maps
for (const [key, value] of sampleMap) {
    // console.log(key, '->' , value)
}

//forof doesnt work on objects
// but forin does

//forin loops on objects
sampleObject = {
    name: "john",
    age: 25
}
for (const item in sampleObject) {
    console.log(item, sampleObject[item])
}

