/*
ITERANDO SOBRE CHAVES DE UM OBJETO COM OBJECT.KEYS()

"const data = { product: "laptop", price: 3000, stock: 32};", esta linha cria um objeto chamado "data" com três propriedade: "procuct", "price", "stock".

"Object.keys(data)", o método "Object.keys()" retorna um array contendo os nomes das propriedades enumeráveus do obejto "data".

Para o objeto "data", ele retorna o array: ["product", "price", "stock"].

"for (const key of Object.keys(data)) {...}", esse loop "for...of" percorre/passa (itera) por cada chave no array retornado por "Object.keys(data)",

A variável "key" representa a chave atual durante cada percorrida (iteração) do loop.


O que o código faz:

O código cria um obeto, obtém suas chaves usando "Object.keys()", e depois percorre/passa (itera) por essas chaves. Isso é útil quando você deseja listar
todas as chves de um objeto sem precisar conhecer os nomes das propriedades com antecedência. 

DIFERENÇAS ENTRE:

Object.keys(): Retorna um array contendo as chaves ex.:  product, price, stock.
Ideal para quando você precisa das chaves de um objeto, por ex. para percorrer, passar (iterar) pelas propriedades ou acessar dados dinamicamente.

Object.values(): Retorna um array contendo os valores das propriedades de um objeto ex.: laptop, 3000, 32.
Ideal para quando você precida dos valores das propriedades de um objeto, por ex. para processamento ou análise dos valores.
*/



const data = {product: "laptop", price: 3000, stock: 32};
for (const key of Object.keys(data)) {
    console.log(key);
}