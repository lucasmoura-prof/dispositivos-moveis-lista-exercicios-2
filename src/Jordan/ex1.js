var players = []; // Fora da função, a array pode ser lida pelos outros scripts

function ex1() {
    console.clear();

    // Lista 2 - Exercício 1

    // CSS no console, por que não? hehe
    var cssEx = 'color: yellow; background-color: gray;';
    console.log('%c--------- Exercício 1 ---------', cssEx);

    // Esvaziamento da array para não acumular toda vez que a função for chamada
    players = [];

    // Preenchimento da array
    players.push(
        {
            id: 2,
            nick: 'Artico Lado',
            level: 60,
            hoursPlayed: 197
        },
        {
            id: 3,
            nick: 'Pro Trickster',
            level: 56,
            hoursPlayed: 106
        },
        {
            id: 5,
            nick: 'Arrasa Quarteirão',
            level: 50,
            hoursPlayed: 170
        },
        {
            id: 7,
            nick: 'Fire Flamboyant',
            level: 43,
            hoursPlayed: 99
        },
        {
            id: 11,
            nick: 'Prime Eleven',
            level: 1,
            hoursPlayed: 1
        }
    )

    console.log('players inicial');
    // Por que console.TABLE? Além de esteticamente bonita, ela mostra o vetor no momento que o comando foi chamado
    console.table(players);
    console.log('\n');

    // Passo 1, push de 2 players (add)
    players.push(
        { id: 13, nick: 'Br Azul K', level: 34, hoursPlayed: 67 },
        { id: 17, nick: 'Trocad Ilhado', level: 28, hoursPlayed: 33 }
    );

    // Passo 2, shift do primeiro player (remove first)
    players.shift();

    // Passo 3, imprime o vetor players
    console.log('players modificado');
    console.table(players);
    console.log('\n');

    // Passo 4, pop do ultimo player (remove last)
    players.pop();

    // Pesso 5, unshift do primeiro player (add first)
    players.unshift(
        { id: -1, nick: 'System Failure', level: -1, hoursPlayed: -1 }
    );

    // Passo 6, imprime o vetor players
    console.log('players final');
    console.table(players);
    console.log('\n');

}
