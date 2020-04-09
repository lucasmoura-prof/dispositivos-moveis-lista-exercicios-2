/* Lista 02 - Exercício 04
 * Description: Crie um script que recebe o nome de um usuário no Github. Após digitar o nome do usuário, deverá buscar pela API do Github (conforme URL abaixo) os dados de repositórios do usuário e mostrá-los em tela: https://api.github.com/users/lucasmoura-prof/repos A url acima retorna os reositórios do usuário lucasmoura-prof, o script deverá consular a API com o usuário digitado.
   Após fazer a requisição na API, deverá imprimir no console os nomes de todos os repositórios desse usuario.
 * Author: Leonardo Leal Queiroz Marrega
 */

(function() {

    let username = 'leo1553';

    let aviso = 'Carregando...';
    console.log(aviso);
    if(responder) responder(4, aviso);

    axios.get('https://api.github.com/users/' + username + '/repos').
        then(function(response) {
            let r = 'Carregado.';
            console.log(r);
            if(responder) responder(4, r);

            let m = [];
            r = 'Repositórios de ' + username + ':';
            for(let repos of response.data) {
                r += '\n' + repos.name;
                m.push(repos.name);
            }
            
            console.log(r);
            if(responder) responder(4, m);

        }).
        catch(function(error) {
            let r = 'Erro na aquisição.';
            if(error.message.includes('404'))
                r = 'Usuário inexistente.';

            console.log(r);
            if(responder) responder(4, r);
        }); 

})();