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

/*-----------------------ITERAR SOBRE TODAS AS PROPRIEDADES-------------------
Até agora você já viu dois tipos de propriedades: as propriedades own properties
e prototype. Propriedades próprias (ou Own properties) são definidas diretamente 
na própria instância do objeto. E as propriedades do protótipo são definidas em
prototype.*/

//exemplos

let pato = new Bird("Donald");
let ownPropsPato = [];
let prototypePropsPato = [];

for (let property in pato) {
  if(pato.hasOwnProperty(property)) {
    ownPropsPato.push(property);
  } else {
    prototypePropsPato.push(property);
  }
}

console.log(ownPropsPato);
console.log(prototypePropsPato);

function Cao(name) {
  this.name = name;
}

Cao.prototype.numLegs = 4;

let caramelo = new Cao("Snoopy");
let ownPropsCao = [];
let prototypePropsCao = [];

for (let property in caramelo) {
  if(caramelo.hasOwnProperty(property)) {
    ownPropsCao.push(property);
  } else {
    prototypePropsCao.push(property); 
  }
}

/*---------------------------------------------------------------------------*/

/*--------------------ENTENDER A PROPRIEDADE CONSTRUTORA----------------------
Tem uma propriedade especial do constructor localizada nas instâncias dos objetos.
Note que a propriedade constructor é uma referência a função construtora que 
criou a instância. A vantagem da propriedade constructor é que se torna possível 
verificar essa propriedade para descobrir qual o tipo do objeto. */

/*Observação: já que a propriedade constructor pode ser sobrescrita (o que 
será abordado nos próximos dois desafios), geralmente é melhor utilizar o 
método instanceof para verificar o tipo de um objeto.*/

//exemplos

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

console.log(duck.constructor === Bird);//Retorna true 
console.log(beagle.constructor === Dog);//Retorna true

/*---------------------------------------------------------------------------*/

/*-----------------MUDAR O PROTOTIPO PARA UM NOVO OBJETO----------------------
Até o momento, você tem adicionado propriedades para cada prototype individualmente:
Isto se torna entediante após mais do que algumas propriedades.
Uma forma mais eficiente é definir o prototype para um novo objeto que já possui 
as propriedades. Dessa maneira, as propriedades são adicionadas todas de uma vez:*/

//exemplo

function Doge(name) {
  this.name = name;
}

Doge.prototype = {
  // Altere apenas o código abaixo desta linha
  numLegs: 4,
  eat: function() {
    console.log('nom nom');
  },
  describe: function() {
    console.log('My name is ' + this.name);
  }
};

/*---------------------------------------------------------------------------*/

/*---LEMBRAR DE DEFINIR A PROPRIEDADE CONSTRUTORA QUANDO ALTERAR O PROTOTIPO---
Tem um efeito colateral crucial de definir manualmente o protótipo de um novo 
objeto. Isso apaga a propriedade constructor! Essa propriedade pode ser 
utilizada para verificar qual função construtora criou a instância, mas já 
que a propriedade foi sobrescrita, agora retorna resultados falsos:
Para corrigir isso, toda vez que o protótipo é manualmente definido para um 
novo objeto, lembre-se de definir a propriedade constructor:*/

//exemplo

duck.constructor === Doge;//false
duck.constructor === Object;//true
duck instanceof Bird;//true

Doge.prototype = {
  constructor: Doge,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

/*---------------------------------------------------------------------------*/

/*----------------ENTENDER DE ONDE VEM O PROTOTIPO DE UM OBJETO---------------
Assim como uma pessoa herda o gene de seus parentes, um objeto herda seu 
prototype diretamente da função construtora que o criou. Por exemplo, aqui 
o construtor de Bird cria um objeto duck:*/

//exemplo

function Doge (name) {
  this.name = name;
}

let bea = new Doge ("Snoopy");

Doge.prototype.isPrototypeOf(bea);//true

/*---------------------------------------------------------------------------*/

/*-----------------------ENTENDER A CADEIA DE PROTOTIPOS---------------------
Todos os objetos em JavaScript (com algumas exceções) possuem um prototype. 
Além de que, um prototype de um objeto ser um próprio objeto.
Devido ao fato de um prototype ser um objeto, um prototype pode ter seu 
próprio prototype! Neste caso, o prototype de Bird.prototype é um 
Object.prototype:
O método hasOwnProperty é definido em Object.prototype, o qual pode ser 
acessado por Bird.prototype, o qual pode ser acessado por duck. Este é 
um exemplo de cadeia de prototype. Nesta cadeia de prototype, Bird é 
um supertipo para duck, enquanto duck é o subtipo. Object é um supertipo
para ambos Bird e duck. Object é um supertipo para todos os objetos em 
JavaScript. Desta forma, qualquer objeto pode utilizar o método hasOwnProperty.*/

//exemplo

Dog.prototype.isPrototypeOf(beagle);  // retorna verdadeiro

Object.prototype.isPrototypeOf(Dog.prototype);

/*---------------------------------------------------------------------------*/

/*------------------UTILIZAR HERANÇA PARA NAO SE REPETIR----------------------
Tem um princípio da programação chamado Don't Repeat Yourself (DRY) - Não se 
Repita. O motivo pelo qual código repetido é um problema se deve ao fato de 
qualquer alteração exige correção de código em vários locais. Geralmente isso 
significa mais trabalho para os programadores e mais espaço para erros.*/

//exemplo

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }

};

/*---------------------------------------------------------------------------*/

/*-----------------HERDAR COMPORTAMENTOS DE UM SUPERTIPO----------------------
Este e o próximo desafio vai abordar como reutilizar métodos de Animal dentro 
de Bird e Dog sem ter de definir os métodos novamente. Ele utiliza uma técnica 
chamada herança. Este desafio cobrirá o primeiro passo: fazer uma instância do 
supertype (ou parente). Você já sabe uma forma de criar instâncias de Animal 
utilizando o operador new:
Há algumas desvantagens quando utilizamos essa sintaxe para herança, que são 
muito complexas para o escopo deste desafio. Em vez disso, aqui está uma 
abordagem alternativa sem essas desvantagens:
Object.create(obj) cria um novo objeto, e define obj como o novo prototype 
do objeto. Lembre-se que o prototype é como uma "receita" para criar um 
objeto. Ao definir o prototype de animal para ser um prototype de Animal, 
você está efetivamente dando a instância animal a mesma "receita" de 
qualquer outra instância de Animal.*/

//exemplo

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let ducks = Object.create(Animal.prototype); 
let beagles = Object.create(Animal.prototype);

/*---------------------------------------------------------------------------*/

/*---DEFINIR O PROTOTIPO DA CLASSE FILHA PARA QUE SEJA UMA INSTANCIA DO PAI-----
Este desafio cobre o próximo passo: definir o prototype do subtipo (ou filho) - 
neste caso, Bird - para ser uma instância de Animal.*/

Bird.prototype = Object.create(Animal.prototype);

/*Lembre-se de que o prototype é como uma receita para criar um objeto. 
De certo modo, a receita de Bird agora inclui todos os "ingredientes" 
importantes de Animal.
duck herda todas as propriedades de Animal, incluindo o método eat.*/

//exemplos

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

let cinza = new Dog();

/*---------------------------------------------------------------------------*/

/*----------------REDEFINIR UMA PROPRIEDADE HERDADA DO CONSTRUTOR--------------
Quando um objeto herda seu prototype de outro objeto, ele também herda a 
propriedade construtora do supertipo.*/

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duckye = new Bird();
duckye.constructor

/*Mas duck e todas as instâncias de Bird devem mostrar que eles foram 
construídos por Bird e não Animal. Para fazer isso, você pode 
manualmente definir a propriedade construtora de Bird para o objeto Bird:*/

Bird.prototype.constructor = Bird;
duck.constructor

//exemplo

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
let duckAlpha = new Bird();
let beagleAlpha = new Dog();

/*---------------------------------------------------------------------------*/

/*----------------------ADICIONAR METODOS APOS A HERANÇA---------------------
Uma função construtora, ou simplesmente construtor, que herda seu objeto de 
prototype de uma função construtora de supertipo, além dos métodos herdados, 
ainda poderá ter seus próprios métodos.
Por exemplo, Bird é um construtor que herda seu prototype de Animal:*/

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

/*Como adicional do que é herdado da classe Animal, você deseja adicionar 
o comportamento que é único de objetos Bird. Aqui, Bird definirá a função 
fly(). As funções são adicionadas ao Bird's prototype (protótipo do pássaro) 
da mesma forma que qualquer função construtora:*/

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
//Agora as instâncias de Bird terão ambos os métodos, eat() e fly():

//exemplo 

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log('Woof!');
};

let marrom = new Dog();

/*---------------------------------------------------------------------------*/

/*---------------------------SOBRESCREVER METODOS HERDADOS--------------------
Nas lições passadas, você aprendeu que um objeto pode herdar seus comportamentos 
(métodos) de outro objeto ao referenciar o prototype do objeto:
É possível sobrescrever um método herdado. É feito da mesma maneira - ao adicionar 
o método a ChildObject.prototype utilizando o mesmo nome do método que aquele a 
ser sobrescrito. Aqui está um exemplo de Bird sobrescrevendo o método eat() 
herdado de Animal:*/

function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};

//exemplo

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird."
};

let penguin = new Penguin();
console.log(penguin.fly());

/*---------------------------------------------------------------------------*/

/*---USAR MIXIN PARA ADICIONAR COMPORTAMENTOS COMUNS ENTRE OBJETOS NAO RELACIONADOS---
Como você já viu, comportamento é compartilhado através de herança. Porém, existem 
casos em que a herança não é a melhor solução. Herança não funciona muito bem para 
objetos não-relacionados como Bird e Airplane. Ambos podem voar, mas um Bird não é 
um tipo de Airplane e vice-versa.
Para objetos não relacionados, é melhor usar mixins. Um mixin permite outros 
objetos para utilizar uma coleção de funções.*/

//exemplos

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

//Aqui bird e plane são passados para flyMixin, o que em seguida atribui a 
//função fly para cada objeto. Agora bird e plane podem ambos voar:

let boat = {
  name: "Warrior",
  type: "race-boat"
};


let glideMixin = function(obj) {
  obj.glide = function() {
    console.log('glide')
  }
};

glideMixin(bird);
glideMixin(boat);

/*---------------------------------------------------------------------------*/

/*--USAR CLOSURE PARA EVITAR QUE PROPRIEDADES DE UM OBJETO SEJAM MODIFICADAS EXTERNAMENTE--
Portanto, qualquer parte do seu código pode facilmente alterar o nome do bird 
para qualquer valor. Pense sobre coisas como senhas e contas de banco sendo 
facilmente modificáveis em qualquer parte do seu código. Isso poderia causar 
inúmeros problemas. A forma mais simples para tornar essa propriedade 
pública em privada, seria criando uma variável dentro da função constructor.
Isso alteraria o escopo daquela variável para ser apenas o escopo da função 
construtora ao invés de globalmente disponível. Dessa maneira, a variável 
pode ser acessada e modificada apenas pelos métodos dentro da função construtora.*/

function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

/*Aqui getHatchedEggCount é um método privilegiado, porque ele possui acesso à 
variável privada hatchedEgg. Isso é possível porque hatchedEgg é declarado no
mesmo contexto que getHatchedEggCount. Em JavaScript, a função sempre possui 
acesso ao contexto na qual foi criada. Isso é chamado de closure.*/

//exemplos

function Bird() {
  let weight = 15;
  this.getWeight = function() {
    return weight;
  }
}

/*---------------------------------------------------------------------------*/

/*---------ENTENDER A EXPRESSAO DE FUNÇAO INVOCADA IMEDIATAMENTE--------------
Um padrão comum em JavaScript é executar a função assim que ela é declara
Note que a função não possui nome e não é armazenada em uma variável. Os dois 
parênteses () ao final da expressão da função faz com que ela seja imediatamente 
executada ou invocada. Este padrão é conhecido como immediately invoked function 
expression (expressão de função invocada imediatamente) ou IIFE.*/

//exemplos

(function () {
  console.log("Chirp, chirp!");
})();

(function () {
  console.log("A cozy nest is ready");
})();

/*---------------------------------------------------------------------------*/

/*-----------------------USAR UMA IIFE PARA CRIAR UM MODULO------------------
Uma expressão de função imediatamente invocada (IIFE) é frequentemente utilizada 
para agrupar funcionalidades relacionadas para um único objeto ou módulo. Por 
exemplo, um desafio anterior definiu dois mixins:
Note que você possui uma expressão de função imediatamente invocada (IIFE) 
que retorna um objeto motionModule. Esse objeto retornado contém todos os 
comportamentos de mixin como propriedades do objeto. A vantagem do padrão 
módulo é que todos os comportamentos de movimento podem ser embalados em 
um único objeto que pode em seguida ser usado por outras partes do seu 
código. Aqui está um exemplo utilizando isso:*/

//SEM

function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}

//COM

let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();

let funModule = (function (){
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function () {
        return true
      }
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log('Singing to an awesome tune')
      }
    }
  }
})();

/*---------------------------------------------------------------------------*/