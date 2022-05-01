//Somar todos os valores do array e exibir em uma constante

const numbers = [1,2,3];

const sumResult = numbers.reduce( (accumulator, item) => accumulator + item, 0);

console.log(sumResult);

/* OBS:
A cada execução da função o parâmetro accumulator vai acumular o valor do item. Ou seja, accumulator vai ser somado ao item a cada execução de itens do array.

Já o "0" serve para ter um valor padrão/inicial para o parâmetro accumulator. Pode ser qualquer valor, dependendo da sua necessidade. 
*/

// Exemplo com string, para somar nome e sobrenome:

const numbers = ['Fabio', 'França'];

const sumResult = numbers.reduce( (accumulator, item) => 
                                 accumulator + ' ' + item, '');

console.log(sumResult);