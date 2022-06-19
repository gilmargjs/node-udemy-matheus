const fs = require('fs')

fs.stat('novoArquivo.txt', (err, stats)=>{
    if(err){
        console.log(err)
        return
    }
    //ver se é um arquivo?
    console.log(stats.isFile())
    //ver se é dietório?
    console.log(stats.isDirectory())
    //é um link simbolico?
    console.log(stats.isSymbolicLink())
    //a data de criação
    console.log(stats.ctime)
    //tamanho de arquivo
    console.log(stats.size)
})