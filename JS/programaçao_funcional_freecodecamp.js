/*---------------------------------------------------------------------------*/

/*----------------APRENDER SOBRE PROGRAMAÇAO FUNCIONAL------------------------
Programação funcional é um estilo de programação em que as soluções são funções 
simples, isoladas e livres de efeitos colaterais fora do escopo da função: 
INPUT -> PROCESS -> OUTPUT
Quando falamos de programação funcional, pensamos em:
    Funções isoladas: nenhuma função depende do estado do programa, incluindo 
variáveis globais, que podem sofrer mudanças
    Funções puras: a mesma entrada sempre devolve a mesma saída
    Funções com efeitos colaterais limitados: qualquer alteração 
ou mutação do estado do programa fora da função é cuidadosamente controlada*/

//exemplo

const prepareTea = () => 'greenTea';
/*
Dada uma função (representando o tipo de chá) e o número de xícaras necessárias, a função
a seguir retorna um array de strings (cada uma representa uma xícara de um tipo específico de chá).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);

/*---------------------------------------------------------------------------*/

/*--------------ENTENDER A TERMINOLOGIA DE PROGRAMAÇAO FUNCIONAL--------------
Houve uma mudança de humor no time da FCC e os membros agora querem dois tipos 
de chá: verde e preto. Fato: clientes sofrem mudanças de humor e de opinião 
frequentemente. Por causa disso, precisaremos rever a função getTea do último 
desafio para lidar com vários pedidos de chá. Podemos modificar a getTea para 
aceitar uma função como argumento e torná-la capaz de preparar outros tipos 
de chá. Isso faz com que getTea seja mais flexível e dá mais controle ao 
programador quando os requisitos do cliente mudam. Mas primeiro, vejamos um 
pouco de terminologia funcional: Callbacks são funções que são passadas a 
outras funções, que decidem quando e como são chamados. Você pode ter visto 
alguns sendo passados a outros métodos. Em filter, por exemplo, a função de 
callback diz ao JavaScript qual é o critério para filtrar um array.
Funções que podem ser atribuídas a variáveis, passadas a outras funções ou 
retornadas de outra função como qualquer outro valor são chamadas de funções 
de primeira classe. Em JavaScript, todas as funções são funções de primeira 
classe. As funções que recebem funções como argumentos ou retornam outras 
funções como valores são chamadas de funções de ordem superior. Funções 
podem ser chamadas de lambda quando passadas para outra função ou retornadas 
a partir dela.*/

//exemplo

// Função que retorna uma string representando uma xícara de chá verde
const prepareGreenTea = () => 'greenTea';

// Função que retorna uma string representando uma xícara de chá preto
const prepareBlackTea = () => 'blackTea';
/*
Dada uma função (representando o tipo de chá) e o número de xícaras necessárias, a função
a seguir retorna um array de strings (cada uma representa uma xícara de um tipo específico de chá).
*/
const getTeaDois = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTeaDois(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTeaDois(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

/*---------------------------------------------------------------------------*/

/*------------ENTENDER OS PERIGOS DA PROGRAMAÇAO IMPERATIVA-------------------
Usar programação funcional é um bom hábito. Faz com que o seu código seja fácil 
de manter e o livra de bugs sorrateiros. Mas antes de fazer a transição, vamos 
rever uma abordagem imperativa para destacar onde pode haver problemas.
Em português (e em vários outros idiomas), o modo verbal imperativo é usado 
para dar ordens. Da mesma forma, o estilo imperativo em programação é um estilo 
que dá um conjunto de instruções para um computador realizar uma tarefa.
Essas instruções frequentemente alteram o estado do programa ao atualizar 
variáveis globais, por exemplo. Um exemplo clássico é escrever um loop for, 
que é explícito ao dar direções para percorrer um array. Em contrapartida, a 
programação funcional é uma forma de programação declarativa. Você diz ao 
computador o que quer fazer chamando um método ou função. O JavaScript oferece 
muitos métodos predefinidos que lidam com tarefas comuns, então você não precisa 
escrever como o computador deve executá-las. Por exemplo, em vez de usar um loop 
for, você pode chamar o método map, que lida com os detalhes de como percorrer um 
array. Isso ajuda a evitar erros semânticos, como os erros de "Off By One" 
(fora por um), que foram cobertos na seção de depuração. Considere o cenário: 
você está navegando na web com o navegador e quer rastrear as abas que você abriu. 
Vamos tentar modelar isso usando orientação a objetos de forma simples.
Um objeto Window (Janela) é composto de abas e normalmente há mais de uma janela 
aberta. Os títulos de cada site aberto em cada objeto Window é armazenado em um 
array. Depois de usar o navegador (abrindo novas abas, juntando janelas, fechando 
abas), você quer imprimir as abas que ainda estão abertas. Abas fechadas são 
removidas do array e novas abas são adicionadas ao fim dele (por simplicidade).*/

//exemplo

// tabs é um array de títulos de cada site aberto na janela
const Window = function(tabs) {
    this.tabs = tabs; // Mantemos um registro do array dentro do objeto
  };
  
  // Quando você junta duas janelas em apenas uma
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // Quando você abre uma nova aba no final
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Vamos abrir uma nova aba por enquanto
    return this;
  };
  
  // Quando você fecha uma aba
  Window.prototype.tabClose = function(index) {  
  
    const tabsBeforeIndex = this.tabs.slice(0, index); // Obtém as abas antes da aba
    const tabsAfterIndex = this.tabs.slice(index + 1); // Obtém as abas após a aba
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Junte-as  
  
    return this;
   };
  
  // Vamos criar três janelas no navegador
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Sua caixa de correio, unidade e outros locais de trabalho
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sites sociais
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sites de entretenimento
  
  // Agora, realize a abertura e o fechamento da aba, assim como outras operações
  const finalTabs = socialWindow
    .tabOpen() // Abra uma nova aba para memes de gato
    .join(videoWindow.tabClose(2)) // Fechar a terceira aba na janela de vídeo e entrar
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);

/*---------------------------------------------------------------------------*/

/*------EVITAR MUTAÇOES E EFEITOS COLATERAIS USANDO PROGRAMAÇAO FUNCIONAL-----
Caso você ainda não tenha descoberto, o problema do desafio anterior é com a 
chamada a splice na função tabClose(). Infelizmente, splice modifica o array 
original no qual opera e, por isso, a segunda chamada usou o array alterado, 
nos dando resultados inesperados. Este é apenas um pequeno exemplo - você 
chama uma função e passa uma variável, array ou objeto a ela; a função 
modifica a variável ou alguma coisa no objeto. Um dos principais princípios 
da programação funcional é que não devemos alterar coisas. Alterações levam 
a bugs. É mais fácil prever bugs quando se sabe que as funções não mudam 
nada, nem mesmo os argumentos e as variáveis globais. No exemplo anterior 
não havia nenhuma operação complicada, mas o método splice modificou o array 
original e o resultado foi um bug. Lembre-se de que, em programação funcional, 
modificar ou alterar coisas é chamado de mutação e a consequência é chamada 
de efeito colateral. Idealmente, uma função deveria ser uma função pura, 
que é uma função que não causa efeitos colaterais. Vamos tentar dominar esta 
disciplina e não alterar nenhuma variável ou objeto em nosso código.*/

let fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
}

/*---------------------------------------------------------------------------*/

/*------------PASSAR ARGUMENTOS PARA EVITAR DEPENDENCIA DE DADOS-------------
No último desafio você deu um passo a mais nos princípios de programação 
funcional, mas ainda falta algo. Nós não mudamos o valor dela, mas a função 
incrementer não funciona sem a variável global fixedValue. Outro princípio 
da programação funcional é que sempre devemos declarar nossas dependências 
explicitamente. Isso significa que, se uma função depende de uma variável 
ou objeto, então devemos passar esta variável ou objeto diretamente como 
argumento a ela. Há muitas boas consequências nesse princípio: a função se 
torna mais fácil de testar, você sabe exatamente quais são as suas entradas 
e ela não depende de mais nada no seu programa. Isso faz com que você tenha 
mais confiança ao alterar, remover ou adicionar código, pois sabe o que pode 
ou não pode alterar e identifica armadilhas em potencial com mais facilidade.
Finalmente, a função sempre produzirá a mesma saída para o mesmo conjunto de 
entradas, não importa de onde no código ela é chamada.*/

//exemplo

let fixedValueDois = 4;

function incrementer(fixedValueDois) {
  return fixedValueDois + 1;
}

/*---------------------------------------------------------------------------*/