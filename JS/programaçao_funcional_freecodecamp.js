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