const express = require('express') 
const path = require('path')
const app = express()
const port = 3000 //variavel de ambiente

//chamando o modulo interno path
const Path = require('path')


//acessando a pasta templates
const basePath = path.join(__dirname,'templates')

//ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())


app.get('/user/add',(req, res)=>{
    res.sendFile(`${basePath}/form.html`)
})

//aqui recebe os dados do html
app.post('/user/save',(req, res)=>{
    console.log(req.body)
    //dados de nome
    const name = req.body.name
    //dados de idade
    const age = req.body.age

    //retorna para o front
    console.log(`o nome do usuário  é ${name} e ele tem ${age} anos`)
    res.sendFile(`${basePath}/form.html`)
})

//acessando o arquivo index.html
//obs: unindo a variavel do basePath ao index.html
app.get('/user/:id', (req, res)=>{
    const id = req.params.id

    //Leitura da tabela user, resgatar um usuário do banco
    console.log(`Estamos Buscando pelo Usuário: ${id}`)

    res.sendFile(`${basePath}/user.html`)
})


//enviando resposta
app.listen(port, ()=>{
    console.log(`App Rodando na Porta ${port}`)
})