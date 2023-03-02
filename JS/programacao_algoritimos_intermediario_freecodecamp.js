/*---------------------------------------------------------------------------*/

/*-----------------SOMAR TODOS OS NUMEROS EM UM INTERVALO---------------------
Vamos passar um array de dois números. Retorne a soma desses dois números mais 
a soma de todos os números entre eles. O menor número nem sempre chegará primeiro.*/

//exemplos

function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let soma = 0;
    for (let i = min; i <= max; i++) {
      soma += i;
    }
    return soma
  }

function sumAllSpread(arr) {
let sumBetween = 0;
for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i;
}
return sumBetween;
}

/*---------------------------------------------------------------------------*/

/*-------------------------DIFERENCIAR DOIS ARRAYS-----------------------------
Compare dois arrays e retorne um novo array com qualquer item encontrado em 
apenas um dos dois arrays passados, mas não ambos. Em outras palavras, retorne 
a diferença simétrica de dois arrays. Observação: você pode retornar o array 
com seus elementos em qualquer ordem.*/

//exemplos

function diffArraySpread(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  
    function diff(a, b) {
      return a.filter(item => b.indexOf(item) === -1);
    }
  }

function diffArray(arr1, arr2) {
const newArr = [];

function onlyInFirst(first, second) {
    //Loop para procurar elementos inexistentes no outro array
    for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
        //Adicionando os caracteres unicos em um novo array
        newArr.push(first[i]);
    }
    }
}

onlyInFirst(arr1, arr2);
onlyInFirst(arr2, arr1);

return newArr;
}

/*---------------------------------------------------------------------------*/

/*------------------------------PROCURAR E DESTRUIR---------------------------
Você receberá um array inicial (o primeiro argumento na função destroyer), 
seguido por um ou mais argumentos. Remova todos os elementos da matriz inicial 
que são do mesmo valor que esses argumentos.*/

//exemplos

function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      let removeElement = false;
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          removeElement = true;
        }
      }
      if (!removeElement) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
}

/*Crie uma matriz de valsToRemove usando Object.values(arguments).
slice(1) e armazene-a na variável valsToRemove. Usaremos isso para verificar arr.
Inicie um loop for básico para iterar através de arr. Aninhe outro loop for dentro 
do primeiro, alterando a variável inteira j e arr para valsToRemove. Este segundo 
loop irá iterar por meio de valsToRemove .
No segundo loop, crie uma instrução if, verificando rigorosamente === se o valor 
atual de arr[i] é igual a valsToRemove[j].
Se o valor no índice atual for igual em ambas as matrizes, deixe removeElement 
para true removê-lo de arr.
Se o valor não estiver sinalizado para remoção, adicione-o ao filterArray.
Fora dos loops aninhados, retorne o filterArray*/

function destroyerSpread(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
}

//Usando spread para recuperar os argumentos
//Retorna o array filtrado usando include

/*---------------------------------------------------------------------------*/

/*----------------------------LOCALIZARPOR VALOR------------------------------
Faça uma função que olha através de um array de objetos (primeiro argumento) e 
retorna um array de todos os objetos que têm pares de nome e valor correspondentes 
(segundo argumento). Cada par de nome e valor do objeto fonte tem que estar 
presente no objeto da coleção se ele for ser incluído no array retornado.*/

//exemplos

function whatIsInAName(collection, source) { 
  const souceKeys = Object.keys(source);
  
  return collection.filter(obj => souceKeys//Filtrar collection
      //Mapeia as chaves e retorna true ou false
      .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
      .reduce((a, b) => a && b));//Reduzimos os valores booleanos mapeados 
                                 //para um único booleano que indica se todas 
                                 //as srcKeys passam pelas condições verificadas acima.
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

function whatIsInAName(collection, source) {  
  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter(obj => {//Filtrar o array
    for (let i = 0; i < souceKeys.length; i++) {//Loop for para passar por todos os itens
      if (!obj.hasOwnProperty(souceKeys[i]) ||          //Verificar se obj nao possui a chave 
          obj[souceKeys[i]] !== source[souceKeys[i]]) { //e se o valor da propeiedade nao corresponde ao valor
        return false;//Retorna false se a instruçao for correta
      }
    }
    return true;
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

/*---------------------------------------------------------------------------*/

/*----------------------------------HIFENIZAR--------------------------------
Converta uma string transformado os espaços em hifens. Casos espinais são 
todas-as-palavras-minúsculas-unidas-por-traços.*/

//exemplos

function spinalCase(str) {
  return str  
  .split(/\s|_|(?=[A-Z])/)//\s espaço em branco, _ caractere sublinhado, (?=[A-Z]) seguido por maiuscula
  .join("-")//junta usando hifen -
  .toLowerCase();//Tudo minusculo
}

function spinalCaseAlpha(str) {
  //Variavel para espaços em  branco e underscore
  var regex = /\s+|_+/g;
  
  //Remova minusculas por maiusculas
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  //Remova espaço e underscore por -
  return str.replace(regex, "-").toLowerCase();//Mudar para minisculo
}

/*---------------------------------------------------------------------------*/

/*------------------------------USAR O PIG LATIN------------------------------
Pig Latin é uma forma de alterar palavras inglesas. As regras são as seguintes:
- Se uma palavra começar com uma consoante, tire a primeira consoante ou grupo 
de consoantes, mova-a para o final da palavra e adicione ay a ela.
- Se uma palavra começar com uma vogal, basta adicionar way no final.*/

//exemplos

function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")//Verifica se primeira letra e consoante e adiciona "way" ao final
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");//verifica se a primeira letra e consoante, move para o final da palavra adicionando "ay"
}

function translatePigLatinIf(str) {
  //Variaveis a ser usadas
  var pigLatin = "";
  var regex = /[aeiou]/gi;

  //Checa se o primeiro caracter e um vogal
  if (str[0].match(regex)) {
    pigLatin = str + "way";//adiciona way
  } else if (str.match(regex) === null) {
    //Checa se tem apenas consoantes
    pigLatin = str + "ay";//adiciona ay
  } else {
    //Procura quantas consoantes tem antes da primeira vogal
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    //Pega a string da primeira vogal até o último caractere
    //então adicione as consoantes que foram omitidas anteriormente e adicione a terminação.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }

  return pigLatin;
}

/*---------------------------------------------------------------------------*/

/*------------------------------PROCURAR E SUBSTITUIR-------------------------
Realize uma busca e substitua na frase usando os argumentos fornecidos e retorne 
a nova frase. O primeiro argumento é a frase para realizar a busca e substituir.
O segundo argumento é a palavra que você substituirá (antes).
O terceiro argumento é com o que você vai substituir o segundo argumento (depois).
Observação: preserve a capitalização do primeiro caractere na palavra original 
quando você estiver substituindo. Por exemplo, se você quiser substituir a palavra 
Book com a palavra dog, deve ser substituído com Dog*/

//exemplos

function myReplaceIf(str, before, after) {
  //Encontre o índice onde before está na string
  var index = str.indexOf(before);
  //Checa se a primeira letra esta em maiuscula ou nao
  if (str[index] === str[index].toUpperCase()) {
    //Altera a palavra posterior para maiuscula antes de usa-la
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    //Altera a palavra posterior para maiuscula antes de usa-la
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  //Agora substitua o str original pelo editado
  str = str.replace(before, after);

  return str;
}

function myReplace(str, before, after) {
  // Verifique se o primeiro caractere do argumento "before" é uma letra maiúscula ou minúscula e altere o primeiro caractere do argumento "after" para corresponder ao caso
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }

  //string de retorno com o argumento "before" substituído pelo argumento "after" (com maiúsculas e minúsculas)
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/*---------------------------------------------------------------------------*/

/*-------------------------------PAREAR DNA-----------------------------------
Os pares de fileiras de DNA são constituídos por pares de bases nitrogenadas. 
Os pares de bases são representados pelos caracteres AT e CG, que formam os 
blocos de construção da dupla hélice do DNA. A fileira do DNA está sem o 
elemento de que faz par com ele. Escreva uma função que corresponda aos 
pares de base que faltam para a fileira de DNA fornecida. Para cada caractere 
na string fornecida, encontre o caractere de par de bases. Retorne os 
resultados em um array bidimensional.
Por exemplo, para a entrada GCG, retorne [["G", "C"], ["C","G"], ["G", "C"]]*/

function encontrarParesDeBases(fileiraDNA) {
  // Cria um objeto para mapear os pares de bases nitrogenadas
  const paresDeBases = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  // Converte a string de DNA em um array para percorrer os caracteres
  const caracteresDNA = fileiraDNA.split("");
  
  // Cria um array vazio para armazenar os pares de bases nitrogenadas
  const paresEncontrados = [];

  // Itera sobre cada caractere da string DNA e encontra seu par de base
  for (let i = 0; i < caracteresDNA.length; i++) {
    const par = [caracteresDNA[i], paresDeBases[caracteresDNA[i]]];
    paresEncontrados.push(par);
  }

  // Retorna o array bidimensional com os pares de bases nitrogenadas encontrados
  return paresEncontrados;
}

/*---------------------------------------------------------------------------*/

/*-------------------------ENCONTRAR AS LETRAS FALTANDO----------------------
Encontre a letra que falta no intervalo de letras passado e devolva-a.
Se todas as letras estiverem presentes no intervalo, retorne undefined.*/

function fearNotLetter(str) {
  // Itera sobre cada caractere da string de entrada
  for (let i = 0; i < str.length - 1; i++) {
    // Verifica se há um intervalo entre o caractere atual e o próximo no alfabeto
    if (str.charCodeAt(i+1) - str.charCodeAt(i) > 1) {
      // Se houver um intervalo, retorna a letra que falta
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  // Se não houver letras ausentes, retorna undefined
  return undefined;
}

/*---------------------------------------------------------------------------*/

/*-----------------------------------UNIR EM ORDEM---------------------------
Escreva uma função que recebe dois ou mais arrays e retorne um novo array de 
calores únicos na ordem do array original fornecido.
Em outras palavras, todos os valores presentes de todos os arrays devem ser 
incluídos na sua ordem original, mas sem valores duplicados no array final.
Os números únicos devem ser ordenados pela sua ordem original, mas o array 
final não deve ser ordenado em ordem numérica.*/

function uniteUnique(...arr) {
  // Une todos os arrays em um único array
  const flatArr = arr.reduce((acc, curr) => acc.concat(curr), []);
  
  // Filtra apenas os valores únicos do array
  const uniqueArr = flatArr.filter((value, index, array) => array.indexOf(value) === index);
  
  // Retorna o array com valores únicos em sua ordem original
  return uniqueArr;
}

/*---------------------------------------------------------------------------*/

/*---------------------------CONVERTER ENTIDADES HTML------------------------
Converta os caracteres &, <, >, " (aspas duplas) e ' (aspas simples), em uma 
string para suas entidades HTML correspondentes.*/

function convertHTML(str) {
  // Substitui os caracteres especiais por suas entidades HTML correspondentes
  str = str.replace(/&/g, "&amp;")
           .replace(/</g, "&lt;")
           .replace(/>/g, "&gt;")
           .replace(/"/g, "&quot;")
           .replace(/'/g, "&apos;");
  
  // Retorna a string convertida
  return str;
}

/*---------------------------------------------------------------------------*/

/*--------------SOMAR TODOS OS NUMEROS IMPARES DE FIBONACCI------------------
Dado um num inteiro e positivo, retorne a soma de todos os números ímpares 
Fibonacci menores que ou iguais a num. Os dois primeiros números na sequência 
de Fibonacci são 0 e 1. Todo número adicional na sequência é a soma dos dois 
números anteriores. Os sete primeiros números da sequência de Fibonacci 
são 0, 1, 1, 2, 3, 5 e 8. Por exemplo, sumFibs(10) deve retornar 10 porque 
todos os números ímpares de Fibonacci menores ou iguais a 10 são 1, 1, 3 e 5.*/

function sumFibs(num) {
  let sum = 0;
  let prev = 0;
  let curr = 1;
  
  while (curr <= num) {
    if (curr % 2 !== 0) {
      sum += curr;
    }
    
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  
  return sum;
}

/*---------------------------------------------------------------------------*/

/*----------------------------SOMAR TODOS OS PRIMOS--------------------------
Um número primo é um número natural maior que 1 com exatamente dois divisores: 
1 e ele mesmo. Por exemplo, 2 é um número primo porque só é divisível por 1 e 2. 
Em contrapartida, 4 não é primo, uma vez que é divisível por 1, 2 e 4.
Reescreva sumPrimes para que ele retorne a soma de todos os números primos que 
são menores ou iguais a num.*/

function sumPrimes(num) {
  let sum = 0;
  
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  
  return sum;
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}

/*---------------------------------------------------------------------------*/

/*-------------------ENCONTRAR O MENOR MULTIPLO COMUM-------------------------
Encontre o menor múltiplo comum dos parâmetros fornecidos que podem ser divididos 
sem resto por ambos, bem como por todos os números sequenciais no intervalo entre 
esses parâmetros. O intervalo será um array de dois números que não estará 
necessariamente em ordem numérica. Por exemplo, se forem dados 1 e 3, encontre o 
menor múltiplo comum de 1 e 3 que também é divisível por todos os números entre 
1 e 3. A resposta aqui seria 6.*/

function smallestCommons(arr) {
  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  arr = arr.sort((a, b) => a - b);
  let multiple = arr[0];
  for (let i = arr[0] + 1; i <= arr[1]; i++) {
    multiple = lcm(multiple, i);
  }

  return multiple;
}

/*---------------------------------------------------------------------------*/

/*--------------------------DESPACHAR NUMEROS---------------------------------
Dado o array arr, faça iterações sobre ele e remova cada elemento começando do 
primeiro elemento (o índice 0) até que a função func retorne true quando o 
elemento iterado for passado através dele.
Em seguida, retorne o resto do array uma vez que a condição for satisfeita, 
caso contrário, arr deve ser retornado como um array vazio.*/

function dropElements(arr, func) {
  // Loop através do array
  for (let i = 0; i < arr.length; i++) {
    // Se a função retornar true para o elemento atual, retorna o restante do array
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }
  // Se a função nunca retornar true, retorna um array vazio
  return [];
}

/*---------------------------------------------------------------------------*/
