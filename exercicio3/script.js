// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

const somar = (numero1, numero2) => {
    const soma = numero1 + numero2
    return `${numero1} + ${numero2} = ${soma}`
}

const subtrair = (numero1, numero2) => {
    const subtrai = numero1 - numero2
    return `${numero1} - ${numero2} = ${subtrai}`
}

const multiplicar = (numero1, numero2) => {
    const multiplica = numero1 * numero2
    return `${numero1} x ${numero2} = ${multiplica}`
}

const dividir = (numero1, numero2) => {
    const divide = numero1 / numero2
    return `${numero1} : ${numero2} = ${divide}`
}

// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

const primeiroNumero = Number(prompt(`Digite o primeiro número`))
const segundoNumero = Number(prompt(`Digite o segundo número`))

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

somar(primeiroNumero, segundoNumero)
subtrair(primeiroNumero, segundoNumero)
multiplicar(primeiroNumero, segundoNumero)
dividir(primeiroNumero, segundoNumero)

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

const soma = somar(primeiroNumero, segundoNumero)
const subtracao = subtrair(primeiroNumero, segundoNumero)
const multiplicacao = multiplicar(primeiroNumero, segundoNumero)
const divisao = dividir(primeiroNumero, segundoNumero)

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
