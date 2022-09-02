## Boas vindas ao repositório do projeto de ES6 e Testes Unitários!

---

## Sumário

- [Sumário](#sumário)
- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que foi desenvolvido](#o-que-foi-desenvolvido)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [1. Implemente a função `average`](#1-implemente-a-função-average)
  - [2. Implemente os casos de teste para a função `numbers`](#2-implemente-os-casos-de-teste-para-a-função-numbers)
  - [3. Implemente a função `vqv`](#3-implemente-a-função-vqv)
  - [4. Implemente os casos de teste para a função `circle`](#4-implemente-os-casos-de-teste-para-a-função-circle)
  - [5. Implemente a função `createStudent`](#5-implemente-a-função-createstudent)
  - [6. Implemente os casos de teste para a função `productDetails`](#6-implemente-os-casos-de-teste-para-a-função-productdetails)
  - [7. Implemente as funções `calculator` e `arrayGenerator`](#7-implemente-as-funções-calculator-e-arraygenerator)
  - [8. Implemente a função `myCounter`](#8-implemente-a-função-mycounter)
  - [9. Implemente os casos de teste para a função `getCharacter`](#9-implemente-os-casos-de-teste-para-a-função-getcharacter)
  - [10. Implemente a função `createMenu`, bem como seus casos de teste](#10-implemente-a-função-createmenu-bem-como-seus-casos-de-teste)
- [Depois de terminar o desenvolvimento (opcional)](#depois-de-terminar-o-desenvolvimento-opcional)
- [Revisando um pull request](#revisando-um-pull-request)
- [Avisos finais](#avisos-finais)

---

## Habilidades

- Escrever testes unitários para funções utilizando o módulo Jest do NodeJS para verificar o correto funcionamento dessas funções;
- A partir de testes já implementados, escrever funções de forma que elas atendam aos testes propostos;
- Escrever testes e funções utilizando uma abordagem de desenvolvimento orientado a testes.

---

## Requisitos do projeto

### 1. Implemente a função `average`

A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos. Caso a função receba algum valor não numérico ou um array vazio, o valor `undefined` deve ser retornado. Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1. O arquivo `average.spec.js` contém os testes para `average` já implementados. Implemente a função no arquivo `src/average.js` de forma que ela atenda aos testes propostos.

**O que será avaliado**

* Será validado se, ao receber um array de números, a função `average` retorna a média de seus valores;
* Será validado se, ao receber um array que contém valores não numéricos, a função `average` retorna `undefined`;
* Será validado se, ao receber um array vazio, a função `average` retorna `undefined`.

---

### 2. Implemente os casos de teste para a função `numbers`

A função `numbers` recebe um array (tamanho variável) e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário. Essa função já está implementada no arquivo `src/numbers.js`. Escreva pelo menos quatro testes para essa função para garantir que a implementação de `numbers` está correta.

**O que será avaliado**

* Será validado se no teste da função `numbers`, o retorno da função é `true` quando o array passado por parâmetro contém somente números.

---

### 3. Implemente a função `vqv`

Use template literals para escrever uma função que recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

```javascript
`Oi, meu nome é Tunico!
Tenho 30 anos,
trabalho na Trybe e mando muito em programação!
#VQV!`
```

Caso a função seja chamada sem nenhum parâmetro, o valor `undefined` deve ser retornado. O arquivo `vqv.spec.js` contém os testes para `vqv` já implementados. Implemente a função no arquivo `src/vqv.js` de forma que ela atenda aos testes propostos.

**O que será avaliado**

* Será validado se `vqv` é uma função;
* Será validado se a função `vqv` retorna dados do tipo string;
* Será validado se a função `vqv` retorna a frase esperada quando passados parâmetros de nome e idade;
* Será validado se a função `vqv`, quando chamada sem parâmetros, retorna `undefined`.

---

### 4. Implemente os casos de teste para a função `circle`

A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência). Se não for especificado um raio, a função retorna `undefined`. Essa função já está implementada no arquivo `src/circle.js`. Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

**O que será avaliado**

* Será validado se no teste da função `circle`, ao receber um raio, o retorno da função é um objeto com as informações corretas (Raio, Área e Circunferência).

---

### 5. Implemente a função `createStudent`

A função `createStudent` recebe como parâmetro um **nome**, e retorna um objeto contendo duas chaves:

1. **name**, contendo o nome passado como parâmetro;
2. **feedback**, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

O arquivo `createStudent.spec.js` contém os testes para `createStudent` já implementados. Implemente a função no arquivo `src/createStudent.js` de forma que ela atenda aos testes propostos.

**O que será avaliado**

* Será validado se a função `createStudent` retorna um objeto que contenha duas chaves: `name`, contendo o nome passado como parâmetro; e `feedback`, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

---

### 6. Implemente os casos de teste para a função `productDetails`

A função `productDetails` recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos:

```javascript
productDetails('Alcool gel', 'Máscara');
```

**Retorna:**

```js
[
  {
    name: 'Alcool gel'
    details: {
      productId: 'Alcool gel123'
    }
  },
  {
    name: 'Máscara'
    details: {
      productId: 'Máscara123'
    }
  }
]
```

Essa função já está implementada no arquivo `src/productDetails.js`. Escreva pelo menos cinco testes para essa função no arquivo `tests/productDetails.js` para garantir que a implementação de `productDetails` está correta.

**O que será avaliado**

* Será validado se no teste da função `productDetails`, ao receber duas strings, o retorno da função é um array de objetos e se cada objeto contém os dados necessários.

---

### 7. Implemente as funções `calculator` e `arrayGenerator`

  A função `calculator` recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:
  - sum;
  - mult;
  - div;
  - sub.
  
  Para cada chave atribua como valor a operação correspondente à sua chave:
  - `sum:` retorna o resultado da soma dos dois números;
  - `mult:` retorna o resultado da multiplicação dos dois números;
  - `div:` retorna o resultado da divisão dos dois números;
  - `sub:` retorna o resultado da subtração dos dois números.
  
  Os resultados das divisões devem sempre ser arredondados para baixo.
  
  Parâmetros:
  - Dois números inteiros.

  Comportamento:
  ```javascript
  calculator(1, 2); // { sum: 3, mult: 2, div: 0, sub: -1 }
  ```
  
  Já a função `arrayGenerator` converte objetos em arrays, de chaves, valores ou ambos. Ela deve receber dois parâmetros:

  * o primeiro parâmetro deve ser uma string que indica o tipo de conversão;
  * o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver.

  Parâmetros:
  - Uma string que indica o tipo de conversão;
  - Um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 };

  Comportamento:
  ```javascript
  arrayGenerator('keys', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 'sum', 'mult', 'div', 'sub' ]
  arrayGenerator('values', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 3, 2, 1, 0 ]
  arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 1 ], [ 'sub', 0 ] ]
  ```
O arquivo `objPlayground.spec.js` contém os testes para `calculator` e `arrayGenerator` já implementados. Implemente as funções no arquivo `src/objPlayground.js` de forma que ela atenda aos testes propostos.

**O que será avaliado**

* Será avaliado se a função `calculator` retorna os valores esperados;
* Será avaliado se a função `arrayGenerator` retorna os valores esperados.

---

### 8. Implemente a função `myCounter`

A função myCounter possui dois loops aninhados que inserem valores dentro de um array. Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada. Corrija a função `myCounter`, sem eliminar nenhum dos loops de repetição, para que a função retorne o array correto. O arquivo `myCounter.spec.js` contém os testes para `myCounter` já implementados. Implemente a função no arquivo `src/myCounter.js` de forma que ela atenda aos testes propostos.

**O que será avaliado**

* Será validado se a função `myCounter` retorna os dados esperados de acordo com o que está implementado no teste.

---

### 9. Implemente os casos de teste para a função `getCharacter`

A função `getCharacter` recebe uma string que representa o nome de um personagem e retorna um objeto contendo seu nome, sua classe e suas frases.

```javascript
getCharacter('Arya');
```

**Retorna:**

```javascript
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: ['Not today', 'A girl has no name.']
}
```

Essa função já está implementada no arquivo `src/getCharacter.js`. Escreva pelo menos seis testes para essa função no arquivo `tests/getCharacter.spec.js` para garantir que a implementação de `getCharacter` está correta.

**O que será avaliado**

* Será validado se no teste da função `getCharacter` ao receber uma string, o retorno da função é o esperado - de acordo com a tabela apresentada no arquivo de testes.
* Será validado se no teste da função `getCharacter` ao não receber nenhum parâmetro, o retorno da função é `undefined`.
* Será validado se o teste da função `getCharacter` verifica se o parâmetro é case sensitive.

---

### 10. Implemente a função `createMenu`, bem como seus casos de teste

**Agora prepare-se! Esse último requisito vai te guiar através de um longo e rico processo de desenvolvimento orientado a testes (Test Driven Development, ou TDD). Dará trabalho, mas vale a pena!**

Você é responsável por elaborar o sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:

* Ler o menu cadastrado;
* Fazer pedidos;
* Verificar o que foi pedido;
* Somar o valor da conta.

A estrutura deste código e deste objeto já foi definida e você irá implementá-lo. Você encontrará mais detalhes sobre a estrutura a ser seguida e exemplos do retorno da função no arquivo `src/restaurant.js`. Você deverá seguir o passo-a-passo a seguir para garantir o bom desenvolvimento do sistema.

1. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se a função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função.

2. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se `'objetoRetornado.fetchMenu()'` retorna um objeto cujas chaves são somente `food` e `drink`, considerando que a função `createMenu` foi chamada com o objeto: `{ food: {}, drink: {} }`.

3. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se o menu passado pra função `createMenu` é identico ao menu recuperado pela função `'objetoRetornado.fetchMenu()'`.

4. No arquivo `src/restaurant.js`, crie uma função `createMenu()` que, dado um objeto passado por parâmetro, retorna um objeto com o seguinte formato: { fetchMenu: () => objetoPassadoPorParametro }.

5. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se `'objetoRetornado.consumption'`, após a criação do menu, retorna um array vazio.

6. No arquivo `src/restaurant.js`, adicione ao objeto retornado por `createMenu` uma chave `consumption` que, como valor inicial, tem um array vazio.

7. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro (como `objetoRetornado.order('coxinha')`), tal string é adicionada ao array retornado em `objetoRetornado.consumption`.

8. No arquivo `src/restaurant.js`, crie uma função, separada da função `createMenu()`, que, dada uma string recebida por parâmetro, adiciona essa string ao array de `objetoRetornado.consumption`. Adicione essa função à chave `order`.

9. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.

10. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`.


// README BASEADO NO PROJETO DA TRYBE