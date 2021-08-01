const config = require('./config')
const express = require('express')
const routes = require('./network/routes')
const app = express()
const error = require("./network/error")
const port = config.api.port;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
routes(app)
app.use(error)


app.listen(port,()=>{
    console.log('api corriendo en http://localhost:'+port)
})