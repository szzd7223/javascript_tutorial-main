const gameName = "legend of zelda"
const gameName1 = new String("assassins creed")

console.log(gameName[0]);
console.log(gameName1[0]);

console.log(gameName.split(" "));

console.log(gameName.replace("legend of zelda", "assassins creed"));

//modern way of logging out strings
console.log(`I like both ${gameName} and ${gameName1}`)

//find a substring
console.log(gameName.includes("legend"))