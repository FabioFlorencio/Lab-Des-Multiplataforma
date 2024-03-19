
const express = require('express')
const app = express()

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/" , function(req, res){
    res.send("Seja bem vindo ao node js")
})

app.get("/cadastrar/:item/:quantidade", function(req, res){
    res.send("Página de cadastro - Item: " + req.params.item + " - quantidade: " + req.params.quantidade)    
})

app.get("/contato/", function(req, res){
    res.send("Página de contato - Teste")
})