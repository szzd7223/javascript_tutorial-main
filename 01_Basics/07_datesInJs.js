//Dates

let myDate = new Date();
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toString());

let customDate = new Date(2024, 2, 28, 15, 23, 52);
console.log(customDate.toString());

let customDate1 = new Date("2024-03-26");
console.log(customDate1.toLocaleString());

let customDate2 = new Date("03-27-2024");
console.log(customDate2.toString());

let myTimeStamp = Date.now() //shows the current time in ms from 1 jan 1970
console.log(myTimeStamp);

console.log(customDate1.getTime()); //shows the timestamp of specific date

console.log(Date.now()/1000); //convert to seconds from miliseconds

//to get specific output
let customDate3 = new Date();
console.log(customDate3.toLocaleString('default', {
    weekday: "long",
    era: "long"
}))