function ex2() {
    console.clear();
    if (Array.isArray(players) && players.length) {
        var searchById = 11; 

        var foundPlayer = players.findIndex(function (players) {
            return players.id === searchById;
        });
        if (foundPlayer != -1) {
            console.log('Player with id ' + searchById + ' founded in: ' + foundPlayer);
        } else {
            console.log('Player wih id ' + searchById + ' not found');
        }
        var searchByNick = 'System Failure';

        var PlayerNick = players.find(function (players) {
            return players.nick === searchByNick;
        });

        if (PlayerNick) {
            console.log('Player: ', PlayerNick);
        } else {
            console.log('Player not Found.');
        }

    } else {
        console.log('First Activity');
    }

    console.log('\n');

}