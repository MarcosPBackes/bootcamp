/*-----------------CONTAR CARTAS----------------
Você vai escrever uma função de contagem de cartas.
A função receberá um parâmetro card, que pode ser 
um número ou uma string, e incrementar ou decrementar
a variável global count de acordo com o valor da carta.
Em seguida, a função retornará a string com o valor atual
de contagem (variável count) e a string Bet se a contagem 
for positiva, ou Hold se a contagem for zero ou negativa. 
A contagem atual e a decisão do jogador (Bet ou Hold) 
deve ser separado por um único espaço.*/
let count = 0;
function cc(card) {        
    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 10:
      case 'J':
      case 'Q':
      case 'K':
      case 'A':    
        count--;
        break;
    }
    if (count > 0) {
      return count + ' Bet';
    }  
    else {
      return count + ' Hold';
    }    
  }
  
  cc(2); cc(3); cc(4); cc(5); cc(6);
  cc(7); cc(8); cc(9);
  cc(10); cc('J'); cc('Q'); cc('K'); cc('A');
  cc(3); cc(7); cc('Q'); cc(8); cc("a");
  cc(2); cc('J'); cc(9); cc(2); cc(7);
  cc(2); cc(2); cc(10);
  cc(3); cc(2); cc('A'); cc(10); cc('K');

/*---------------------------------------------------------------------------*/

/*--------------------CRIAR OBJETOS EM JAVASCRIPT---------------------
Faça um objeto que representa um cachorro chamado myDog que contém
as propriedades name (uma string), legs, tails e friends.
Você pode definir essas propriedades do objeto para os valores que deseja,
contanto que name seja uma string, legs e tails sejam números, e friends seja um array.*/
const myDog = {  
  name: 'Dog',
  legs: 4,
  tails: 1,
  friends: ['Cat', 'Frog']  
};

/*---------------------------------------------------------------------------*/

/*----------------TESTAR OBJETOS POR PROPRIEDADES-------------------
Às vezes, é útil verificar se a propriedade de um determinado objeto existe ou não.
Podemos usar o método de objetos .hasOwnProperty(propname) para determinar se
aquele objeto possui o nome de propriedade fornecido. .hasOwnProperty()
retorna true ou false se a propriedade for encontrada ou não.*/

//exemplos

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

function checkObj(obj, checkProp) {  
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
    else {
      return 'Not Found'
    }  
}

/*---------------------------------------------------------------------------*/

/*------------------MANIPULAR OBJETOS COMPLEXOS-------------------------
Às vezes, você pode querer armazenar dados em uma Estrutura de Dados flexível.
Um objeto JavaScript é uma forma de lidar com dados flexíveis.
Eles permitem combinações arbitrárias de strings, numbers, booleans,
arrays, functions e objects.*/

//exemplo

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "S.O.A.D",
    "title": "Toxity",
    "release_year": 2001,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

/*---------------------------------------------------------------------------*/

/*--------------------ACESSAR OBJETOS ANINHADOS----------------------
As subpropriedades de objetos podem ser acessadas ao 
encadear a notação de ponto e de colchetes.*/

//exemplos

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside['glove box'];

/*---------------------------------------------------------------------------*/

/*---------------------INTERARAÇÃO COM LAÇOS WHILE--------------------------
Você pode rodar o mesmo código várias vezes usando um laço.

O primeiro tipo de laço que aprenderemos é chamado de laço while porque
ele rodará enquanto uma condição específica for verdadeira e vai parar 
uma vez que a condição não for mais verdadeira.*/

//exemplo

const myArray = [];
let i = 5;

while (0 <= i) {
  myArray.push(i);
  i--;
}

/*---------------------------------------------------------------------------*/

