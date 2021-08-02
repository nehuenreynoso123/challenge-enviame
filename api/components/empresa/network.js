const express = require('express')
const router = express.Router()
const controller = require('./index')
const response = require('../../network/response')

router.post("/fake/:quantity",insertFakeData)
router.post("/",insert)
router.get("/:id",getId)
router.get("/",list)
router.put("/",update)
router.delete("/:id",remove)

async function insert(req,resp,next){
    const data = req.body;
    controller.insert(data)
    .then((data)=>response.success(req,resp,data))
    .catch(next)


}

function getId(req,resp,next){
    const id = req.params.id;
    controller.getId(id)
    .then((data)=>response.success(req,resp,data))
    .catch(next)

}

function list(req,resp,next){
    const data = req.body;
    controller.list(data)
    .then((data)=>response.success(req,resp,data))
    .catch(next)


}

function update(req,resp,next){
    const data = req.body;
    controller.update(data)
    .then((data)=>response.success(req,resp,data))
    .catch(next)


}

function remove(req,resp,next){
    const id = req.params.id;
    controller.remove(id)
    .then((data)=>response.success(req,resp,data))
    .catch(next)


}

function insertFakeData(req,resp,next){
    const quantity = req.params.quantity;
    controller.insertFakeData(quantity)
    .then((data)=>response.success(req,resp,data))
    .catch(next)
}

module.exports=router