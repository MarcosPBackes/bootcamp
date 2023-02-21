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
