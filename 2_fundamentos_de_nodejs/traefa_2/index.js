// const chalk = require('chalk')
const inquirer = require('inquirer')

inquirer.prompt([{
            name: 'p1',
            message: 'Qual éo seu Nome?',
        },
        {
            name: 'p1',
            message: 'Qual é a sua idade?',
        },
    ])
    .then((answers) => {
        console.log(answers)
    })
    .catch((err) => console.log(err))