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