// Lista 02

 /*
Exercício 01

*/

//Inicializar o vetor com CINCO PLAYERS JÁ DEFINIDOS
// Referências de WOW, inclusive, se jogar, me chama e vam jogar junto.
var players = [
    { id: 1, name: 'Amorim', class: 'Demon Hunter'},
    { id: 2, name: 'Beatriz', class: 'Shaman'},
    { id: 3, name: 'Celina', class: 'Mage'},
    { id: 4, name: 'Daniel', class: 'Death Knight'},
    { id: 5, name: 'Elder', class: 'Rogue'},
];


// Adicionar dois players novos por comando de vetor
players.push({
    id: 6, 
    name: 'Fabiana', 
    class: 'Monk'
})

players.push({
    id: 7, 
    name: 'Gabriel', 
    class: 'Hunter'
})


// Remover o primeiro player por comando de vetor
players.shift();

// Imprimir os players no console
console.log(players);

// Remover o último player do vetor
players.pop();

// Adicionar um player no inicio do vetor
players.unshift({
    id: 8,
    name: 'Helena',
    class: 'Warrior'
})

// Imprimir o vetor
for(var i = 0; i < players.length; i++) console.log(players[i]);
console.log('\n\n')