const express = require('express') 
const path = require('path')
const app = express()
const port = 3000 //variavel de ambiente

//chamando o modulo interno path
const Path = require('path')


//acessando a pasta templates
const basePath = path.join(__dirname,'templates')

//acessando o arquivo index.html
//obs: unindo a variavel do basePath ao index.html
app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

//enviando resposta
app.listen(port, ()=>{
    console.log(`App Rodando na Porta ${port}`)
})