const express = require('express')
const router = express.Router()
const Calcado = require('../models/Calcado')

router.get('/', async (req, res) =>{
    var calcado = await Calcado.find()
    return res.json(calcado)
})

router.post('/', async (req, res) =>{
    const calcado = new Calcado(req.body)
    var resultado = await calcado.save()
    return res.json(resultado)
})

module.exports = router