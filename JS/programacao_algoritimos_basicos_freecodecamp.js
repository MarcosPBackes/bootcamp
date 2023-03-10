/*---------------------------------------------------------------------------*/

/*-------------------CONVERTER CELSIUS PARA FAHRENHEIT-------------------------
A fórmula para converter de Celsius para Fahrenheit é a temperatura em Celsius 
vezes 9/5, mais 32. Você tem uma variável celsius representando uma temperatura 
em Celsius. Use a variável fahrenheit já definida e atribua a ela a temperatura 
equivalente à temperatura Celsius indicada. Use a fórmula mencionada acima para 
ajudar a converter a temperatura em Celsius para Fahrenheit.*/

function convertCtoF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }
  
convertCtoF(30);

/*---------------------------------------------------------------------------*/

/*--------------------------INVERTER UMA STRING--------------------------------
Inverta a string fornecida e retorne-a com a inversão.
Por exemplo, "hello" deve se tornar "olleh".*/

function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString("hello");

/*---------------------------------------------------------------------------*/

/*--------------------ENCONTRAR O FATORIAL DE UM NUMERO----------------------
Retorne o fatorial do inteiro fornecido.
Se o inteiro é representado com a letra n, o fatorial é o produto de todos os 
inteiros positivos menores ou iguais a n.
Fatoriais são frequentemente representados com a notação abreviada n!*/

//exemplos

function factorialize(num) {
  let produto = 1;//produto recebe um para caso de num 0
  for (let i = 2; i <= num; i++) {//i maior que 1 - i menor ou = a num - i + 1
    produto *= i//produto recebe produto multiplicado por i
  }
  return produto;
}

factorialize(5);

//usando recursao

function factorializeRecursion(num) {
  if (num === 0) {//condiçao terminal verifica o fim da recursao se num == 0 
    return 1;//retorna 1
  }
  return num * factorializeRecursion(num - 1);// num multiplicado por num - 1 até chegar a 0
}

factorializeRecursion(5);

//usando tail recursion/recursao de cauda

function factorializeTail(num, factorial = 1) {
  if (num === 0) {//condiçao terminal verifica o fim da recursao se num == 0
    return factorial;
  } else {
    return factorializeTail(num - 1, factorial * num);//executa primeiro os 
                                                      //calculos antes depois chamada recursiva
  }
}

factorializeTail(5);

/*---------------------------------------------------------------------------*/

/*---------------RETORNAR A PALAVRA MAIS LONGA EM UMA STRING------------------
Retornar o comprimento da palavra mais longa na frase fornecida.
Sua resposta deve ser um número.*/

//exemplo 1

function findLongestWordLength(str) {
  let longestLength = 0;
  let currentLength = 0;
  
  for (let i = 0; i < str.length; i++) {// i = 0 i menor que comprimento da string i +1
    if (str[i] === " ") {
      if (currentLength > longestLength) {//se currenteLength maior que longestLength
        longestLength = currentLength;//longestLength recebe currenteLength
      }
      currentLength = 0;
    } else {
      currentLength++;
    }
  }
  if (currentLength > longestLength) {
    longestLength = currentLength;
  }
  
  return longestLength;
  }

//exemplo 2

function findLongestWordLengthDois(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {// i = 0 i menor que comprimento da string i +1
    if (words[i].length > maxLength) {//se comprimento de words[i] maior que maxLength
      maxLength = words[i].length;//maxLength recebe comprimento de words[i]
    }
  }

  return maxLength;
}

//exemplo 3
//usando .reduce

function findLongestWordLengthReduce(s) {
  return s
    .split(' ')
    .reduce((longest, word) => Math.max(longest, word.length), 0);
}

//exemplo 4
//usando .map

function findLongestWordLengthMap(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

/*---------------------------------------------------------------------------*/

/*------------------RETORNAR OS MAIORES NUMEROS EM ARRAYS---------------------
Retorna um array que consiste no maior número de cada sub-array fornecido. 
Por simplicidade, o array fornecido conterá exatamente 4 sub-arrays.*/

//exemplo 1
//com for

function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {// para i menor que comprimento de arr i + 1
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}

//exemplo 2
//com .map e .reduce

function largestOfFourMap(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}

/*---------------------------------------------------------------------------*/

/*--------------------------------CONFIRMAR O FINAL------------------------------
Verifique se uma string (primeiro argumento, str) termina com a sequência de 
caracteres de destino fornecida (segundo argumento, target).*/

//exemplo 1
//abordagem declarativa

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

//exemplo 2
//expressao regular

function confirmEndingRegular(str, target) {
  let re = new RegExp(target + "$", "i");
  return re.test(str);
}

//exemplo 3

function confirmEndingSlice(str, target) {
  return str.slice(-target.length) === target
}

/*---------------------------------------------------------------------------*/

/*---------------------------REPETIR UMA STRING------------------------------
Repita uma string passada str (primeiro argumento), num vezes (segundo argumento).
Retorne uma string vazia se num não for um número positivo. Para o propósito do 
desafio, Não use o método integrado .repeat().*/

//exemplo 1
//usando for

function repeatStringNumTimes(str, num) {
  let accumulatedStr = "";

  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }
  return accumulatedStr;
}

//exemplo 2
//usando if

function repeatStringNumTimesIf(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimesIf(str, num - 1);
  }
}

/*---------------------------------------------------------------------------*/

/*-----------------------------TRUNCAR UMA STRING-----------------------------
Trunque uma string (primeiro argumento) se ela for maior que o comprimento 
máximo da string (segundo argumento). Retorne a string truncada com ... 
(reticências) ao final.*/

//exemplo

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

/*---------------------------------------------------------------------------*/

/*-----------------------------------ACHAR NAO E ROUBAR----------------------
Crie uma função que olhe através do array arr e retorne o primeiro elemento 
dentro do array que passe pelo 'teste de verdade' ('truth test'). Isso 
significa que, dado um elemento x, o 'teste de verdade' é verdadeiro se 
func(x) é true. Se nenhum elemento passa no test, retorna undefined.*/

//exemplo 1
//usando for

function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

//exemplo 2
//usando .find

function findElementFind(arr, func) {
  return arr.find(func);
}

//exemplo 3
//usando .map e indexOf

function findElementMap(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

/*---------------------------------------------------------------------------*/

/*---------------------IDENTIFICAR VERDADEIRO OU FALSO------------------------
Verifique se um valor é classificado como booleano primitivo. Retorna true ou false.*/

//exemplo

function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(null);

/*---------------------------------------------------------------------------*/

/*-----------CAPITALIZAR PRIMEIRA LETRA DE CADA PALAVRA DE UMA FRASE------------
Retorne a string fornecida com a primeira letra de cada palavra em letra 
maiúscula. Certifique-se de que o resto da palavra esteja em letras minúsculas.
Para o propósito desse exercício, você também deve capitalizar as palavras 
conectoras como the e of.*/

//exemplo 1

function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, L => L.toUpperCase());
}

//exemplo 2

function titleCaseDois(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

//exemplo 3

function titleCaseTres(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

/*---------------------------------------------------------------------------*/

/*------------------------------FATIAR E EMENDAR-----------------------------
Você está recebendo dois arrays e um índice.
Copie cada elemento da primeira matriz para a segunda matriz, em ordem.
Comece inserindo elementos no índice n do segundo array.
Retorne o array resultante. Os arrays recebidos devem permanecer os mesmos 
após a função ser executada.*/

//exemplo 1

function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

//exemplo 2

function frankenSpliceDois(arr1, arr2, n) {  
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

//exemplo 3

function frankenSpliceTres(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

/*---------------------------------------------------------------------------*/

/*------------------------------REMOVER FALSOS-------------------------------
Remover todos os valores falsos de um array. Retorna um novo array; não altere
o array original.MValores falsos (falsy) em JavaScript são false, null, 0, "",
undefined, e NaN.MDica: tente converter cada valor para um booleano.*/

//exemplo 1
//usando filter

function bouncer(arr) {
  return arr.filter(Boolean);
}

//exemplo 2
//usando for

function bouncerFor(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) filteredArr.push(arr[i]);
  }
  return filteredArr;
}

/*---------------------------------------------------------------------------*/

/*------------------------ENCONTAR O LOCAL EM UM ARRAY------------------------
Retorne o menor índice em que um valor (segundo argumento) deve ser inserido no 
array (primeiro argumento) assim que tenha sido ordenado. O valor retornado 
deve ser um número.*/

//exemplo 1
//usando filter

function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

//exemplo 2
//usando for

function getIndexToInsFor(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}

//exemplo 3
//usando findIndex

function getIndexToInsFind(arr, num) {
  // sort and find right index
  let index = arr
    .sort((curr, next) => curr - next)
    .findIndex(currNum => num <= currNum);
  // Returns index or total length of arr
  return index === -1 ? arr.length : index;
}

/*---------------------------------------------------------------------------*/

/*--------------------------INDENTIFICAR MUTAÇOES-----------------------------
Retorne true se a string no primeiro elemento do array contém todas as letras 
da string no segundo elemento do array.*/

//exemplo 1
//usando for

function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

//exemplo 2
//declarativo

function mutationDeclarativo(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

//exemplo 3
//recursivo

function mutationRecursiva([ target, test ], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation([ target, test ], i + 1);
}

/*---------------------------------------------------------------------------*/

/*-------------------------DIVIDIR E AGRUPAR----------------------------------
Escreva uma função que divida um array (primeiro argumento) em grupos com o 
comprimento de size (segundo argumento) e os retorne como um array bidimensional.*/

//exemplo 1

function chunkArrayInGroupsUm(arr, size) {
  const newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

//exemplo 2

function chunkArrayInGroupsDois(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroupsDois(arr.slice(size), size)
    );
  }
}

//exemplo 3 

function chunkArrayInGroupsTres(arr, size) {
  // Break it up.
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

//exemplo 4

function chunkArrayInGroupsQuatro(arr, size) {
  let temp = [];
  const result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

//exemplo 5

function chunkArrayInGroupsCinco(arr, size) {
  // Break it up.
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

/*---------------------------------------------------------------------------*/