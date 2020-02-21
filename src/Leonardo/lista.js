/* Lista 02
 * Description: 
 * Author: Leonardo Leal Queiroz Marrega
 */

let respondidos = { }

function foiRespondido(exNumber) {
    return respondidos[exNumber] !== undefined;
}

function responder(exNumber, answer) {
    let elementId = 'ex' + exNumber + '-r';
    let element = document.getElementById(elementId);

    if(element) {
        if(!foiRespondido(exNumber)) {
            element.innerText = JSON.stringify(answer, null, 4);
            respondidos[exNumber] = 1;
        }
        else {
            if(respondidos[exNumber] == 1)
                element.innerText = 'Resposta 1:\n' + element.innerText + '\n\n'
                                  + 'Resposta 2:\n' + JSON.stringify(answer, null, 4);
            else
                element.innerText += '\n\nResposta ' + (respondidos[exNumber] + 1) + ':\n' + JSON.stringify(answer, null, 4);
            respondidos[exNumber]++;
        }
    }
}
