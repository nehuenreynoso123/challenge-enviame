const express = require('express')
const networkEmpresa = require('../components/empresa/network')
const networkDeliveries = require('../components/envio/network')

module.exports = (server)=>{
    server.use("/empresa",networkEmpresa)
    server.use("/envio",networkDeliveries)
}

