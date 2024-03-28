const playedGames = ["rdr2", "witcher", "gta", "uncharted4"]
const unplayedGames = ["legend of zelda", "last of us", "skyrim", "halo4"]

//difference between push and concat

//concat returns the value and it adds second array elements as distinct elements
console.log(playedGames.concat(unplayedGames))
// it does not change original array
console.log("Original Array in concat ", playedGames)

//push adds the second array as a whole element and it changes the original array
pushWalaArray = playedGames.push(unplayedGames)
console.log("Original Array in push ", playedGames)
//push also returns the length of new array
console.log("Length of array after push ", pushWalaArray);

//removed pushed wala element to get clear next output
playedGames.pop()

//spread function to combine two arrays
allGames = [...playedGames, ...unplayedGames]
console.log(allGames)
//it doesnt change the original array
console.log(playedGames);


//flatting an array
let anotherArray = [1,2,3,[4,5,6],7,8,[9,10,[11,12,13,[14,15]]]]
flattedAnotherArray = anotherArray.flat(Infinity)
console.log(flattedAnotherArray)

//finding if something is array or not
console.log(Array.isArray("abcdef"))

//converting something to array
console.log(Array.from("abcdef"))

//(interview question) it returns empty array if it is not specified ke keys ka array banana hai ya values ka (for an object)
console.log(Array.from({species: "penguin", location: "antartica"}))

//we can create array of different variables by using Array.of
const a=100
const b=200
const c=300
console.log(Array.of(a,b,c))