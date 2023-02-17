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

/*---------------REFATORAR VARIAVEIS GLOBAIS FORA DE FUNÇOES------------------
Até agora vimos dois princípios diferentes de programação funcional:
    Não altere variáveis ou objetos: crie novas variáveis ou objetos e os 
retorne, caso necessário, de uma função. Dica: escrever algo como const newArr 
= arrVar onde arrVar é um array não o copiará para a nova a variável, e sim 
apenas criará uma nova referência ao mesmo objeto. Então mudar um valor em 
newArr também o muda em arrVar.
    Declare parâmetros de funções: qualquer computação dentro de uma função 
depende apenas dos argumentos passados a ela; nunca de uma variável ou objeto 
global.
Incrementar um número em um não é tão divertido, mas podemos aplicar esses 
princípios ao trabalhar com arrays ou objetos mais complexos.
Reescreva o código de forma que o array global bookList não seja alterado em 
nenhuma das funções. A função add deve adicionar o nome do livro, bookName 
ao array passado e retornar um novo array. A função remove deve remover o 
bookName do array passado a ela.*/

//exemplo

// A variável global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", 
"Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
  let newArr = [...arr]; //Copiar bookList em um novo array
  newArr.push(bookName); //Adicionar o parametro bookName ao final do novo array 
  return newArr; //Retornar o novo array
}

function remove(arr, bookName) {
  let newArr = [...arr]; //Copiar bookList em um novo array
  if (newArr.indexOf(bookName) >= 0) {
    //Checar se o parametro bookName esta em novo array
    newArr.splice(newArr.indexOf(bookName), 1); //Remove o parametro dado do novo array
    return newArr; //Retorna o novo array.
  }
}

/*---------------------------------------------------------------------------*/

/*---------------USAR METODO MAP PARA EXTRAIR DADOS DE UM ARRAY----------------
Até então nós aprendemos a usar funções puras para evitar efeitos colaterais em 
um programa. Vimos também que há valor em fazer funções dependerem apenas de suas 
entradas. Este é apenas o começo. Como o nome sugere, programação funcional orbita 
uma teoria de funções. Faz sentido conseguir passar funções como argumento a 
outras funções e retorná-las de outras funções. Funções são consideradas objetos 
de primeira classe em JavaScript e podem ser usadas como qualquer outro objeto. 
Elas podem ser salvas em variáveis, objetos ou passadas como argumento a funções.
Vamos começar com algumas funções simples de array. Alguns métodos no protótipo de
objetos array. Neste exercício estamos de olho em Array.prototype.map(), ou 
simplesmente map. O método map percorre cada item de um array e retorna um novo 
array cujos elementos são os resultados da chamada da função de callback para cada
item. Isso tudo acontece sem modificar o array original. A função de callback é 
chamada com três argumentos. O primeiro argumento é o elemento que está a ser
processado. O segundo é o índice deste elemento e o terceiro é o array do qual 
map foi chamado. Abaixo você vê um exemplo do map sendo usado do array users 
para retornar um novo array apenas com os nomes dos usuários. O exemplo usa 
apenas o primeiro argumento da função de callback por simplicidade.*/

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
const names = users.map(user => user.name);
console.log(names);//[ 'John', 'Amy', 'camperCat' ]

//exemplo

const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];  
  
const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));
//Usando parametro desconstrutivo o title e rating sao extraidos e retornados em um objeto
//Os parenteses sao necessarios para retornar um objeto
  
console.log(JSON.stringify(ratings));

const ratingsDois = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
  }));
//Usando a notaçao ES6, para cada item do arra e extraido o  title e rating
//Os parenteses sao necessarios para retornar um objeto

/*---------------------------------------------------------------------------*/

/*-------------------------IMPLEMENTAR MAP EM UM PROTOTYPE---------------------
Como você viu ao aplicar Array.prototype.map(), ou simplesmente map() mais cedo, 
o método map retorna um array do mesmo tamanho que o no qual chamamos o método. 
Ele também não altera o array original desde que a função de callback não o faça.
Em outras palavras, map é uma função pura e a sua saída depende somente de suas 
entradas. Além disso, ele recebe outra função como argumento. Você pode aprender 
muito sobre o método map se você implementá-lo por conta própria. Recomenda-se 
que você use um loop for ou o método Array.prototype.forEach(). Escreva o seu 
próprio Array.prototype.myMap() e faça com que ele se comporte como o 
Array.prototype.map(). Você não deve usar o método map disponibilizado. O objeto
Array pode ser acessado dentro de myMap pelo this.*/

//exemplo

Array.prototype.myMap = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++)
    newArray.push(callback(this[i], i, this))
    return newArray;
  };
//O uso de um loop “for” nos permite aplicar a função de 
//retorno de chamada a cada item no array global e, em seguida,
//enviar os itens modificados para o novo array vazio que é 
//retornado no final.

Array.prototype.myMap = function (callback) {
    const newArray = [];
    this.forEach((element, index, originalArr) =>
      newArray.push(callback(element, index, originalArr))
    );
    return newArray;
  };
//A palavra-chave this nos dá acesso ao objeto no qual estamos chamando 
//A partir daí, podemos usar o método forEach para adicionar elementos 
//à matriz vazia já declarada à medida que modificamos cada elemento com 
//o método de retorno de chamada fornecido.

/*---------------------------------------------------------------------------*/

/*-------------USAR METODO FILTER PARA EXTRAIR DADOS DE UM ARRAY---------------
Outra função útil de array é Array.prototype.filter(), ou simplesmente filter().
filter chama uma função em cada elemento de um array e retorna um novo array 
contendo apenas os elementos para os quais aquela função retorna um valor 
verdadeiro - ou seja, um valor que retorna true se passada para o construtor 
Boolean(). Em outras palavras, ele filtra o array de acordo com a função 
passada a ele. Ele o faz sem alterar o array original assim como map.
A função de callback toma três argumentos. O primeiro argumento é o elemento 
que está a ser processado. O segundo é o índice deste elemento e o terceiro é 
o array do qual filter foi chamado. Abaixo você vê um exemplo do filter sendo 
usado do array users para retornar um novo array apenas com os usuários cuja 
idade é menor que 30. O exemplo usa apenas o primeiro argumento da função de 
callback por simplicidade.*/

//exemplos

const usersTres = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const usersUnder30 = usersTres.filter(user => user.age < 30);
  console.log(usersUnder30); 

  const filteredList = watchList
  .filter(movie => {
    //Retorna true mantem o item
    //Retorna false rejeita o item
    return parseFloat(movie.imdbRating) >= 8.0;
  })
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  });
//Primeiro, filtramos e retornamos apenas os objetos que atendem aos 
//critérios. Neste caso, o critério é ter um imdbRating de 8,0 ou superior.
//Em seguida, mapeamos os objetos para o formato desejado.

const filteredListDois = watchList
  .filter(movie => movie.imdbRating >= 8.0)
  .map(movie => ({ title: movie["Title"], rating: movie["imdbRating"] }));
console.log(filteredListDois);

const filteredListTres = watchList
  .filter(movie => movie.imdbRating >= 8.0)
  .map(movie => ({ title: movie["Title"], rating: movie["imdbRating"] }));
console.log(filteredListTres);

/*---------------------------------------------------------------------------*/