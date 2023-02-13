/*---------------------------------------------------------------------------*/

/*------------------USAR ARRAY PARA ARMAZENAR UM COLEÇAO DE DADOS--------------
Abaixo está um exemplo da implementação mais simples de uma estrutura de dados 
array. Isso é conhecido como array unidimensional, significando que tem apenas 
1 nível de profundidade, ou que não possui nenhum outro array aninhado dentro 
de si. Note que possui booleans, strings e numbers, entre outros tipos de dados 
do JavaScript válidos:*/

let simpleArray = ['one', 2, 'three', true, false, undefined, null];

//Isso é conhecido como um array multidimensional, ou um array que 
//contém outros arrays. Note que esse array também contém 
//objetos JavaScript,

let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];

/*---------------------------------------------------------------------------*/

/*------ACESSAR O CONTEUDO DE UMA LISTA UTILIZANDO NOTAÇAO DE COLCHETES-------
A funcionalidade fundamental de qualquer estrutura de dados é, evidentemente, 
não só a capacidade de armazenar informação, como também a possibilidade de 
acessar esta informação quando necessário. Então, agora que aprendemos como 
criar um array, vamos começar a pensar em como podemos acessar as informações 
desse array.
Em um array, cada item do array possui um índice . Esse índice possui dois 
papéis: é a posição daquele item no array e como você o referencia. No entanto, 
é importante notar que arrays em JavaScript são indexados a partir do zero, o 
que significa que o primeiro elemento do array está, na verdade, na posição 
zero em vez de na posição 1. Para recuperar um elemento de um array, nós 
podemos ao final de um array adicionar um índice encapsulado com colchetes 
(por exemplo [0]), ou mais comumente, no final de uma variável que faz referência 
a um objeto array. Isso é conhecido como notação de colchetes. Por exemplo, 
se queremos recuperar o a de um array ourArray e atribuir a uma variável, nós 
podemos fazer isso com o código a seguir:*/

let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0];

let myArray = ["a", "b", "c", "d"];
// Altere apenas o código abaixo desta linha

// Altere apenas o código acima desta linha
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);

/*---------------------------------------------------------------------------*/

/*-------ADICIONAR ITENS EM UM ARRAY COM PUSH() E UNSHIFT()-------------------
O comprimento de um array, como os tipos de dados que pode conter, não são 
fixos. Arrays podem ser definidos com um comprimento de qualquer número de 
elementos e elementos podem ser adicionados e removidos com o passar do tempo. 
Em outras palavras, arrays são mutáveis. Nesse desafio, examinaremos dois métodos 
com os quais podemos modificar programaticamente um array: 
Array.push() e Array.unshift(). Ambos os métodos recebem 1 ou mais elementos 
como parâmetros e adicionam esses elementos ao array no qual o método está sendo 
chamado; o método push() adiciona elementos ao final do array, 
e unshift() adiciona ao início.*/

//exemplo

function mixedNumbers(arr) {    
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);    
    return(arr);
  }  
  console.log(mixedNumbers(['IV', 5, 'six']));

/*---------------------------------------------------------------------------*/

/*------------------REMOVER ITENS DE UM ARRAY COM POP() E SHIFT()---------------
Tanto push() e unshift() possuem métodos correspondentes que são quase opostos 
funcionais: pop() e shift(). Como você já pode ter adivinhado, em vez de adicionar, 
pop() remove um elemento do fim de um array, enquanto shift() remove um elemento do 
início. A diferença chave entre pop() e shift() e seus primos push() e unshift(), 
é que nenhum dos métodos recebe parâmetros. Cada um deles só permite que seja 
modificado um elemento por vez em um array*/

//exemplo

function popShift(arr) {
  let popped = arr.pop(); 
  let shifted = arr.shift(); 
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));//Retorna ['challenge', 'complete']

/*---------------------------------------------------------------------------*/

/*---------------------------REMOVER USANDO SPLICE----------------------------
Pois bem. Aprendemos como remover elementos do início e do fim de arrays usando 
shift() e pop(), mas e se quisermos remover um elemento de algum lugar do meio? 
Ou remover mais de um elemento de uma vez? Bem, é aí que splice() pode ser útil. 
splice() nos permite fazer isso: remover qualquer número de elementos consecutivos 
de qualquer lugar no array. splice pode receber 3 parâmetros, mas por agora, 
nós focaremos apenas nos 2 primeiros. Os dois primeiros parâmetros de splice() 
são inteiros que representam índices, ou posições, dos itens no array para o qual
o método splice() está sendo chamado. Lembre-se: arrays são indexados a zero. 
Então, para indicar o primeiro elemento do array, usaríamos 0. O primeiro parâmetro 
de splice() representa o índice no array do qual começar a remover elementos, 
enquanto o segundo parâmetro indica o número de elementos a serem removidos.*/

//exemplo

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4)//começa pelo ondice 1 e termina apos 4 indices
console.log(arr);

/*---------------------------------------------------------------------------*/

/*----------------ADICIONAR ITENS USANDO SPLICE-------------------------------
ocê se lembra de quando mencionamos no último desafio que splice() pode receber 
até três parâmetros? Bem, você pode usar o terceiro parâmetro, composto por um 
ou mais elementos, para adicionar algo ao array. Isso pode ser incrivelmente 
útil para mudar rapidamente de um elemento, ou um conjunto de elementos, para outro.*/

//exemplos

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmom', 'BlanchedAlmond')
  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 
    'PaleTurquoise', 'FireBrick']));

/*---------------------------------------------------------------------------*/

/*----------------COPIAR ITENS DE UM ARRAY USANDO SLICE()---------------------
O próximo método que abordaremos é slice(). Em vez de modificar um array, 
slice() copia ou extrai um determinado número de elementos para um novo 
array, deixando o array em que o método é chamado inalterado. slice() recebe 
apenas 2 parâmetros — o primeiro é o índice aonde começar a extração e o 
segundo é o índice no qual parar a extração (a extração ocorrerá até esse 
índice mas não o incluirá). Considere isto:*/

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

/*todaysWeather teria o valor ['snow', 'sleet'],
enquanto weatherConditions ainda teria ['rain', 'snow', 'sleet', 'hail', 'clear'].*/

//exemplo

function forecast(arr) {  
  arr = arr.slice(2, 4);
  return arr;//Ou return arr.slice(2, 4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

/*---------------------------------------------------------------------------*/

/*-------------------COPIAR UM ARRAY COM O OPERADOR SPREAD---------------------
Enquanto slice() nos permite sermos seletivos sobre quais elementos de um array 
copiar, entre várias outras tarefas úteis, o novo operador spread do ES6 nos 
permite facilmente copiar todos os elementos de um array, em ordem, com uma 
sintaxe simples e altamente legível. A sintaxe de spread é simplesmente essa: ...*/

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

/*thatArray é igual a [true, true, undefined, false, null]. 
thisArray permanece inalterado e thatArray contém os mesmos 
elementos que thisArray.*/

//exemplo

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {    
    newArr.push([...arr])    
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

/*---------------------------------------------------------------------------*/

/*-----------------COMBINAR ARRAYS COM O OPERADOR SPREAD----------------------
Outra grande vantagem do operador spread é a capacidade de combinar arrays,
ou de inserir todos os elementos de um array em outro, em qualquer índice. 
Com sintaxe mais tradicional, podemos concatenar arrays, mas isso só nos 
permite combinar arrays no final de um e no início de outro. A sintaxe do 
spread torna a seguinte operação extremamente simples:*/

//exemplos

let meuArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let nossoArray = ['basil', 'cilantro', ...meuArray, 'coriander'];

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is',  'fun']
  return sentence;
}

console.log(spreadOut());

/*---------------------------------------------------------------------------*/

/*-------------VERIFICAR A PRESENÇA DE UM ELEMENTO COM INDEXOS()--------------
Já que arrays podem ser alterados, ou mutados, a qualquer momento, não há 
garantia de onde um dado estará em um determinado array, ou se esse elemento 
sequer existe. Felizmente, o JavaScript nos fornece outro método integrado, 
indexOf(), que nos permite rapidamente e facilmente checar pela presença de 
um elemento em um array. indexOf() recebe um elemento como parâmetro, e quando 
chamado, retorna a posição, ou índice, daquele elemento, ou -1 se o elemento 
não existe no array.*/

//exemplos

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates');//Retorna -1
fruits.indexOf('oranges');//Retorna 2
fruits.indexOf('pears');//Retorna 1

function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true
  } else {
    return false
  }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

/*---------------------------------------------------------------------------*/

/*--------ITERAR ATRAVES DE TODOS OS ITENS DE UM ARRAY USANDO LAÇOS FOR-------
Às vezes quando trabalhando com arrays, é muito útil ser capaz de iterar sobre 
cada item para encontrar um ou mais elementos que podemos precisar, ou para 
manipular o array baseado em qual item de dados atende a determinados critérios. 
JavaScript oferece diversos métodos integrados que fazem iteração sobre arrays 
de formas ligeiramente diferentes para alcançar resultados diferentes (como every(), 
forEach(), map(), entre outros). Porém, a técnica mais flexível e que nos oferece a 
maior capacidade de controle é o laço for simples.*/

//exemplos

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

/*---------------------------------------------------------------------------*/

/*------------------CRIAR ARRAYS MULTIDDIMENSIONAIS COMPLEXOS-----------------
Excelente! Você acabou de aprender muito sobre arrays! Esta foi uma visão geral
de nível bastante elevado, e há muito mais a aprender para trabalhar com arrays. 
Muitas dessas questões você verá em sessões posteriores. Mas antes de passarmos 
a examinar os objetos, vamos dar mais uma olhada e ver como os arrays podem se 
tornar um pouco mais complexos do que aquilo que vimos nos desafios anteriores.
Uma das características mais poderosas ao pensar em arrays como estruturas de 
dados é que arrays podem conter, ou mesmo ser completamente compostos por outros
arrays. Vimos arrays que contêm arrays em desafios anteriores, mas que são 
bastante simples. No entanto, os arrays podem conter uma profundidade infinita 
de arrays que podem conter outros arrays, cada um com seus próprios níveis 
arbitrários de profundidade, e assim por diante. Desta forma, um array pode 
muito rapidamente se tornar uma estrutura de dados muito complexa, conhecida 
como array multidimensional ou array aninhado.*/

//exemplos

let nestedArray = [
  ['deep'],//Nivel 2
  [
    ['deeper'], ['deeper']//nivel 3
  ],
  [
    [
      ['deepest'], ['deepest']//nivel 4
    ],
    [
      [
        ['deepest-est?']//nivel 5
      ]
    ]
  ]
];

let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested',
  ['deep',['deeper',['deepest']]]],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];

/*---------------------------------------------------------------------------*/