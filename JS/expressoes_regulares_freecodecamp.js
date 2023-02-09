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

/*------------------ENCONTRAR CARACTERES COM CAPTURA PREGUIÇOSA---------------
Em expressões regulares, uma captura gananciosa encontra a parte mais longa o 
possível de uma string em que a regex atua e a retorna como resultado. A alternativa 
se chama captura preguiçosa e ela encontra o menor pedaço possível de uma string 
que satisfaz a regex. Você pode aplicar a regex /t[a-z]*i/ à string "titanic". 
Essa regex é basicamente um padrão que começa com t, termina com ie tem algumas 
letras no meio delas. Expressões regulares são gananciosas por padrão, então o 
resultado seria ["titani"]. Ou seja, a maior string o possível que atende ao 
padrão é encontrada. Mas você pode usar o caractere ? para torná-la preguiçosa. 
Aplicar a regex adaptada /t[a-z]*?i/ à string "titanic" retorna ["ti"].
Observação: ler HTML com expressões regulares deve ser evitado, mas procurar 
uma string HTML usando expressões regulares é perfeitamente aceitável.
Arrume a regex /<.*>/ para que retorne a tag HTML <h1> mas não a 
linha "<h1>Winter is coming</h1>". Lembre-se de que o caractere curinga . em 
uma expressão regular captura qualquer caractere.*/

//exemplos

let text = "<h1>Winter is coming</h1>";
let preguicaRegex = /<.*?>/;
let preguicaResult = text.match(preguicaRegex);

/*---------------------------------------------------------------------------*/

/*---------------------CAPTURAR TODAS AS LETRAS E NUMEROS----------------------
Ao escrever [a-z] você foi capaz de capturar todas as letras do alfabeto. Essa 
classe de caracteres é tão comum que existe uma forma reduzida de escrevê-la. 
Mas essa forma inclui alguns caracteres a mais. Em JavaScript, você pode usar 
\w para capturar todas as letras do alfabeto. Isso é equivalente à classe de 
caracteres [A-Za-z0-9_]. Ela captura números e letras, tanto maiúsculas quanto
 minúsculas. Note que o underline (_) também é incluído nela.*/

 //exemplos

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);//retorna true
shortHand.test(numbers);//retorna true
longHand.test(varNames);//retorna true
shortHand.test(varNames);//retorna true

let alphabetSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let alphabetResult = alphabetSample.match(alphabetRegexV2).length;

/*---------------------------------------------------------------------------*/

/*------------------CAPTURAR TUDO EXCETO LETRAS E NUMEROS---------------------
Você aprendeu que você pode usar um atalho para capturar alfanuméricos [A-Za-z0-9_]
usando \w. Você pode querer capturar exatamente o oposto disso. Você pode capturar 
não alfanuméricos usando \W ao invés de \w. Observe que o atalho usa uma maiúscula. 
Este atalho é o mesmo que escrever [^A-Za-z0-9_].*/

//exemplos

let shortAlphaHand = /\W/;
let alphaNumbers = "42%";
let sentence = "Coding!";
numbers.match(shortAlphaHand);//retorna ["%"]
sentence.match(shortAlphaHand);//retorna ["!"]

let deltaSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let deltaResult = deltaSample.match(nonAlphabetRegex).length;

/*---------------------------------------------------------------------------*/

/*------------------------CAPTURAR TODOS OS NUMEROS---------------------------
Você aprendeu atalhos para padrões comuns de strings como alfanuméricos. Outro 
padrão comum é o de apenas dígitos ou números. O atalho para procurar caracteres 
numéricos é \d, com um d minúsculo. Esse atalho é o mesmo que [0-9], que serve 
para procurar qualquer dígito de zero a nove.*/

//exemplo

let movieName = "2001: A Space Odyssey";
let movieRegex = /\d/g;
let movieResult = movieName.match(movieRegex).length;

/*---------------------------------------------------------------------------*/

/*-----------------------CAPTURAR TUDO EXCETO NUMEROS------------------------
O último desafio mostrou como procurar dígitos usando o atalho \d com um d 
minúsculo. Você também pode procurar não dígitos usando um atalho semelhante 
que usa um D maiúsculo. O atalho para procurar não dígitos é \D. Esse atalho 
é o mesmo que [^0-9], que serve para procurar qualquer caractere que não 
seja um dígito de zero a nove.*/

//exemplo

let movieNumName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let noNunResult = movieNumName.match(noNumRegex).length;

/*---------------------------------------------------------------------------*/

/*-------------------RESTRINGIR NOMES DE USUARIO POSSIVEIS---------------------
Nomes de usuário (usernames) são usados em toda a Internet. São o que fazem com 
que tenham uma identidade única em seus sites favoritos. Você precisa verificar 
todos os usernames em um banco de dados. Existem algumas regras que os usuários 
precisam seguir quando criam os seus usernames.*/

//desafio

//1.Nomes de usuário só podem conter caracteres alfanuméricos.
//2.Os números, se algum, precisam estar no fim da string. 
//Pode haver zero ou mais números. Usernames não podem começar com números.
//3.As letras podem ser maiúsculas ou minúsculas.
//4.O tamanho de nomes de usuários precisa ser pelo menos dois. 
//Um username de dois caracteres só pode conter letras.

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let userResult = userCheck.test(username);

//explicaçao userCheck

// ^ - Começo da entrada
// [a-z] - Primeiro caractere e uma letra
// [a-z]+ - Proximo caractere tambem e uma letra
// \d*$ - Entrada termina com 0 ou mais digitos
// | - ou
// ^[a-z] - Primeiro caractere e uma letra
// \d\d+ - proximo caracteres sao dois ou mais digitos
// $ - Fim da entrada
// i - Ignorar caixa alta

/*---------------------------------------------------------------------------*/

/*-------------------------CAPTURAR ESPAÇOS EM BRANCO-------------------------
Os desafios até agora cobriram a captura de letras do alfabeto e números. 
Você também pode capturar espaços em branco e os espaços entre as letras.
Você pode usar o atalho \s com um s minúsculo para capturar espaços em branco. 
Este atalho não captura apenas espaços em branco como também retorno de carro, 
tabulações, feeds de formulário e quebras de linha. O atalho é equivalente à 
classe de caracteres [ \r\t\f\n\v].*/

//exmplos

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);//Retorna [" ", " "]

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let spaceResult = sample.match(countWhiteSpace);

/*---------------------------------------------------------------------------*/

/*------------------CAPTURAR CARACTERES ALEM DO ESPAÇO-------------------------
Você aprendeu a procurar por espaço em branco usando \s com um s minúsculo. Você 
também pode buscar tudo exceto espaços em branco. Busque não espaços em branco 
usando \S com um s maiúsculo. Este atalho não captura espaços em branco, retorno 
de carro, tabulações, feeds de formulário ou quebras de linha. O atalho é 
equivalente à classe de caracteres [^ \r\t\f\n\v].*/

//exemplos

let blackSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
blackSpace.match(nonSpaceRegex).length;//Retorna 32

let blackSample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let blackResult = sample.match(countNonWhiteSpace);

/*---------------------------------------------------------------------------*/

/*-------------------ESPECIFICAR O NUMERO DE CAPTURAS-------------------------
Lembre-se de que você pode usar o sinal de + para procurar por uma ou mais 
ocorrências e o asterisco * para procurar por zero ou mais ocorrências. Eles 
são convenientes, mas às vezes você precisa capturar um número exato de caracteres.
Você pode especificar um número mínimo e um máximo de capturas com especificadores 
de quantidade. Para usar especificadores de quantidade, usa-se chaves: { e }. 
Você pode especificar os dois números dentro delas para restringir as capturas.
Por exemplo, se você quiser encontrar a letra a de 3 a 5 vezes na string ah, 
você pode escrever a regex /a{3,5}h/.*/

//exemplos

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);//Retorna true
multipleA.test(A2);//Retorna false

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/g;//Captura Oh no, mas apenas quando houver de 3 a 6 letras h's
let ohResult = ohRegex.test(ohStr);

/*---------------------------------------------------------------------------*/

/*-----------------ESPECIFICAR APENAS UM MINIMO DE CAPTURAS--------------------
Você pode especificar um número mínimo e um máximo de capturas com chaves. 
Haverá vezes que você precisará especificar um mínimo mas não um máximo.
Para fazer isso, apenas escreva o número seguido de uma vírgula dentro das chaves.

Por exemplo, para capturar pelo menos 3 vezes a letra a na string hah você pode escrever a 
regex /ha{3,}h/.*/

let A5 = "haaaah";
let A3 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA5 = /ha{3,}h/;
multipleA5.test(A5);//Retorna true
multipleA5.test(A3);//Retorna false
multipleA5.test(A100);//Retorna true

//Modifique a regex haRegex para que capture quatro ou mais z's na string Hazzah.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let haResult = haRegex.test(haStr);

/*---------------------------------------------------------------------------*/

/*-----------------ESPECIFICAR O NUMERO EXATO DE CAPTURAS----------------------
Você pode especificar um número mínimo e um máximo de capturas com chaves. Às vezes,
você só quer um número específico de capturas.Para especificar este número, apenas 
escreva-o dentro das chaves.

Por exemplo, você pode escrever a regex /ha{3}h/ para capturar a 
letra a 3 vezes na string hah.*/

let A6 = "haaaah";
let A7 = "haaah";
let Aa100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A6);//Retorna false
multipleHA.test(A7);//Retorna true
multipleHA.test(Aa100);//Retorna false

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;//Captura 4 m's na string
let timResult = timRegex.test(timStr);

/*---------------------------------------------------------------------------*/