/*
ITERANDO SOBRE SET (VALORES ÚNICOS)

"const set = new Set([5, 4, 3, 2, 1])"; está linha cria um novo objeto "Set", que armazena "[5, 4, 3, 2, 1]".

Um "set" em JS é uma coleção de valores que não permite valores duplicados.

"for (const value of set {...})", este é um loop "for...of" que é usado para passar por (iterar) cada valor presente no "set" chamado "set".

Em cada passda (iteração), o valor atual de "set" é atribuído a variável "value".


O quue o código faz:

Ele cria um conunto de números e, usando o loop "for...of", percorre cada número no conjunto (set), exibindo-o no conole. Como "set" 
NÃO ACEITA valores duplicados, o loop garante que todos os valores no conjuntos sejam únicos.
*/



const set = new Set([5, 4, 3, 2, 1]);
for (const value of set) {
    console.log(value);
}