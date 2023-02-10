/*---------------------------------------------------------------------------*/

/*--------------USAR O CONSOLE PARA VERIFICAR VALORES------------------------
O método console.log(), o qual "imprime" a saída do que está nos seus parênteses 
no console, provavelmente será a ferramenta de debug mais útil. Colocá-lo em 
pontos estratégicos no seu código pode mostrar a você os valores intermediários 
de variáveis. É uma boa prática ter uma ideia do que deveria ser a saída antes 
de olhar o que é. Ter pontos de verificação para ver o status de seus cálculos 
ao longo do seu código ajudará a encontrar onde o problema está.*/

//exemplo

console.log('Hello world!');//Imprime Hello world!

let a = 5;
let b = 1;
a++;
console.log(a)//Imprime 6
let sumAB = a + b;
console.log(sumAB);//Imprime 7

/*---------------------------------------------------------------------------*/

/*----------------TYPEOF PARA VERIFICAR O TIPO DA VARIAVEL--------------------
Você pode usar typeof para verificar a estrutura de dado, ou tipo, de uma variável.
Isso é útil na depuração quando trabalhando com diversos tipos de dados. Se você 
pensar que está adicionando dois números, mas na verdade um é na verdade uma 
string, o resultado pode ser inesperado. Erros de tipo podem se esconder em 
cálculos ou chamada de funções. Seja cuidadoso especialmente quando você estiver 
acessando e trabalhando com dados externos na forma de um objeto JavaScript 
Object Notation (JSON).*/

/*JavaScript reconhece sete tipos de dados primitivos (imutáveis): 
Boolean, Null, Undefined, Number, String, Symbol (novo na ES6) e BigInt 
(novo na ES2020), além de um tipo para itens mutáveis: Object. Note que 
em JavaScript, arrays são tecnicamente um tipo de objeto.*/

//exemplos

console.log(typeof "");//String
console.log(typeof 0);//Number
console.log(typeof [])//Object
console.log(typeof {});//Object

let seven = 7;
let three = "3";
console.log(seven + three);//73
console.log(typeof seven);//Number
console.log(typeof three);//String

/*---------------------------------------------------------------------------*/

/*--CAPTURAR ABERTURA E FECHAMENTO DE PARENTESES FALTANTES APOS UMA CHAMADA DE FUNÇAO--
Quando uma função ou método não recebe nenhum parâmetro, você pode esquecer de incluir 
a abertura e fechamento de parênteses (vazio) ao chamá-la. Frequentemente, o resultado 
de uma chamada de função é salva em uma variável para outro uso em seu código. 
Esse erro pode ser detectado ao exibir no console os valores das variáveis (
ou seus tipos) e verificar que uma variável está definida para uma referência 
de uma função, ao invés do valor esperado que a função retorna.*/

//As variáveis no seguinte exemplo são diferentes:

//exemplos

function myFunction() {
    return "You rock!";
}
let varOne = myFunction;//Recebe funçao myFunction
let varTwo = myFunction();//Recebe a string You rock!

function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}
let func = getNine;//Recebe funçao getNine
let result = getNine();//Recebe soma de x e y = 9
console.log(result);

/*---------------------------------------------------------------------------*/

/*-------CAPTURAR ARGUMENTOS PASSADOS NA ORDEM ERRADA AO CHAMR UMA FUNÇAO------
Continuando a discussão sobre chamada de funções, o próximo bug para prestar 
atenção é quando os argumentos de uma função são fornecidos na ordem incorreta. 
Se os argumentos forem de diferentes tipos, tal como uma função esperando um 
array e um inteiro, isso provavelmente lançará um erro de tempo de execução. 
Se os argumentos são do mesmo tipo (todos os inteiros, por exemplo), então a 
lógica do código não fará sentido. Certifique-se de fornecer todos os argumentos 
exigidos, na ordem adequada para evitar esses problemas.*/

//exemplo

function raiseToPower(b, e) {
return Math.pow(b, e);
}
let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
//let power = raiseToPower(exp, base);
console.log(power);

/*---------------------------------------------------------------------------*/
