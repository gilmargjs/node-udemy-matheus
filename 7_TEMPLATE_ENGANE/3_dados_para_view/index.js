const express = require('express')

const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const user = {
        name: 'GILMAR',
        surname: 'JOŚE DA SILVA',
        age: 30,
    }

    const ensino = {
        formacao: 'ANALISTA',
        mes: 'DEZEMBRO',
        ano: 2022,
    }

    res.render('home', {
        user: user,
        ensino: ensino,
    })
})

app.listen(3000, () => {
    console.log("App Funcionando!")
})