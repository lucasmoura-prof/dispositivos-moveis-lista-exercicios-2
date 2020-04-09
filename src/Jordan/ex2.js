function ex2() {
    console.clear();

    // Lista 2 - Exercício 2

    var cssEx = 'color: yellow; background-color: gray;';
    console.log('%c--------- Exercício 2 ---------', cssEx);

    // Verifica se 'players' não está vazia, caso contrário uma mensagem de erro é imprimida
    if (Array.isArray(players) && players.length) {

        // Passo 1, encontrar index por ID
        var searchById = 11; // ID a ser procurado

        var foundPlayerIndex = players.findIndex(function (players) {
            return players.id === searchById;
        });

        if (foundPlayerIndex != -1) {
            console.log('Player com id ' + searchById + ' encontrado no índice: ' + foundPlayerIndex);
        } else {
            console.log('Player com id ' + searchById + ' não encontrado.');
        }

        // Passo 2, encontrar player por NICK
        var searchByNick = 'System Failure';

        var foundPlayerNick = players.find(function (players) {
            return players.nick === searchByNick;
        });

        if (foundPlayerNick) {
            console.log('Player encontrado: ', foundPlayerNick);
        } else {
            console.log('Player não encontrado.');
        }

    } else {
        console.log('Execute o Exercício 1 primeiro.');
    }

    console.log('\n');

}
