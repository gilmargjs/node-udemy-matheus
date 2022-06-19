const express = require('express') 
const app = express()
const port = 3000 //variavel de ambiente

//enviando a rota
app.get('/', (req, res)=>{
    res.send('Olá Mundo! aqui está a rota')
})

//enviando resposta
app.listen(port, ()=>{
    console.log(`App Rodando na Porta ${port}`)
})