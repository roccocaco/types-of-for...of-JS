/*
ITERANDO SOBRE UM MAP

"const data = new Map()": cria um novo objeto "map". O "map" é uma
coleção de pares "key-value".

"map.set('key1', 'value1')": adiciona ao "data" um par onde "key1" é
a chave e "value1" é o valor.

Neste ponto, o "data" contém duas entradas:"key1" => "value1" e "key2" => "value2" 

O que é um loop for of ?
Itera sobre os elementos de um iterável, como um array ou um objeto "map". No caso
de um "map", cada iteração fornece um array [key, value].

Desestruturação: "const [key, value] of data" este código usa a desestruturação de 
array para seprar a key e o value. cada iteração do loop fornece um array [key, value]
que é desestruturado em duas variáveis "key" e "value".

Como o loop funciona ?
Primeira iteração: "data" retorna o primeiro par key-value, ['key1', 'value1'], então
"key" é 'key1' e value 'value1'.

Isso ocorre porque o loop "for of" percorre cada par key-value no "data" e imprime ambos 
no formato 'key: value'.
*/



const data = new Map();
data.set('key1', 'value2');
data.set('key2', 'value2');

for (const [key, value] of data) {
    console.log(`${key}: ${value}`);
}