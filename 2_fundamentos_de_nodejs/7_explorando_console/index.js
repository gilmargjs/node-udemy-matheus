// mais de um valor
const x = 10
const y = "gilmar"
const z = [1,2,3]

console.log(x,y,z)

//contagem de impressão
console.count(`o valor de x é: ${x}, contagem`)
console.count(`o valor de x é: ${x}, contagem`)
console.count(`o valor de x é: ${x}, contagem`)
console.count(`o valor de x é: ${x}, contagem`)
console.count(`o valor de x é: ${x}, contagem`)

//variavel entre string
console.log('o nome é %s, ele tem %s anos, ea sequencia é %s, ', y, x, z)

//limpando o console

setTimeout(()=>{
    console.clear()
//após 2 segundos os dados do console serão apagados
}, 2000)

