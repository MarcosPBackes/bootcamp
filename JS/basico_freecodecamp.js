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

/*---------------------INTERAÇÃO COM LAÇOS WHILE--------------------------
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

/*--------------------INTERAÇÃO COM LAÇOS FOR----------------------------
Você pode rodar o mesmo código várias vezes usando um laço.
O tipo mais comum de laço JavaScript é chamado de laço for, porque ele é
executado por um número especificado de vezes. Laços for são declarados com 
três expressões opcionais separadas por ponto e vírgula:for (a; b; c), 
onde a é a declaração de inicialização, b é a declaração de condição, 
e c é a expressão final. A declaração de inicialização é executada apenas 
uma vez antes de o laço iniciar. Normalmente, é usada para definir e 
configurar sua variável de laço. A declaração de condição é verificada no 
início de cada iteração do laço e vai continuar enquanto seu valor for true. 
Quando a condição for false no início da iteração, o laço vai parar de executar.
Isso significa que se a condição de início for falsa, seu laço nunca será executado.
A expressão final é executada no final de cada iteração do laço, antes da 
verificação da próxima condição e normalmente é usada para incrementar ou 
decrementar o contador do laço.*/

//exemplos

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}

const alphaArray = [];
for (let i = 1; i <= 5; i++) {
  alphaArray.push(i);
}

const betaArray = [];

for (let i = 0; i < 10; i += 2) {
  betaArray.push(i);
}

const gamaArray = [];

for (let i = 1; i <= 9; i += 2) {
  gamaArray.push(i);
}

const deltaArray = [];

for (let i = 9; i > 0; i -= 2) {
  deltaArray.push(i);
}

const epsilonArr = [2, 3, 4, 5, 6];

let total = 0;
for (let i = 0; i < epsilonArr.length; i++) {
  total += epsilonArr[i];
}

//exemplo FOR aninhado

function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j]
    }
  }
  return product;
}

/*---------------------------------------------------------------------------*/

/*-----------------------INTERAÇÃO LAÇOS DO..WHILE-----------------------
O próximo tipo de laço que você aprenderá é chamado de laço do...while. 
O laço do...while é chamado assim porque primeiro fará algo (do) ou executará 
algo uma vez dentro do bloco de código, não importando o que acontecer. Em seguida, 
continuará a executar o laço enquanto (while) a condição for true.*/

//exemplo

const dzetaArray = [];
let iAlpha = 10;

do {
  dzetaArray.push(i);
  iAlpha++;
} while (i < 11);

/*---------------------------------------------------------------------------*/

/*----------------------SUBSTITUIR LAÇOS COM RECURSÃO-----------------------
Recursão é o conceito de que uma função pode ser chamada por ela mesma.*/

//exemplo

function sum(arr, n) {  
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }  
}

/*---------------------------------------------------------------------------*/

/*-------------------------------PESQUISAR PERFIL---------------------------
Temos um array de objetos representando pessoas diferentes nas nossas listas 
de contatos.*/

//exemplo

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) { //busca pelo valor de firstName
      if (contacts[i].hasOwnProperty(prop)) { //busca pela propriedade de contacts
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact"
}

//chamada

lookUpProfile("Kristian", "lastName");
lookUpProfile("Sherlock", "likes");

/*---------------------------------------------------------------------------*/

