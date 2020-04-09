var players = [
    {id: 1, nick: 'darkMike'},
    {id: 2, nick: 'bugrinho'},
    {id: 3, nick: 'peralta2007'},
    {id: 4, nick: '_H_tinha_'},
    {id: 5, nick: 'tRaNcArUa'},
]

console.log(players);

players.push({id: 6, nick: '20tematar'})
players.push({id: 7, nick: 'xxCoxinhaxx'})

console.log(players);

console.log(players.shift());

console.log(players.pop());

console.log(players.unshift({id: 8, nick: 'xXtodynhoXx'}));

console.log(players);

function procuraPlayerId(vetor, id) {
    var index = -1;
    for (i = 0; i < players.length; i++) {
        if (players[i].id === id) index = i;        
    }
    if (index === -1) {
        console.log("Não encontrado");
    } else {
        console.log("Foi encontrado no index",index);
    }
}

function procuraPlayerNick(vetor, nick) {
    var check = -1;
    for (i = 0; i < players.length; i++) {
        console.log(players[i]);
        if (players[i].nick === nick) check = players[i].nick;        
    }
    if (check === -1) {
        console.log("Não encontrado");
    } else {
        console.log("Foi encontrado o jogador",check);
    }
}