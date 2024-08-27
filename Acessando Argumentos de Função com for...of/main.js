/*
ITERANDO SOBRE ARGUMENTOS DE FUNÇÕES (OBJECT `ARGUMENTS`)

"function sumAll() {...}", essa linha define uma função chamada "sumAll".

"for (cost number of arguments) {...}", esse loop "for...of" percorre o objeto "arguments". O "arguments" é um objeto semelhante
a um array que contém todos os argumentos passados para a função, mesmo que a função não os tenha declarado explicitamente como parâmetros.

"sumAll(32, 23, 7, 5)", essa linha chama a função "sumAll", passando quatro argumentos: "32", "23", "7", "5".


O que o código faz:

Quando a função "sumAll" é chamada, ela recebe os argumentos "32", "23", "7", "5". o loop "for...of" percorre cada um desses valores do objeto
"arguments"  e os imprime no console.

ARGUMENTS: é um objeto especial usado dentro de funções para acessar os argumentos passados, mas NÃO É UM ARRAY verdadeiro e não possui métofos de array.

ARRAY: é uma estrutura de dados completa com métodos e propriedades para manipulação avançada de coleções de dados.
*/



function sumAll() {
    for (const number of arguments) {
        console.log(number);
    }
}
sumAll(32, 23, 7, 5);