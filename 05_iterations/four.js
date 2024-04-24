//forin loops on objects
sampleObject = {
    name: "john",
    age: 25
}
for (const item in sampleObject) {
    // console.log(item, sampleObject[item])
}

//forin loops on arrays
sampleArray = ['a', 'b', 'c']
for (const item in sampleArray) {
    // console.log(item) //prints index
    // console.log(sampleArray[item]) //prints value
}

//forof vs forin on arrays
sampleArray1 = ['p', 'q', 'r']
for (const item of sampleArray1) {
    // console.log(item) //forof directly prints values but forin prints index
}

//forin loops on maps
sampleMap = new Map()
sampleMap.set(1, "one")
sampleMap.set(2, "two")
sampleMap.set(3, "three")
for (const key in sampleMap) {
    console.log(key, sampleMap[key]) //nothing happens because map is not iterable
}