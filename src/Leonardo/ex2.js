/* Lista 02 - Exercício 02
 * Description: Usando o script do exercicio anterior, procure um player a partir do Id. Caso exista, imprima a mensagem que ele foi encontrado em um determinado indice. Adicione também um código que irá buscar um player por outra propriedade (não será id), e imprima o atributo caso o jogador encontrado seja válido.
 * Author: Leonardo Leal Queiroz Marrega
 */

(function() {

    let searchId = 3;
    let searchIndex = players.findIndex(function(p) {
        return p.id === searchId;
    });

    if(searchIndex != -1) {
        let r = 'O id ' + searchId + ' foi encontrado no índice ' + searchIndex + '.';
        console.log(r);
        if(responder) responder(2, r);
    }

    let attr = 'classe';
    let attrVal = 'Mendigo';
    
    let searchResult = players.find(function(p) {
        return p[attr] === attrVal;
    });

    if(searchResult) {
        let r = 'p.' + attr + ' === ' + attrVal;
        console.log(r);
        if(responder) responder(2, r);
    }

    // Vai que .-.
    if(foiRespondido && responder && !foiRespondido(2))
        responder(2, 'Nada foi encontrado.');

})();