//foreach loops
sampleArray = ['a', 'b', 'c']
sampleArray.forEach((value, index, array) => {
    // console.log(value, index, array)
})

//foreach loops on array with objects
objectArray = [
    {
        name: 'john',
        age: 25
    },
    {
        name: 'jane',
        age: 30
    }
]

objectArray.forEach((item)=>{
    console.log(item.name, item.age)
})