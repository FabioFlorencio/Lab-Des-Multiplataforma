const Sequelize = require("sequelize")
const sequelize = new Sequelize("dsm","root","1234",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao conectar!" + erro)
})

/*const agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    Observacao:{
        type: Sequelize.STRING
    }
})*/

//agendamentos.sync({force: true})

/*agendamentos.create({
    nome: "Florêncio",
    endereco: "Av Aguia de Haia, 2700",
    bairro: "E.A Carvalho",
    cep: "08240-000",
    cidade: "São Paulo",
    estado: "SP",
    Observacao: "Teste"
})

*/