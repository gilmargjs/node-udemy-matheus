function a() {
    console.log('Executando a()')
}

function b() {
    console.log('Executando b()')
    a()
    c()
}

function c() {
    console.log('Executando c()')
}


b()