const mongoose = require('../data')

var clienteSchema = new mongoose.Schema({
    nome : String,
    data_nasc : Date,
    cpf : Number,    
    endereco : String,
    cidade : String,
    estado : String,
    cep : Number,
}, {timestamps : true})

var Cliente = mongoose.model('Cliente', clienteSchema)

module.exports = Cliente