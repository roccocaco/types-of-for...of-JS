/*
ITERANDO SOBRE OBJETOS COM OBJECT.VALUES():

"const person = { name: "John", age: 29, city: "New York"};", Cria um objeto chamado "person" com três propriedades: "name", "age", "city".

"Object.values(person)", o método "Object.values()" retorna um array contendo todos os valores das propriedades enumeráveis do objeto "person".

Para o objeto "person", isso retorns o array "["John", 29, "New York"]".

"for (const value of Object.values(person)) {...}", o loop "for...of" passa/percorre (itera) por cada valor do array retornado por "Onject.value(person)".

A variável "value" representa o valor atual durante cada passada do loop.


O que o código faz:

O código cria um objeto, extrai/tira seus valores usando "Object.values()", e então percorre/passa (itera) por esses valores, imprimindo cada um no console.

*/


const person = { name: "John", age: 29, city: "New York" };
for (const value of Object.values(person)) {
  console.log(value);
}