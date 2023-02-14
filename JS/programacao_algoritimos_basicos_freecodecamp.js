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