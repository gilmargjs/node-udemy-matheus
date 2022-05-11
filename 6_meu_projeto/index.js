//modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

//modulos internos
const fs = require('fs')

operation()

function operation() {
    inquirer.prompt([{
            type: 'list',
            name: 'action',
            message: 'oque você deseja fazer?',
            choices: ['Criar Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair', ],
        }, ])
        .then((answer) => {
            const action = answer['action']
            if (action === 'Criar Conta') {
                creatAccount()
            }
        }).catch((err) => console.log(err))
}

//create an account
function creatAccount() {
    console.log(chalk.bgRed.green('Parabens por Escolher o nosso Banco!'))
    console.log(chalk.green('Defina as Opções da Sua Conta a Seguir'))

    buidAccount()
}

function buidAccount() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Digite um Nome Para a Sua Conta: '
    }]).then(answer => {
        //imprimir a variavel
        //ou seja o nome que o usuário digitou
        const accountName = answer['accountName']
        //logar o nome da conta
        console.info(accountName)

        //criar banco de dados para checar as contas
        if (!fs.existsSync('accounts')) {

            //VERIFICAR SE TEM O DIRETÓRIO
            //se não existir será criado um diretório
            fs.mkdirSync('accounts')
        }

        //VERIFICAÇÃO PARA SABER SE NOME DA CONTA EXISTE 
        //SE JÁ EXISTE NÃO DEIXARÁ PROSSEGIR
        //o arquivo será salvo em json
        if (fs.existsSync(`accounts/${accountName}.json`)) {
            //se já existir mostrar mensagem de erro
            console.log(chalk.bgRed.black('esta conta já existe, escolha outro nome! '))

            //inicando um novo ciclo reiniciando a parte de criação
            buidAccount()

            return
        }
        //se não houver este arquivo vai ser a criação
        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance":0}',
            //
            function (err) {
                console.log(err)
            },
        )
            //mensagem de sucesso
            console.log(chalk.green('Parabens, A Sua Conta Foi Criada!'))
            //voltando  para escolher uma nova ação 
            operation()
    }).catch((err) => console.log(err))

}