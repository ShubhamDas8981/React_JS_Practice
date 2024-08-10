const process = require('process')


const abortFunction = () =>{
    console.log("Start...")
    setInterval((function(){
        console.log("Hello Function")
    }), 5000)


    setTimeout((function(){
        return process.abort()
    }), 20000)
}


abortFunction()
