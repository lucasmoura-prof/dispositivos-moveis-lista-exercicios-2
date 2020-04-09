/*

4- Crie um script que recebe o nome de um usuário no Github. Após digitar o nome do usuário,
deverá buscar pela API do Github (conforme URL abaixo) os dados de repositórios do usuário e mostrá-los em tela
 https://api.github.com/users/lucasmoura-prof/repos
 A url acima retorna os reositórios do usuário lucasmoura-prof,
 o script deverá consular a API com o usuário digitado.
Após fazer a requisição na API, deverá imprimir no console os nomes de todos os repositórios desse usuario:

*/

function exercicio(username){
    msg = 'carregando...';
    console.log(msg);
    axios.get('https://api.github.com/users/'+ username +'/repos')
    .then(function(response){
        msg = 'carregado';
        console.log(msg);
        for (let value of response.data){
            msg = 'carregado.';
            console.log(value.name);
        }
    })
    .catch(function(error){
        console.log("axios", error);
        msg = 'nao possui usuario';
        console.log(msg);

});

}
console.log('repositorios desse usuario: ');
exercicio('filipesdflkldslfkdsj');