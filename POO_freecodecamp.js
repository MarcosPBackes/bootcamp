/*---------------------------------------------------------------------------*/

/*----------------------------CRIAR UM OBJETO BASICO---------------------------
Pense sobre as coisas que as pessoas veem todos os dias, como carros, lojas e 
pássaros. Tudo isso são objetos: coisas tangíveis com que pessoas podem observar 
e interagir. Quais são algumas qualidades destes objetos? Um carro possui rodas. 
Lojas vendem itens. Pássaros possuem asas. Estas qualidades, ou propriedades, 
definem o que faz um objeto. Note que objetos similares compartilham de 
propriedades iguais, mas podem ter diferentes valores para estas propriedades. 
Por exemplo, todos os carros possuem rodas, mas nem todos os carros possuem o 
mesmo número de rodas. Objetos em JavaScript são utilizados como modelos de 
objetos do mundo real, dando a eles propriedades e comportamentos assim como 
se fossem análogos ao mundo real.*/

//exemplos

let duck = {
    name: "Aflac",
    numLegs: 2
  };

let dog = {
name: "Bolt",
numLegs: 4,
};

/*---------------------------------------------------------------------------*/

/*-----USAR NOTAÇAO DE PONTO PARA ACESSAR AS PROPRIEDADES DE UM OBJETO-------*/

//exemlos

console.log(duck.name);
console.log(dog.numLegs);

/*---------------------------------------------------------------------------*/

/*---------------------------CRIAR UM METODOD EM UM OBJETO--------------------
Objetos podem ter um tipo especial de propriedade, chamado de método.
Os métodos são propriedades que são funções. Isso adiciona diferentes 
comportamentos para um objeto*/

//exemplos

let duckSay = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duckSay.name + ".";}
};
duckSay.sayName();

let dogSay = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return 'This dog has ' + dogSay.numLegs + ' legs.'}
};

dogSay.sayLegs();  

/*---------------------------------------------------------------------------*/

/*-------------FAZER CODIGO MAIS REUTILIZAVEL COM A PALAVRA-CHAVE THIS--------
Enquanto isso é uma forma válida de acessar a propriedade do objeto, tem uma 
armadilha aqui. Se o nome da variável mudar, qualquer código referenciando o 
nome original seria necessário ser atualizado também. Em uma definição curta 
de objeto, isso não é um problema, mas se um objeto possui muitas referencias 
para suas propriedades, há uma chance maior de erro. Uma forma para evitar 
estes problemas é utilizar a palavra-chave this:*/

let duckThis = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + this.name + ".";}
    //sayName: function() {return "The name of this duck is " + duck.name + ".";}
  };

let dogThis = {
name: "Spot",
numLegs: 4,
sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

/*---------------------------------------------------------------------------*/

/*-------------------------DEFINIR UMA FUNÇAO CONSTRUTORA---------------------
Construtores são funções que criam novos objetos. Eles definem propriedades e 
comportamentos que pertencerão ao novo objeto. Pense neles como uma planta para 
a criação de novos objetos.
Construtores seguem algumas convenções:
    Construtores são definidos com a primeira letra do nome maiúscula 
para distinguir eles de outras funções que não são constructors.
    Construtores usam a palavra-chave this para definir as propriedades 
do objeto que eles criarão. Dentro do construtor, this referencia para um 
novo objeto quer vai ser criado.
    Construtores definem propriedades e comportamentos em vez de retornar
valores como outras funções podem fazer.*/

//exemplos

function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}
function Dog() {
    this.name = 'Bolt';
    this.color = 'black';
    this.numLegs = 4;
}  

/*---------------------------------------------------------------------------*/

