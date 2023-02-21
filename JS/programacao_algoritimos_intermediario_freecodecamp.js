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