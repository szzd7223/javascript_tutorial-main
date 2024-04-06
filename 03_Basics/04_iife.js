//immediately invoked function expression
(function () {
    console.log("DB CONNECTED")
})(); //it should end with a ";" to signify end of scope
//does not pollute the global scope

//IIFE with arrow function
(() => {
    console.log("DB CONNECTED TWO")
})();

//IIFE with arguments
((arguement) => {
    console.log(`DB CONNECTED THREE ${arguement}`)
})('hlo')