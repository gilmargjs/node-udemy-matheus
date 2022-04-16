//verificando erro com try e catch

const x = 10

try{
    //não é posivel reatribuir um valor a uma constante
    x = 2
}catch(err){
    //mensagem de erro
    console.log(`Erro: ${err}`)
}


 