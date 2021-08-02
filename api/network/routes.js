const express = require('express')
const networkEmpresa = require('../components/empresa/network')
const networkDeliveries = require('../components/envio/network')
const networkEjercicio = require('../components/ejercicio/network')


module.exports = (server)=>{
    server.use("/empresa",networkEmpresa)
    server.use("/envio",networkDeliveries)
    server.use("/ejercicio",networkEjercicio)
}

