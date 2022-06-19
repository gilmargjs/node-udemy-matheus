const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3002

const server = http.createServer((req, res) => {
    //buscando o query
    const q = url.parse(req.url, true)

    //buscando aparti do '/'
    //ou seja do segundo caractere pra frente
    const fileName = q.pathname.substring(1)

    //só vai entrar no if se for html    
    if (fileName.includes('html')) {
        if (fs.existsSync(fileName)) {
            fs.readFile(fileName, function (err, data) {
                res.writeHead(200, {
                    'content-Type': 'text/html'
                })
                res.write(data)
                return res.end()
            })
        } else {
            fs.readFile('404.html', function (err, data) {
                res.writeHead(404, {
                    'content-Type': 'text/html'
                })
                res.write(data)
                return res.end()
            })
        }
    }
})
server.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)

})