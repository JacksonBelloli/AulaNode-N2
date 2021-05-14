const express = require('express')
const router = express.Router()
const Cliente = require('../models/Cliente')

router.get('/', async (req, res) =>{
    var cliente = await Cliente.find()
    return res.json(cliente)
})

router.post('/', async (req, res) =>{
    const cliente = new Cliente(req.body)
    var resultado = await cliente.save()
    return res.json(resultado)
})

module.exports = router