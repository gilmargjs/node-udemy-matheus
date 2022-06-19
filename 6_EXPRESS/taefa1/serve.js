const express = require('express')

const app = express()

const port = 5000 //variavel de ambiente

const path = require('path')


const users = require('./users')


//ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//arquivos estáticos

//conteudo css
app.use(express.static('public'))

//acessando a pasta templates
const basePath = path.join(__dirname, 'templates')


app.use('/users', users)


//serve
app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

//users
app.get('/users', (req, res) => {
    res.sendFile(`${basePath}/users.html`)
})

app.use(function (req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

//enviando resposta
app.listen(port, () => {
    console.log(`App Rodando na Porta ${port}`)
})