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