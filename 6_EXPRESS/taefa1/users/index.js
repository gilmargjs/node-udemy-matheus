//chamando o express
const express = require('express')

const router = express.Router()

const path = require('path')


//acessando a pasta templates
const basePath = path.join(__dirname, '../templates')


router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})


//aqui recebe os dados do html e coloca no console
router.post('/save', (req, res) => {
    console.log(req.body)
    //dados de nome
    const name = req.body.name
    //dados de idade
    const age = req.body.age

    //retorna para o front
    console.log(`o nome do usuário  é ${name} e ele tem ${age} anos`)
    res.sendFile(`${basePath}/userForm.html`)
})

//acessando o arquivo index.html
//obs: unindo a variavel do basePath ao index.html
router.get('/:id', (req, res) => {
    const id = req.params.id

    //Leitura da tabela user, resgatar um usuário do banco
    console.log(`Estamos Buscando pelo Usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

//exportando as rotas
module.exports = router