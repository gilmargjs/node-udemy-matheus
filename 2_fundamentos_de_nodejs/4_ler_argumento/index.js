//nome

console.log(process.argv)

//
const args = process.argv.slice(2)
console.log(args)

//split divide a string pelo = e retorna o segundo parametro [1] = gilmar
const nome = args[0].split("=")[1]
//arg[1] = idade=30 split("=")divide no = e retorna[1] que é o valor 30
const idade = args[1].split('=')[1]

console.log(`O nome dele é ${nome} e sua idade é ${idade}`)
console.log(idade)