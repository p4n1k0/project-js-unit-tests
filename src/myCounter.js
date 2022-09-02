/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.
  Atenção: não remova os `for`s da função e sim corrija os erros presentes.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  let array = [];

  for (let count = 0; count <= 3; count += 1) {
    array.push(count);
    for (let count2 = 2; count2 <= 3; count2 += 1) {
      array.push(count2);
    }
  }
  return array;
};

module.exports = myCounter;
