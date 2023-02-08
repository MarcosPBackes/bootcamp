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
let petRegex = /dog|cat|bird|fish/; // Altere esta linha
let resposta = petRegex.test(petString);

/*---------------------------------------------------------------------------*/