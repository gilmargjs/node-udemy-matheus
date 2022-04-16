const readLine = require("readLine").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readLine.question('Qual a sua linguagem preferida? ', (languagem)=>{
    console.log(`A minha linguagem favorita é ${languagem}`)
    readLine.close()
})