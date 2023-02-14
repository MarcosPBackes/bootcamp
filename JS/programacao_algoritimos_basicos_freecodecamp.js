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
                                                      //calculos depois chamada recursiva
  }
}

factorializeTail(5);

/*---------------------------------------------------------------------------*/