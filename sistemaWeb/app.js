const express = require("express")
const app = express()
// a função engine seria um motor gráfico, responsável pela renderização da página
const handlebars = require("express-handlebars").engine

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.get("/", function(req, res){
    res.render("cadastro")
})

app.get("/listar", function(req, res){
    res.render("listar")
})
app.get("/teste", function(req, res){
    res.render("teste")
})

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})


