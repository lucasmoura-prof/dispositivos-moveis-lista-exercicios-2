/* Lista 02 - Exercício 03
 * Description: Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 5 segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de idade o resultado deve cair no .then, caso contrário, no .catch Deverá imprimir a mensagem "Maior que 18" caso a promise retorne um resultado positivo. Deverá imprimir a mensagem "Menor que 18" caso a promise retorne um resultado negativo.
 * Author: Leonardo Leal Queiroz Marrega
 */

(function() {

    const DELAY = 5000;
    let ehMaiorAsync = function(idade) {
        return new Promise(async function(resolve, reject) {
            await new Promise(resolve => setTimeout(resolve, DELAY));

            if(idade >= 18)
                resolve();
            else
                reject();
    })};

    const IDADE = 15;

    let aviso = 'Verificando se ' + IDADE + ' é maior...';
    console.log(aviso)
    if(responder) responder(3, aviso);

    ehMaiorAsync(IDADE).
        then(function() {
            let r = 'Maior que 18';
            console.log(r);
            if(responder) responder(3, r);
        }).
        catch(function() {
            let r = 'Menor que 18';
            console.log(r);
            if(responder) responder(3, r);
        });

})();