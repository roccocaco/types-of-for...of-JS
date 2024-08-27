/*
ITERANDO SOBRE UM ARRAY DE NÚMEROS
(esse código percorre um array chamado "numbers" e imprime cada número individualmente no console)

O array "numbers" contém cinco números "[10, 20, 30, 40, 50]".

O loop "for...of" é utilizado para passar por (iterar) cada elemento desse array.

Cada vez que passar ou percorrer (iterar), o valor atual do elemento do array é armazenado na variável "number".

O "console.log(number)" imprime o valor de "number" no console a cada vez que percorrer (iterar).


Este código é útil quando voce precisa percorrer um array executar alguma operação para cada um dos seus elementos.
*/



const numbers = [10, 20, 30, 40, 50];

for (const number of numbers) {
    console.log(number);
}