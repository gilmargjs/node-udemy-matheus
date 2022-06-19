const express = require('express') 
const path = require('path')
const app = express()
const port = 3000 //variavel de ambiente

//chamando o modulo interno path
const Path = require('path')


//acessando a pasta templates
const basePath = path.join(__dirname,'templates')

//altenticação
const checkAuth = function(req,res,next){
    req.authStatus = true

    if(req.authStatus){
        console.log('está logado, Pode continuar')
        next()
    }else{
        console.log('Não está logado, faça o login')
        next()
    }
}

app.use(checkAuth) 

//acessando o arquivo index.html
//obs: unindo a variavel do basePath ao index.html
app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

//enviando resposta
app.listen(port, ()=>{
    console.log(`App Rodando na Porta ${port}`)
})