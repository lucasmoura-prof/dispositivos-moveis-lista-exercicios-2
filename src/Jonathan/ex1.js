var players = []; 

function ex1() {
    console.clear();

    players = [];
    players.push(
        {
            id: 666,
            nick: 'Sirzechs',
            level: 666,
            class: 'Demon'
        },
        {
            id: 36,
            nick: 'Adolfo Hito',
            level: 45,
            class:'Jewish Assasin' 
        },
        {
            id: 5,
            nick: 'José Estalo',
            level: 53,
            class:'Comunist'
        },
        {
            id: 70,
            nick: 'Eita Satisfação',
            level: 70,
            class:'Paladin'
        },
        {
            id: 2003,
            nick: 'Winning Eleven',
            level: 17,
            class:'Soccer Pro'
        }
    )
    console.log('players inicial');
    console.log(players);
    console.log('\n');

    players.push(
        { id: 13, nick: 'Blue Pen', level: 2019, class: 'meme' },
        { id: 17, nick: 'Ronald Mcdonald', level: 88, class: 'Clown' }
    );

    
    players.shift();
    console.log('Change Players');
    console.table(players);
    console.log('\n');
    players.pop();
    players.unshift(
        { id: -1, nick: 'ERROR!', level: -1, class: -1 }
    );

    
    console.log('Final');
    console.table(players);
    console.log('\n');

}