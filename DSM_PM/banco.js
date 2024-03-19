const Sequelize = require("sequelize")
const sequelize = new Sequelize("dsm","root","",{
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar:" + erro)
})

const agendamentos = sequelize.define("agendamentos",{
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    observacao: {
        type: Sequelize.STRING
    }
})

// Isso é utilizado para criar o banco de dados no servidor
//agendamentos.sync({force: true})

/*agendamentos.create é uma forma manual de inserir dados no banco 

agendamentos.create({
    nome: "Fábio Mendonça",
    endereco: "Terra do nunca",
    bairro: "Neverland",
    cep: "00000-001",
    cidade: "São Paulo",
    estado: "SP",
    observacao: "Teste para aula"
})*/

module.exports = agendamentos


