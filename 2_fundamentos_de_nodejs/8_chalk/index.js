const chalk = require("chalk")

const nota = 9

if(nota >= 7){
    console.log(chalk.bgGreen.yellow.bold("parabens você está aprovado!"))
}else{
    console.log(chalk.bgRed.white("estude mais um pouco!"))
}