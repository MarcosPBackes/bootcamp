/*-------------------MODIFICAR ARRAY DECLARADO COM CONST----------------------
Variáveis declaradas com const têm muitos casos de uso no JavaScript moderno.
Alguns desenvolvedores preferem criar todas suas variáveis usando const, a 
menos que eles saibam que vão precisar reatribuir o valor. Apenas nesse caso, 
eles usam let. No entanto, é importante entender que objetos (incluindo arrays 
e funções) atribuídos a numa variável usando const ainda são mutáveis. Usar a 
declaração const só impede a reatribuição do identificador (nome) da variável.*/

//exemplos

const s = [5, 6, 7];
s = [1, 2, 3]; // retorna erro
s[2] = 45; // correto
console.log(s);

const s = [5, 7, 2];
function editInPlace() {  
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();

/*---------------------------------------------------------------------------*/

/*------------------IMPEDIR MODIFICAÇAO DE UM OBJETO-------------------------
Como visto no desafio anterior, a declaração const sozinha, na verdade, não 
protege a mutação de seus dados. Para garantir que seus dados não mudem, 
o JavaScript fornece a função Object.freeze que previne os dados de serem modificados.
Qualquer tentativa de alterar o objeto será rejeitada, com um erro sendo 
lançado se o script estiver executando em modo estrito.*/

//exemplos

let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(obj); // impede a modificação do objeto
  obj.review = "bad";
  obj.newProp = "Test";
  console.log(obj); 

  function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };    
    Object.freeze(MATH_CONSTANTS); // impede a modificação do objeto  
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

/*---------------------------------------------------------------------------*/

/*-----------------FUNÇOES ANONIMAS COM ARROW FUNCTION------------------------
No JavaScript, muitas vezes não precisamos nomear nossas funções, especialmente 
quando passamos uma função como argumento para outra função. Em vez disso, 
criamos funções anônimas. Como não vamos reutilizar essas funções posteriormente, 
não precisamos nomeá-las.*/

//exemplos

//antes

const myFuncA = function() {
    const myVar = "value";
    return myVar;
  }

var magicA = function() {
return new Date();
};

//depois

const myFuncD = () => "value";

const magicD = () => new Date();

/*---------------------------------------------------------------------------*/

/*-----------------------ARROW FUNCTION COM PARAMETROS-------------------------
Assim como uma função normal, você pode passar argumentos para uma arrow function.*/

//exempĺos

const doubler = item => item * 2; //parametro unico

const multiplier = (item, multi) => item * multi; // parametro multiplo
multiplier(4, 2);

const myConcat = (arr1, arr2) => arr1.concat(arr2); // parametro multiplo
myConcat([1, 2], [3, 4, 5]);

/*---------------------------------------------------------------------------*/

/*--------------PARAMETROS REST COM PARAMETTROS DE FUNÇÃO----------------------
Para nos ajuda a criar funções mais flexíveis, ES6 introduziu o parâmetro rest
para parâmetros de funções. Com o parâmetro rest, você pode criar funções que 
recebem um número variável de argumentos. Esses argumentos são armazenados em 
um array que pode ser acessado depois dentro da função.*/

//exemplos

function howMany(...args) { //retorna quantidade de argumentos
    return "You have passed " + args.length + " arguments.";
  }
 
const sum = (...args) => { //retorna soma dos argumentos passados
return args.reduce((a, b) => a + b, 0); //.reduce reduz array para valor unico e executa
}                                       //a funçao para cada valor dentro do array
sum(0,1,2);
sum(1,2,3,4);
sum(5);
sum();

/*---------------------------------------------------------------------------*/

/*--------------ATRIBUIÇAO E DESESTRUTURAÇAO PARA EXTRAIR VALORES-------------
Atribuição de desestruturação é uma sintaxe especial introduzida na ES6, para 
atribuir nitidamente valores retirados diretamente de um objeto.*/

//exemplos

const user = { name: 'John Doe', age: 34 };
const nome = user.name;//normal
const idade = user.age;//normal
const { name, age } = user;//sintaxe de desestruturaçao

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };  
  const { today, tomorrow } = HIGH_TEMPERATURES//sintaxe de desestruturaçao
  
/*---------------------------------------------------------------------------*/

/*-------ATRIBUIÇAO E DESESTRUTURAÇAO PARA ALTERAR VARIAVIES DO OBJETO--------
Desestruturar o permite atribuir um novo nome de variável quando extrair valores. 
Você pode fazer isso ao colocar o novo nome após dois pontos quando atribuir o valor.*/

//exemplos

const usuario = { nome: 'Mark', idade: 31};
const { nome: nomeUser, idade: idadeUSer} = usuario;//sintaxe de desestruturaçao
  
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES//sintaxe de desestruturaçao  

//exemplo aninhado

const usuarioAninhado = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

const { johnDoe: { age: userAge, email: userEmail }} = usuarioAninhado;

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
  
const { today: { low: lowToday, high: highTodaay }} = LOCAL_FORECAST

/*---------------------------------------------------------------------------*/

/*------ATRIBUIÇAO E DESESTRUTURAÇAO PARA VARIAVEIS A ÁRTIR DE ARRAYS--------
ES6 torna desestruturar arrays tão fácil quanto desestruturar objetos.
Uma diferença chave entre o operador spread (...) e a desestruturação de array 
é que o operador spread retira todos os conteúdos de um array e coloca em uma 
lista com elementos separados por vírgula. Consequentemente, você não pode 
pegar ou escolher quais elementos você quer atribuir a variáveis.*/

//exemplos

const [x, y] = [1, 2, 3, 4, 5, 6];//x = 1 e y =2
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];// cada virgula  pula um indice do array c = 5

/*---------------------------------------------------------------------------*/

/*------------------DESESTRUTURAÇÃO POR MEIO DE ELEMENTOS COM REST------------

Em algumas situações envolvendo um array desestruturado, podemos querer coletar
o resto dos elementos em um array separado.*/

//exemplos

const [d, e, ...arr] = [1, 2, 3, 4, 5, 7];//retorna d = 1 e e = 2 e arr = [3,4,5,7]
function removeFirstTwo(list) {
  const [d, e, ...shorterList] = list
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);//retorna sem os dois primeiros

/*---------------------------------------------------------------------------*/

/*---ATRIBUIÇAO E DESESTRUTURAÇAO PARA PASSAR UM OBJETO COMO PARAMETRO DE UMA FUNÇAO---
Em alguns casos, você pode desestruturar um objeto no próprio argumento da função.
*/

//exemplo

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({ max, min }) => (max + min) / 2.0;

/*---------------------------------------------------------------------------*/

/*---------------------CRIAR STRINGS USANDO TEMPLATE LITERAL------------------
Um novo recurso introduzido na versão ES6 é o template literal. Esse é um tipo 
especial de string que torna mais fácil a criação de strings complexas.
Template literals nos permitem criar strings de mais de uma linha e usar os 
recursos de interpolação de strings.*/

//exemplos

const person = {
  name: "Zodiac Hasbro",
  age: 56
};
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  return failureItems;
}
const failuresList = makeList(result.failure);

/*---------------------------------------------------------------------------*/

/*-----------------SINTAXE DE CLASSE PARA FUNÇAO CONSTRUTORA------------------
ES6 fornece uma nova sintaxe para criar objetos, usando a palavra-chave class.
No ES5, um objeto pode ser criado definindo uma função constructor e usando a 
palavra-chave new para instanciar o objeto. No ES6, uma declaração de class 
tem um método constructor, que é invocado com a palavra-chave new. Se o método 
constructor não for explicitamente definido, ele será definido implicitamente 
sem argumentos.*/

//exemplos

//construtor explicito
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// construtor implicito
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
//printa To Jupiter! no console
zeus.takeOff();

const atlas = new Rocket();
//printa To the moon! no console
atlas.launch();

class Vegetable {
  constructor(name) {
    this.name = name
    return this.name
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); //printa carrot no console

/*---------------------------------------------------------------------------*/