const fs = require('fs')

console.log('inicio')

//essa linha sera excutada no final
fs.writeFile('arquivo.txt', 'olá pessoal', function(err){
    setTimeout(function(){
        console.log('arquivo criado')
    }, 1000)
})

console.log('fim')