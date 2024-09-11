# Tipos de For...Of JS

O `for...of` em JavaScript é uma ferramenta versátil para iteração sobre diferentes tipos de coleções. Com ele, você pode acessar argumentos de funções, percorrer elementos de arrays e strings, e iterar sobre valores únicos em `Set`s. Também é útil para manipular pares chave-valor em `Map`s, e elementos de `NodeList`, além de processar resultados de `Promises` com `for await...of`. Em resumo, `for...of` facilita a iteração direta e eficiente sobre qualquer coleção que seja iterável, tornando o trabalho com dados mais intuitivo e organizado.

## Acessando Argumentos de Função com `for...of`*

### Descrição

Permite acessar todos os argumentos passados para uma função, mesmo quando não são especificados como parâmetros formais.

### Como Funciona:

Itera sobre o objeto `arguments` (ou transformações semelhantes) para processar cada argumento individualmente.

## Extraindo Valores de um Objeto com `Object.values()`

### Descrição

Obtém todos os valores das propriedades enumeráveis de um objeto.

### Como Funciona:

Converte as propriedades do objeto em um array de valores, que pode ser facilmente iterado para acessar ou manipular os valores.

## Iterando Sobre Elementos de um Array

### Descrição

Permite percorrer cada elemento em um array.

### Como Funciona:

Itera diretamente sobre os itens do array, permitindo executar operações em cada elemento, como exibir ou modificar.

## Iterando Sobre Todos os Valores Únicos em um `Set` com `for...of`

### Descrição

Percorre todos os valores em um `Set`, que é uma coleção de valores únicos.

### Como Funciona:

Itera sobre cada valor no `Set`, ignorando duplicatas e permitindo acesso a cada item único da coleção.

## Iterando Sobre os Caracteres de uma String

### Descrição

Permite percorrer cada caractere individual em uma string.

### Como Funciona:

Itera sobre cada caractere na string, o que é útil para análises de texto ou operações de string.

## Loop Sobre Cada Caractere de uma String com `for...of`

### Descrição

Itera sobre cada caractere individual de uma string, permitindo realizar operações em cada caractere de forma sequencial e direta.Similar ao item anterior, mas com foco na iteração usando `for...of`.

### Como Funciona:

Usa `for...of` para percorrer cada caractere de uma string, facilitando operações que precisam acessar cada caractere separadamente.

## Manipulando Resultados de `Promises` com `for await...of`

### Descrição

Permite iterar sobre resultados de `Promises` de maneira assíncrona.

### Como Funciona:

Espera cada `Promise` ser resolvida antes de continuar para o próximo item, útil para processamento de dados assíncronos.

## Obtendo Chaves de um Objeto com `Object.keys()`

### Descrição

Obtém todas as chaves (ou propriedades) de um objeto.

### Como Funciona:

Converte as chaves do objeto em um array, permitindo iterar sobre elas para acessar ou manipular as propriedades.

## Percorrendo Cada Par de Chave e Valor em um `Map` com `for...of`

### Descrição

Itera sobre pares de chave e valor em um `Map`, que é uma coleção ordenada de pares chave-valor.

### Como Funciona:

Permite acessar e manipular tanto as chaves quanto os valores no `Map` de forma simultânea.

## Percorrendo Elementos de um `NodeList` com `for...of`

### Descrição

Itera sobre os elementos de um `NodeList`, que é uma coleção de nós DOM retornada por métodos de seleção.

### Como Funciona:

Permite acessar e manipular cada elemento da coleção de nós DOM, como parágrafos ou divs, diretamente.
