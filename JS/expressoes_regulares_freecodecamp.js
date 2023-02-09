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

/*-------------------ENCONTAR COM O CARACTERE CURINGA--------------------------
Haverá vezes em que você não saberá (ou não precisará saber) quais caracteres 
exatamente farão parte das suas regexes. Pensar em todas as palavras que 
capturariam, digamos, um erro ortográfico levaria muito tempo. Por sorte, 
você pode economizar tempo usando o caractere curinga: . O caractere curinga . 
captura qualquer caractere. O curinga também pode ser chamado de ponto. 
Você pode usar o curinga como qualquer outro caractere na regex. Por exemplo, 
se você quiser encontrar hug, huh, hut ou hum, você pode usar a regex /hu./ 
para capturar todas as quatro palavras.*/

//exemplo

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // . caractere curinga
let resultUn = unRegex.test(exampleStr);

/*---------------------------------------------------------------------------*/

/*--------CAPTURAR UM UNICO CARACTERE COM MULTIPLAS POSSIBILIDADES-------------
Você aprendeu a capturar padrões literais (/literal/) e usar o caractere curinga 
(/./). Eles são os extremos das expressões regulares: um encontra o texto exato 
e o outro captura qualquer coisa. Existem formas de balancear esses extremos.
Você pode ter alguma flexibilidade ao procurar um padrão literal usando classes
de caracteres. Classes de caracteres permitem a definição de grupos de caracteres 
que você quer capturar ao colocá-los entre colchetes: [ e ].*/

//exemplo 

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; //busca multiplos caracteres com flags
let resultVowel = quoteSample.match(vowelRegex);

/*---------------------------------------------------------------------------*/

/*-----------------------CAPTURAR LETRAS DO ALFABETO-------------------------
Você viu como pode usar conjuntos de caracteres para especificar um grupo de 
caracteres para capturar. Mas você precisaria escrever muito para definir uma 
classe larga como, por exemplo, para capturar todas as letras do alfabeto. 
Felizmente há uma maneira de fazer com que elas fiquem pequenas e simples.
Você pode usar um hífen (-) para definir um intervalo de caracteres para 
capturar dentro de uma classe.*/

//exemplo

let alphaSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let alphaResult = alphaSample.match(alphabetRegex);

/*---------------------------------------------------------------------------*/

/*------------------CAPTURAR NUMEROS E LETRAS DO ALFABETO---------------------
O uso do hífen (-) para capturar um intervalo de caracteres não é limitado a 
letras. Ele também funciona para capturar intervalos de números.
Por exemplo, /[0-5]/ encontra qualquer número entre 0 e 5, incluindo ambos 0 e 5.
E também é possível combinar intervalos de letras e números em uma 
única classe de caracteres.*/

//exemplo

let betaSample = "Blueberry 3.141592653s are delicious.";
let betaRegex = /[h-s2-6]/gi;
let betaResult = betaSample.match(betaRegex);

/*---------------------------------------------------------------------------*/

/*-------------------CAPTURAR CARACTERES NAO ESPECIFICADOS---------------------
Até agora você aprendeu a criar classes de caracteres para capturar caracteres 
específicos, mas você também pode usá-las para capturar caracteres ausentes nelas.
Esse tipo de classe de caracteres é chamada classe de caracteres negada.
Para criar uma classe de caracteres negada, você só precisa colocar um acento 
circunflexo (^) depois do colchete de abertura e à esquerda dos caracteres que 
você quer evitar. Por exemplo, /[^aeiou]/gi encontra todos os caracteres que 
não são vogais. Observe que caracteres como ., !, [, @, / e espaços em branco 
são capturados - a classe de vogais negada apenas exclui os caracteres que 
são vogais.*/

//exemplo

let gamaSample = "3 blind mice.";
let gamaRegex = /[^aeiou0-9]/gi; //ignora os caraceteres especificado
let gamaresult = gamaSample.match(gamaRegex);

/*---------------------------------------------------------------------------*/

/*-------CAPTURAR CARACTERES QUE APARECEM UMA OU MAIS VEZES SEGUIDAS-----------
Às vezes você precisa capturar um caractere, ou grupo de caracteres, que aparece 
uma ou mais vezes seguidas. Ou seja, que aparecem pelo menos uma vez e podem se 
repetir. Você pode usar o caractere + para verificar se é o caso. Lembre-se que 
o caractere ou padrão precisa repetir-se consecutivamente. Ou seja, um atrás do 
outro. Por exemplo, /a+/g encontra um resultado na string abc e retorna ["a"]. 
Mas o + também faz com que encontre um único resultado em aabc e retorne ["aa"].
Se a string fosse abab, a operação retornaria ["a", "a"] porque entre os dois a 
há um b. Por fim, se não houvesse nenhum a na string, como em bcd, nada seria 
encontrado.*/

//exemplo

let difficultSpelling = "Mississippi";
let difficultRegex = /s+/gi;
let difficultResult = difficultSpelling.match(difficultRegex);

/*---------------------------------------------------------------------------*/

/*------------CAPTURAR CARACTERES E ESTRUTURAS ZERO OU MAIS VEZES--------------
O último desafio fez uso do caractere + para buscar caracteres que ocorrem uma 
ou mais vezes. Existe um outro caractere que permite buscar zero ou mais 
ocorrências de um padrão.O caractere usado para isso é o asterisco: *.*/

//exemplo
let chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!'
let chewieRegex = /Aa*/;
let chewiResult = chewieQuote.match(chewieRegex);

/*---------------------------------------------------------------------------*/