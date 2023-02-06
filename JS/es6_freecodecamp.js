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