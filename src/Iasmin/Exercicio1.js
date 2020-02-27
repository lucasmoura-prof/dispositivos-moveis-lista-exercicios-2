var players = [
    { id: 1, name: 'Charmander' },
    { id: 2, name: 'Digglet' },
    { id: 3, name: 'Eevee' },
    { id: 4, name: 'Nine Tails' },
    { id: 5, name: 'Raichu' }
];

players.push( {id: 6, name:'Blastoise'},
              {id: 7, name:'Bulbasauro'}
              );

players.shift();

console.log(JSON.stringify(players));

players.pop();

players.unshift({id: 8, name: 'Chicorita'});

console.log(JSON.stringify(players));


