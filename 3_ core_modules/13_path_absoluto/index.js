const path = require("path")


//path absoluto
console.log(path.resolve('teste.txt'))

//formar path
const meidFolder = 'relatorios'
const fileName = 'gilmar.txt'

const finalPath = path.join('/', 'arquivos',meidFolder,fileName) 
console.log(finalPath)