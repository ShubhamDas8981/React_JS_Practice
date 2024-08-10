const process = require('process')


process.on('beforeExit', () =>{
    console.log("Hello BeforeExit")
})


process.on('exit', () =>{
    console.log("Exit")
})


console.log("Hello World")
