//1- Crie um script que irá conter um vetor de objetos chamado players 
//esse vetor dever conter 5 players definidos.

//Faça os seguintes passos para manipular esse vetor (usando as funções de vetor):
  //  1 adicione 2 players no final do vetor; ok
    // 2 remova o primeiiro players do vetor;
    //  3 imprima os players no console.
    // 4 remova o último player do vetor;
    // 5 adicione um players no início do vetor;
    //6 imprima o vetor;


var players = [
    {id: 1, nickname: 'player1'},
    {id: 2, nickname: 'player2'},
    {id: 3, nickname: 'player3'},
    {id: 4, nickname: 'player4'}
];

//1
players.push({id: 5, nickname: 'player5'});
players.push({id: 6, nickname: 'player6'});

//2
players.shift();

//3
console.log(JSON.stringify(players));


//4
players.pop();

//5
players.unshift({ id: 1, nickname: 'player1'});

//6
console.log(JSON.stringify(players));

/*
2- Usando o script do exercicio anterior,
procure um player a partir do Id.
Caso exista, imprima a mensagem que ele foi encontrado
em um determinado indice.
Adicione também um código que irá buscar um
player por outra propriedade (não será id),
//e imprima o atributo caso o jogador encontrado seja válido.
*/

var foundId = players.find(function (user) {
    return user.id === 3;
    });
    
    if (foundId) {
    console.log("Usuário encontrado: " + foundId.id);
    } else {
        console.log("Usuario nao encontrado");
    }

var foundNick = players.find(function (user) {
    return user.nickname === 'player2';
    });
    
    if (foundNick) {
    console.log("Usuário encontrado: " + foundNick.nickname);
    } else {
        console.log("Usuario nao encontrado");
    }
