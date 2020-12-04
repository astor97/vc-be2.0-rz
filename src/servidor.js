const porta = 3333

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/territories', (req, res, next) => { // Retorna todos os produtos
    res.send(bancoDeDados.getTerritories())
})

app.get('/territories/:id', (req, res, next) => { // Retorna o produto de um determinado ID
    res.send(bancoDeDados.getTerritorie(req.params.id))
})

app.post('/territories', (req, res, next) => { // Cria um produto
    
    const territories = bancoDeDados.salvarTerritorie({
        data:{
        nome : req.body.name,
        inicio : {x : req.body.inicio, y : req.body.inicio},
        fim : { x : req.body.fim, y : req.body.fim},
        área : req.body.fim * req.body.fim,
        pintado_área :  0
        }
        //Completar quando aprender a pintar
        
        
    })
    
    res.send(territories)
})

app.delete('/territories/:id', (req, res, next) => { // Retorna o produto de um determinado ID
    res.send(bancoDeDados.excluirTerritorie(req.params.id))
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})