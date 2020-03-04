console.log("Exercicio1");
var players = [
    { Jogador: 'Endrew', id: 1 },
    { Jogador: 'Dan', id: 2 },
    { Jogador: 'Mike', id: 3 },
    { Jogador: 'Burgue', id: 4 },
    { Jogador: 'Gustavo', id: 5 }
];
players.push(
    { Jogador: 'Jubileu', id: 6 },
    { Jogador: 'Robson', id: 7 }
);
players.shift();
for (var P of players) {
    console.log(P.Jogador);
}
players.pop();
players.unshift(
    { Jogador: 'Judiscleya', id: 8 },
);
console.log(players);
