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