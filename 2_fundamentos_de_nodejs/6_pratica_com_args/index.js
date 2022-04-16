//modulo extern
//importando minimist
const minimist = require("minimist")


//modulo interno
//importando o do arqivo soma e pegando a função soma dele
const soma = require('./soma').soma

//usando minimist para resgatar os argumentos
//informação vinda da linha da comando
const args = minimist(process.argv.slice(2))
  
const a = parseInt(args["a"])
const b = parseInt(args["b"])

soma(a, b)