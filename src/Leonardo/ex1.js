/* Lista 02 - Exercício 01
 * Description: Crie um script que irá conter um vetor de objetos chamado players, esse vetor dever conter 5 players definidos. Faça os seguintes passos para manipular esse vetor (usando as funções de vetor):
    - adicione 2 players no final do vetor;
    - remova o primeiro player do vetor;
    - imprima os players no console;
    - remova o último player do vetor;
    - adicione um player no início do vetor;
    - imprima o vetor;
 * Author: Leonardo Leal Queiroz Marrega
 */

// Crie um script que irá conter um vetor de objetos chamado players
var players = [];

(function() {

    let p1 = {
        id: 1,
        nome: 'Dan',
        classe: 'Mago',
        nivel: 666,
        habilidades: ['Troca de roupa instantânea', 'Fazer outros ficarem invisíveis']
    };
    let p2 = {
        id: 2,
        nome: 'Min',
        classe: 'Assassino',
        nivel: 7000,
        habilidades: ['Berserk (surto de ódio)', 'Gritão do poder']
    };
    let p3 = {
        id: 3,
        nome: 'Leu',
        classe: 'Mendigo',
        nivel: 4,
        habilidades: ['Dorme o dia todo', 'Não leva nada a sério']
    };
    let p4 = {
        id: 4,
        nome: 'Jôn',
        classe: 'Paladino',
        nivel: 9,
        habilidades: ['Tem um punho do poder', 'Brilha que nem uma estrela']
    };
    let p5 = {
        id: 5,
        nome: 'Bru',
        classe: 'Nenhuma',
        nivel: 1,
        habilidades: ['Fala muito']
    };
    let p6 = {
        id: 6,
        nome: 'Jer',
        classe: 'Bardo',
        nivel: 8000,
        habilidades: ['Toca muito alto', 'Encanta as damas']
    };
    let p7 = {
        id: 7,
        nome: 'Ale',
        classe: 'Clerigo',
        nivel: 37,
        habilidades: ['Circulo da purificação', 'Muita vida']
    };

    // esse vetor dever conter 5 players definidos.
    players.push(p1, p2, p3, p4, p5)

    // Faça os seguintes passos para manipular esse vetor (usando as
    // funções de vetor):
    // * adicione 2 players no final do vetor;
    players.push(p6, p7);

    // * remova o primeiro players do vetor;
    let r1 = players.shift();

    // * imprima os players no console;
    console.log([...players]);
    if(responder) responder(1, players);

    // * remova o último player do vetor;
    let r2 = players.pop();

    // * adicione um player no início do vetor;
    players.unshift(r2);

    // * imprima o vetor;
    console.log([...players]);
    if(responder) responder(1, players);

})();