/*
ITERANDO SOBRE LISTAS DE NODELIST (COMO EM QUERYSELECTOR ALL)

"document,querySelectorAll('button')", essa função seleciona todos os elemetos "<button>" do documento HTML e retorna uma
NodeList, que é semelhante a um array e contém todos os botões encontrados.

O resultado é armazenado na variável "buttons".

"for (const button of buttons) {...}", esse é um loop "for..of" que percorre cada elemento (button) dentro da "NodeList" chamada "buttons".

A cada percorrida (iteração), a variável "button" representará um botão individual da lista.

"button.addEventListener('click', () => console.log('clicked'));", para cada botão encontrado, o código adidciona um listener (ouvinte) de eventos de clqiue
usando "addEventListener()".

O código especifica que, quando o botão for clicado, a função de callback será executada.

A função de callback (`() => console.log('clicked')`) simpesmente imprime a mensagem "clicked" no console cada vez que o botão for clicado.

O que o código faz:

Esse código essencialmente adiciona um comportamento a todos os botões da página. Quando qualquer um dos botões for clicado, a mensagem "clicked" aparederá no console.
*/



const buttons = document.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener('click', () => console.log('clicked'));
}