const express = require('express')

const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/dashbord',(req, res)=>{
    res.render('dashbord')
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
    
    const auth = true

    res.render('home', {
        user: user,
        ensino: ensino,
        auth,
    })
})

    app.listen(3000, () => {
        console.log("App Funcionando!")
    })