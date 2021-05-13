const express = require('express')
const router = express.Router()
const vendedores = require('./vendedores')

router.use(express.json())
router.use('/vendedores', vendedores)

module.exports = router