const express = require('express')

const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/dashbord', (req, res) => {

    const items = ['gilmar', 'jois', 'jefferson', 'jonas', 'GILMAX']

    //enviando pro front
    res.render('dashbord', {
        items
    })

})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender a ser um Homem',
        category: 'Lição de Vida',
        body: 'Este artigo vai te ajudar a aprender viver de verdade ....',
        Comments: 4,
    }

    res.render('blogpost', {post})
})

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

    const approved = true

    const auth = true


    res.render('home', {
        user: user,
        ensino: ensino,
        auth,
        approved,
    })
})

app.listen(3000, () => {
    console.log("App Funcionando!")
})