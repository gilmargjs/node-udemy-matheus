const fs = require('fs')

//verificando se a pasta minhaPasta existe
//caso não existir será criado uma 
if(!fs.existsSync('./minhaPasta')){
    console.log('Não Existe!')
    fs.mkdirSync('./minhaPasta')
}
//continuando a verificação na ocasião será identificado que existe
else if(fs.existsSync('./minhaPasta')){
console.log('Agora Existe')

}