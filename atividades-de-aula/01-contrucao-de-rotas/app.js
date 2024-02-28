

const express = require('express')
const app = express()

app.listen(8081, function(){
    console.log("Testando!")
})

app.get("/", function(req, res){
    res.send("Estamos aprendendo o conceito de rotas")
})

app.get("/produtos/automvel/marca/modelo/ano", function(req, res){
    res.send("Página ano!")
})

app.get("/cadastrar/usuario", function(req, res){
    res.send("Página usuário")
})

app.get("/contato", function(req, res){
    res.send("Página contato")
})