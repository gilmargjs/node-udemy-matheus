//importando minimist
const minimist = require("minimist")

//usando minimist para resgatar os argumentos
const args = minimist(process.argv.slice(2))

console.log(args)

//acessando com anotação de array
const nome = args["nome"]
const profissao = args["profissao"]
console.log(`o nome dele é ${nome} e a prifissão é ${profissao} `)