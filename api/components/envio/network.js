const express = require('express')
const router = express.Router()
const controller = require('./index')
const response = require('../../network/response')


router.post("/",insert)

function insert(req,resp,next){
    const data = req.body;
    controller.insert(data)
    .then((data)=>response.success(req,resp,data))
    .catch(next)

}


module.exports=router