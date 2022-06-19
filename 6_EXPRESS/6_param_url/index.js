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
app.get('/user/:id', (req, res)=>{
    const id = req.params.id

    //Leitura da tabela user, resgatar um usuário do banco
    console.log(`Estamos Buscando pelo Usuário: ${id}`) 

    res.sendFile(`${basePath}/form.html`)
})

app.post('/user/save', (req,res)=>{
    
})                                                                                                                                                                                                  

//enviando resposta
app.listen(port, ()=>{
    console.log(`App Rodando na Porta ${port}`)
})

app.get('/user/add', (req,res)=>{

    res.sendFile(`${basePath}/user/form.html`)
})


