//how to create a promise
const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, cryptographhy, network
    setTimeout(function(){
        console.log("Async 1 is complete")
        resolve() //if success then resolve (it will print the message in then block)
    } , 1000)
})

//consume the promise
promiseOne.then(function(){  //then is used to consume the promise
    console.log("promiseOne is consumed")
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2 is complete")
        resolve()
    }, 1000)
})
.then(function(){
    console.log("promiseTwo is consumed")
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: "Sandeep", age: 25})
    }, 1000)
})

promiseThree.then(function(data){
    console.log(data, 'promiseThree is consumed')
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Aman", age: 23})
        }
        else{
            reject("Error occured, promiseFour not consumed")
        }
    }, 1000)
})

promiseFour.then(function(data){
    console.log(data, 'promiseFour is consumed')
    return data.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("promiseFour is done")
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "AJavaScript", age: 23})
        }
        else{
            reject("Error occured, JS went wrong")
        }
    }, 1000)
})

//using async await
async function consumePromiseFive(){
    //to handle the error we use try catch block
    try{
        const data = await promiseFive
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("promiseFive is done")
    }
}
consumePromiseFive()


async function getAllUsers(){
    try{
        const users = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await users.json()
        console.log(data)
    } catch(error){
        console.log("E. ", error)
    }
}

getAllUsers()