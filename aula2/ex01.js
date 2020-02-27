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