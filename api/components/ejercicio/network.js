const express = require('express')
const router = express.Router()
const controller = require('./index')
const response = require('../../network/response')

router.get("/3",ejercicio_3)
router.get("/5",ejercicio_5)
router.get("/6",ejercicio_6)
router.get("/7",ejercicio_7)


function ejercicio_3(req,resp,next){
    controller.ejercicio_3()
    .then((data)=>response.success(req,resp,data))
    .catch(next)
}

function ejercicio_5(req,resp,next){
    controller.ejercicio_5()
    .then((data)=>response.success(req,resp,data))
    .catch(next)
}


function ejercicio_6(req,resp,next){
    controller.ejercicio_6()
    .then((data)=>response.success(req,resp,data))
    .catch(next)
}

function ejercicio_7(req,resp,next){
    controller.ejercicio_7()
    .then((data)=>response.success(req,resp,data))
    .catch(next)
}



module.exports=router