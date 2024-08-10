const expres = require('express')
const app = expres()
const path = require('path')
const PORT = 8000;


const staticPath = path.join(__dirname, '../public')
app.use(expres.static(staticPath))


app.listen(PORT, () =>{
    console.log("Server Running On Port Number "+PORT)
})
