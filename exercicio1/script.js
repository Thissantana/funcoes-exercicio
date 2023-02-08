//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
/*
function olaNome(nome){
    const qualSeuNome = `Olá, ${nome}!!`
    console.log(qualSeuNome)
}

olaNome(`Thiago`)

//b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.

function recebeNumero(numero){
    const taboada1 = numero * 1
    const taboada2 = numero * 2
    const taboada3 = numero * 3
    const taboada4 = numero * 4
    const taboada5 = numero * 5
    const taboada6 = numero * 6
    const taboada7 = numero * 7
    const taboada8 = numero * 8
    const taboada9 = numero * 9
    const taboada10 = numero * 10
    console.log(`${numero} x 1 = ${taboada1}
${numero} x 2 = ${taboada2}
${numero} x 3 = ${taboada3}
${numero} x 4 = ${taboada4}
${numero} x 5 = ${taboada5}
${numero} x 6 = ${taboada6}
${numero} x 7 = ${taboada7}
${numero} x 8 = ${taboada8}
${numero} x 9 = ${taboada9}
${numero} x 10 = ${taboada10}`)
}
recebeNumero(12)
recebeNumero(4)
recebeNumero(9)
*/
//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

const olaNome = function(nome){
    const qualSeuNome = `Olá, ${nome}!!`
    console.log(qualSeuNome)
}

olaNome(`Joaldo`)
olaNome(`Graça`)
olaNome(`Jéssica`)
olaNome(`Thiago`)

const recebeNumero = (numero) => {
    console.log(`${numero} x 1 = ${numero * 1}
${numero} x 2 = ${numero * 2}
${numero} x 3 = ${numero * 3}
${numero} x 4 = ${numero * 4}
${numero} x 5 = ${numero * 5}
${numero} x 6 = ${numero * 6}
${numero} x 7 = ${numero * 7}
${numero} x 8 = ${numero * 8}
${numero} x 9 = ${numero * 9}
${numero} x 10 = ${numero * 10}`)

}
recebeNumero(13)
recebeNumero(4)
recebeNumero(3)