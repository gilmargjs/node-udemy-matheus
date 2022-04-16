const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {
    //escrever resposta para o usuário
    res.write('OI HTTP')
    //finalizando  a resposta
    res.end()
})
//escutando a porta
server.listen(port, () => {
    //sinalizando que tudo tá ok
    console.log(`servidor rodando na porta ${port}`)
})