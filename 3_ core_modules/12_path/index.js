const path = require('path')

const customPath = '/relatorios/gilmar/relatorio1.pdf'

//nome do diretório
console.log(path.dirname(customPath))
//nome do arquivo
console.log(path.basename(customPath))
//nome da extensão
console.log(path.extname(customPath))
