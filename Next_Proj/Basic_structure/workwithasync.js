
// JS runs on a single thread. Sync code run line by line if Async code jump so Async task goes to background (Web API) and constrol start executing Sync code when it finished Async task goes to queue and event loop check if call stack is empty then it push the Async task to call stack and execute it

// Main stack and side stack so Async process in side stack and when it finished it push to main stack and execute it after all sync code is executed

// js cannot pause sync code in the middle. it will execute all sync code then run Async code at end


console.log('start')

//async code
setTimeout(function(){
    console.log('this is setTimeout')
},10)

console.log('end')



// for Async we use async before fun and use await in function
async function malware(){
    var data=await fetch('https://randomuser.me/api')  // fetch is Non blocking and by nature its Async
    console.log('blob is fetched',await data.json()) // stop until data converted into json
}

malware()

console.log('Api fetching data...')