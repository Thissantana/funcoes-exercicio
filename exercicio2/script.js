// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.

const somaNumeros = (numero1, numero2) => {
const soma = numero1 + numero2
console.log(`${numero1} + ${numero2} = ${soma}`)
}

somaNumeros(35, 25)

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const numeroMaiorOuIgual = (num1, num2) => {
    const maiorIgual = num1 >= num2
    console.log(`O número ${num1} é maior ou igual ao número ${num2}?
${maiorIgual}`)
}

numeroMaiorOuIgual(21, 12)
numeroMaiorOuIgual(12, 21)

// c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.

const parOuImpar = (number) => {
    const impaPar = number % 2 === 0
    console.log(`O número ${number} é par?
${impaPar}`)
}

parOuImpar(23)
parOuImpar(26)

// d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

const calculaSalario = (salarioBruto) => {
    const salarioLiquido = salarioBruto - (salarioBruto * 0.1)
    return `Total do salário com desconto: R$${salarioLiquido}`
}

console.log(calculaSalario(3000))
