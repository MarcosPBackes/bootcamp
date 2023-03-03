/*---------------------------------------------------------------------------*/

/*----------------------------VERIFICADOR DE PALINDROMO-------------------------
Retorne true se a string fornecida for um palíndromo. Caso contrário, retorne false.
Um palíndromo é uma palavra ou frase que é dita da mesma maneira na ordem natural 
que na ordem inversa, ignorando pontuação, capitalização e espaçamento.
Observação: você precisará remover todos os caracteres não alfanuméricos 
(pontuação, espaços e símbolos) e transforme tudo na mesma capitalização 
(letra em minúsculo ou maiúsculo) para verificar se determinada palavra ou frase 
é um palíndromo. Vamos passar strings em diferentes formatos, como racecar, 
RaceCarar e race CAR entre outros. Nós também passaremos strings com símbolos 
especiais, como 2A3*3a2, 2A3 3a2 e 2_A3*3#A2.*/

function palindrome(str) {
    // Remove caracteres não alfanuméricos e transforma em minúsculas
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Inverte a string
    let reversedStr = str.split('').reverse().join('');
  
    // Compara a string original com a string invertida
    return str === reversedStr;
}

/*---------------------------------------------------------------------------*/

/*--------------------------CONVERSOR DE NUMERAIS ROMANOS---------------------
Converta o número dado em um número romano.
Números romanos 	Números arábicos
M 	1000
CM 	900
D 	500
CD 	400
C 	100
XC 	90
L 	50
XL 	40
X 	10
IX 	9
V 	5
IV 	4
I 	1
Todos os números romanos devem ser em maiúsculas.*/

function convertToRoman(num) {
    const romanNums = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" },
    ];
  
    let result = "";
  
    for (let i = 0; i < romanNums.length; i++) {
      while (num >= romanNums[i].value) {
        result += romanNums[i].symbol;
        num -= romanNums[i].value;
      }
    }
  
    return result;
}

/*---------------------------------------------------------------------------*/

/*--------------------------------CIFRA DE CESAR-------------------------------
Uma das cifras mais simples e mais conhecidas é a cifra de César, também conhecida 
como uma cifra de mudança. Em uma cifra de transferência, os significados das 
letras são deslocados de acordo com a quantidade definida.
Um uso moderno comum é a cifra ROT13, onde os valores das letras são deslocados 
em 13 lugares. Da seguinte forma: A ↔ N, B ↔ O e assim por diante.
Escreva uma função que recebe uma string codificada de ROT13 como entrada e 
retorna uma string decodificada. Todas as letras serão maiúsculas. Não transforme 
nenhum caractere não-alfabético (ou seja, espaços, pontuação), mas passe por eles.*/

function rot13(str) {
    // Inicializa a string de saída
    let decodedStr = "";
  
    // Percorre cada caractere da string de entrada
    for (let i = 0; i < str.length; i++) {
      // Obtém o código ASCII do caractere
      let charCode = str.charCodeAt(i);
  
      // Se o caractere estiver entre A e M (ou a e m)
      // adiciona 13 ao código ASCII
      if (charCode >= 65 && charCode <= 77 || charCode >= 97 && charCode <= 109) {
        charCode += 13;
      }
      // Se o caractere estiver entre N e Z (ou n e z)
      // subtrai 13 do código ASCII
      else if (charCode >= 78 && charCode <= 90 || charCode >= 110 && charCode <= 122) {
        charCode -= 13;
      }
  
      // Adiciona o caractere decodificado à string de saída
      decodedStr += String.fromCharCode(charCode);
    }
  
    return decodedStr;
}

/*---------------------------------------------------------------------------*/

/*-------------------------VALIDADOR DE NUMERO DE TELEFONE---------------------
Retorna true se a string fornecida se parece com um número telefônico dos Estados 
Unidos válido.
O usuário pode preencher o campo do formulário de qualquer maneira que escolher 
contanto que tenha o formato de um número válido dos EUA. Os seguintes são exemplos 
de formatos válidos para números nos EUA (consulte os testes abaixo para outras variantes):
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
Para este desafio, você vai receber uma string como 800-692-7753 ou 8oo-six427676;laskdjf. 
Seu trabalho é validar ou rejeitar o número de telefone dos EUA com base em qualquer 
combinação dos formatos fornecidos acima. O código de área é obrigatório. Se o código 
do país é fornecido, você deve confirmar que o código do país é 1. Retorne true se a 
seqüência de caracteres for um número válido de telefone dos EUA; caso contrário, 
retorne false.*/

function telephoneCheck(str) {
    // Regex que valida os formatos permitidos
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    // Testa se a string fornecida passa na validação
    return regex.test(str);
}

/*---------------------------------------------------------------------------*/

/*----------------------------------CRIAR REGISTRADORA----------------------
Implemente uma função de caixa registradora checkCashRegister() que aceita o 
preço de compra como o primeiro argumento (price), pagamento como o segundo 
argumento (cash) e dinheiro na registradora (cid) como o terceiro argumento.
cid é um array de duas dimensões listando a moeda disponível e a quantidade.
A função checkCashRegister() deve sempre retornar um objeto com a chave status 
e uma chave change.
Retorne {status: "INSUFFICIENT_FUNDS", change: []} se o dinheiro no caixa for 
menor que o troco devido, ou se você não pode retornar o troco exato.
Retorne {status: "CLOSED", change: [...]} com dinheiro no caixa como o 
valor para a chave change se for igual ao troco devido.
Caso contrário, retorne {status: "OPEN", change: [...]}, com o troco devido 
em moedas e notas, ordenado do maior para o menor, como o valor da chave change.
Unidade de moeda	Quantidade
Penny	$0,01 (PENNY)
Nickel	$0,05 (NICKEL)
Dime	$0,1 (DIME)
Quarter	$0,25 (QUARTER)
Dólar	$1 (ONE)
Cinco dólares	$5 (FIVE)
Dez dólares	$10 (TEN)
Vinte dólares	$20 (TWENTY)
Cem dólares	$100 (ONE HUNDRED)
Veja abaixo um exemplo de um array de dinheiro no caixa (cid):
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]*/

function checkCashRegister(price, cash, cid) {
    const UNIT_AMOUNTS = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
  
    const totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);
  
    let changeDue = cash - price;
    let change = [];
  
    if (changeDue > totalCid) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (changeDue.toFixed(2) === totalCid.toFixed(2)) {
      return {status: "CLOSED", change: cid};
    } else {
      cid = cid.reverse();
  
      for (let i = 0; i < cid.length; i++) {
        const unit = cid[i][0];
        const unitAmount = UNIT_AMOUNTS[unit];
        let unitTotal = cid[i][1];
        let unitsToReturn = 0;
  
        while (changeDue >= unitAmount && unitTotal > 0) {
          changeDue -= unitAmount;
          changeDue = Math.round(changeDue * 100) / 100;
          unitTotal -= unitAmount;
          unitsToReturn++;
        }
  
        if (unitsToReturn > 0) {
          change.push([unit, unitsToReturn * unitAmount]);
        }
      }
    }
  
    if (changeDue > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
    return {status: "OPEN", change: change};
  }
  
/*---------------------------------------------------------------------------*/