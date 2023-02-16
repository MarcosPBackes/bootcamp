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

/*------------------USAR UM CONSTRUTOR PARA CRIAR OBJETOS---------------------*/

//exemplos
  
let blueBird = new Bird();//operador new é usado quando chamamos o construtor. 
                          //Isso avisa ao JavaScript para criar uma nova instância de Bird
blueBird.name = 'Rokie';
blueBird.color = 'blue';
blueBird.numLegs = 2;
//Assim como qualquer outro objeto, suas propriedades podem ser acessadas e modificadas:

let hound = new Dog();

hound.name = 'Mag';
hound.color = 'pink';
hound.numLegs = 4;

/*---------------------------------------------------------------------------*/

/*-------------ESTENDER CONSTRUTORAS PARA RECEBER ARGUMENTOS------------------
Os construtores Bird e Dog do último desafio funcionaram bem. No entanto, note 
que todos os Birds que são criados com o construtor Bird são automaticamente 
nomeados Albeart, são da cor azul e possuem duas pernas. E se você deseja 
pássaros com diferentes valores para seus nomes e cores? É possível alterar 
estas propriedades de cada pássaro manualmente, mas isso daria bastante trabalho:*/

/*Suponha que você está escrevendo um programa para registrar centenas ou até 
milhares de diferentes pássaros em um aviário. Seria necessário muito tempo para 
criar todos estes pássaros, e então alterar as propriedades para os diferentes 
valores de cada um. Para criar diferentes objetos Bird de forma mais fácil, você 
pode projetar o construtor de Bird para aceitar parâmetros:*/

//exemplos

function Passaro(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let azul = new Passaro('azul', 'azul')

function Cao(name, color,) {
    this.name = name;
    this.color = color;
    this.numLegs = 4
}

let terrier = new Cao('Xuxu', 'cinza')  

/*---------------------------------------------------------------------------*/

/*--------------VERIFICAR O CONSTRUTOR DE UM OBJETO COM INSTANCEOF-------------
Toda vez que a função construtora cria um novo objeto, o objeto é definido como 
uma instance do seu construtor. JavaScript provê uma forma conveniente para 
verificar isso com o operador instanceof. instanceof permite que você compare 
um objeto a um construtor, retornando true ou false caso seja ou não um objeto 
criado pelo construtor, respectivamente.*/

let corvo = new Passaro('Alexis', 'black');
corvo instanceof Passaro;//Retorna true

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(3)
myHouse instanceof House;//Retorna true

let canaryFalse = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
};
  
canaryFalse instanceof Passaro;//Retorna falso
  
/*---------------------------------------------------------------------------*/

/*-------------------ESTENDER PROPRIEDADES PROPRIAS---------------------------
name e numLegs são chamados own properties, pois são definidos diretamente na 
instância do objeto. Isso significa que cada duck e canary possuem suas próprias 
cópias separadas destas propriedades. Na verdade, toda instância de Passaros terá 
sua própria cópia dessas propriedades. O código a seguir adiciona todas as 
propriedades próprias (own properties) de duck para o array ownProps:*/

//exemplos

let azulProps = [];

for (let property in azul) {
  if(azul.hasOwnProperty(property)) {
    azulProps.push(property);
  }
}

console.log(azulProps);//O console vai exibir o valor ["name", "numLegs"].


let canaryProps = [];

for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    canaryProps.push(property)
  }
}

/*---------------------------------------------------------------------------*/

/*--------USAR PROPRIEDADES DE PROTOTIPOS PARA REDUZIR CODIGO DUPLICADO---------
Já que numLegs provavelmente terá o mesmo valor para todas as instâncias de 
Bird, você tem a variável numLegs duplicada dentro de cada instância de Bird.
Isso pode não ser um problema quando há apenas duas instâncias, mas imagine se 
há milhões de instâncias. Neste cenário teríamos muitas variáveis duplicadas.
Uma maneira melhor é usar o prototype de Bird. Propriedades dentro de prototype 
são compartilhados entre todas as instâncias de Bird. Aqui está como adicionar 
numLegs para o prototype de Bird:*/

//exemplos

Bird.prototype.numLegs = 2;

function Dogo(name) {
    this.name = name;
  }
Dogo.prototype.numLegs = 4;   

let beagle = new Dogo("Snoopy");

/*---------------------------------------------------------------------------*/