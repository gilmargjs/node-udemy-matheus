//IMPORTANDO O MODULO "OS"
const os = require('os')

//qunatas CPUs
console.log(os.cpus())

//quanto de memória livre tem na maquina
console.log(os.freemem())

//qual o diretorio da Home
console.log(os.homedir())

//que sistema operacional está rodando na maquina
console.log(os.type())  