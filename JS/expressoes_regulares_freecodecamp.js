/*---------------------------------------------------------------------------*/

/*--------------------------METODO TEST---------------------------------------
Expressões regulares são usadas em linguagens de programação para encontrar e 
extrair partes de strings. Cria-se padrões que ajudam a encontrar tais partes.
Se você quiser encontrar a palavra the na string The dog chased the cat, você 
poderia usar a seguinte expressão regular: /the/. Note que aspas não são 
necessárias ao redor da expressão regular.  O JavaScript oferece múltiplas 
maneiras de usar regexes. Uma dessas maneiras é com o método .test(). 
O método .test() aplica a regex à string dentro dos parênteses e retorna true 
caso encontre o padrão ou false caso contrário.*/

//exemplos

let testStr = "freeCodeCamp";
let testRegex = /Code/;
let res = testRegex.test(testStr);

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

/*---------------------------------------------------------------------------*/

/*---------------METODO TEST COM DIFERENTES POSSIBLIDADES--------------------
Ao usar regexes como /coding/, você pode procurar pelo padrão coding em strings.
Isso funciona com strings únicas, mas é limitado a apenas um padrão. Você pode 
procurar por múltiplos padrões usando o operador de alternation, ou OR: |.
Este operador funciona para buscar padrões à esquerda e à direita dele.
Por exemplo, se você quiser encontrar as strings yes ou no, a regex que 
você quer é /yes|no/. Você pode também procurar por mais de dois padrões 
com este operador. É possível fazer isso ao adicionar mais instâncias do operador 
seguido do padrão desejado: /yes|no|maybe/.*/

//exemplo

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let resposta = petRegex.test(petString);

/*---------------------------------------------------------------------------*/

/*-----------------IGNORAR MAIUSCULAS E MINISCULAS AO BUSCAR-------------------
Até agora você escreveu regexes para encontrar strings literais. Mas, às vezes, 
você pode querer encontrar caixas diferentes. Caixa (-alta ou -baixa) é a 
diferença entre letras maiúsculas e minúsculas. São exemplos de caixa alta: 
A, B e C. a, b e c são exemplos de caixa baixa. Você pode encontrar ambas as 
caixas usando algo que chamamos de flag. Existem várias flags, mas agora nós 
queremos a flag que ignora a caixa - a flag i. Para usá-la é só colocar ao 
fim da regex. Por exemplo, escrever /ignorecase/i é uma forma. Essa regex 
pode encontrar as strings ignorecase, igNoreCase e IgnoreCase (e todas as outras
combinações de maiúsculas e minúsculas).*/

//exemplos

let theString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; 
let theResult = fccRegex.test(theString);

/*---------------------------------------------------------------------------*/

/*-----------------------------EXTRAIR  RESULTADOS-----------------------------
Até agora, você só tem verificado se existe ou não um padrão dentro de uma 
string. Você também pode extrair os resultados encontrados por meio do método
.match(). Para usar o método .match(), aplique o método em uma string e passe
a regex dentro dos parênteses.*/

//exemplo

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let resultCoding = extractStr.match(codingRegex);

/*---------------------------------------------------------------------------*/

/*-----------------ENCONTRAR MAIS QUE O PRIMEIRO RESULTADO--------------------
Para buscar ou extrair um padrão além do primeiro resultado, você pode usar a 
flag de busca global g. você pode usar múltiplas flags em uma regex: /search/gi*/

//exemplo

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; //multiplas flags g = multipla busca i = ignorecase
let startResult = twinkleStar.match(starRegex);

/*---------------------------------------------------------------------------*/