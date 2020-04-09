var foundPlayer = players.findIndex(function(player){
    return player.id === 5;
});

if(foundPlayer != -1){
    console.log("Player encontrado: " + foundPlayer);
}

foundPlayer = players.find(function(player){
    return player.name === 'Nine Tails';
});

if(foundPlayer){
    console.log("Player encontrado: ", foundPlayer);
}
