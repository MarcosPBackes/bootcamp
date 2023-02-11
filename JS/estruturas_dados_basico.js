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