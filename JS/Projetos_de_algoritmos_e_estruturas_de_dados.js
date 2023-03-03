/*---------------------------------------------------------------------------*/

/*----------------------------VERIFICADOR DE PALINDRO-------------------------
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
