/*
ITERANDO SOBRE UM ARRAY

O que é um loop "for of" ? 
É uma maneira de iterar (ou passar) por cada elemento de uma lista (ou array)
um de cada vez. 

"const element": está parte declara uma constante chamada "element". Em cada
iteração do loop, "element" vai receber o valor de um elemento do array "data".

"of data": isto indica que o loop deve percorrer todos os elementos do array "data".

Como o loop funciona ?
"element" recebe o valor "vinil" (primeiro elemento do array).

Somente depois que todos os elementos do array "data" foram processados, o loop termina.
Isso significa que cada elemento do array foi impresso um por vez, na ordem em que
aparecem no array.
*/


const data = ["vinil", "fita", "CD", "digital"];

for (const element of data) {
    console.log(element);
}