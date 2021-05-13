const express = require('express')
const router = express.Router()
const Vendedor = require('../models/Vendedor')

router.get('/', async (req, res) =>{
    var vendedor = await Vendedor.find()
    return res.json(vendedor)
})

router.post('/', async (req, res) =>{
    const vendedor = new Vendedor(req.body)
    var resultado = await vendedor.save()
    return res.json(resultado)
})

module.exports = router