//importando http
const fs = require('fs')
const http = require('http')


//porta de saida
const port = 3000

//criando servidor
//renderizando o arquivo pelo http
const server = http.createServer((req, res)=>{
    //lendo o arquivo html retornando erro ou o arquivo 
    fs.readFile('mensagem.html', function(err, data){
        //escrenendo no heade
        res.writeHead(200, {'content-Type': 'text/html'})
        //retornado o arquivo html
        res.write(data)
        return res.end()
    })

})

server.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`)

})