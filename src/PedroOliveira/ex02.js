/* Lista 02

Exercício 02

*/

console.log('Exercício 02');
// Procurar um player pelo ID
var idBusca = 3;
var foundIndex = players.find(function(player){
    return player.id === idBusca;
});

if(foundIndex){
    console.log('O player foi encontrado: ' + foundIndex.name);
} else{
    console.log('Eu vou chorar bastante em casa ;-; ');
}

// Adicionando outro código para procurar por qualquer outra propriedade
var prop = 'class'
var valBusca = 'Death Knight';
var foundP = players.find(function(p){
    return p[prop] === valBusca;
});

if(foundP){
    console.log('O player foi encontrado: ' + foundP.name + ' usando a busca de [' + prop + '] e [' + valBusca +']');
} else{
    console.log('Eu vou chorar bastante em casa ;-; ');
}
console.log('\n\n');