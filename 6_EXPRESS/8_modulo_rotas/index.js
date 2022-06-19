const express = require('express')

const app = express()

const port = 3000 //variavel de ambiente

const path = require('path')


const users = require('./users')


//ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())


//acessando a pasta templates
const basePath = path.join(__dirname, 'templates')


app.use('/users', users)

 

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

//enviando resposta
app.listen(port, () => {
    console.log(`App Rodando na Porta ${port}`)
})