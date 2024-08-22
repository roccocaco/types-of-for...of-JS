/*
ITERANDO SOBRE UMA STRING

O que é um loop "for of" ?
É uma maneira de iterar(ou passar) por cada elemento de uma lista ou string,
um de cada vez.

"const lyrics": esta parte declara uma constante chamada "lyrics". Em cada iteração
do loop, "lyrics" vai receber o valor de um caractere da string "word".

"of word": isto indica que o loop deve percorrer todos os caracteres da string "word".

Como o loop funciona ?
"lyrics" recebe o valor "V"(primeiro caractere da string).

Depois que todos os caracteres da string "word" foram processadas, o loop termina.
Isso significa que cada caractere da string foi impresso um por vez, na ordem em que 
aparecem na string.
*/


const word = "vinyl";

for (const lyrics of word) {
    console.log(lyrics);
}