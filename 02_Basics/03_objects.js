//singleton - object constructor
//Object.create

//object literals
const myObject = {
    name: "Skyrim",
    "release year": "2009",
    platforms: ["PC", "XBOX 360", "PS3"],
    "recommended?": true
}

//Object is like dictionary -> (key-value pairs)

//how to access objects?
//method-1
console.log(myObject.name)
//method-2 (used when key is like "release year"), always use quotations in this method
console.log(myObject["release year"])


//changing values from myObject
//method 1
myObject["release year"] = 2010
console.log(myObject["release year"])
//method 2
myObject.name = "Red Dead Redemption"
console.log(myObject.name)

//creating a function for object
myObject.details = function () {
    console.log("Details are: " + this.name + ", " + this["release year"]) //when we use "this", we refer the same object
}

myObject.details()
//freezing any changes to object
Object.freeze(myObject)
myObject.name = "Assassins Creed 2" //now the name wont change
console.log(myObject.name)
