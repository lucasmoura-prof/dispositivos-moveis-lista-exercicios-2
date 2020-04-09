/* Lista 02

Exercício 04 e 05

*/

//  Criar um script que receba o nome de um usuário do Github. Logo após, buscar pelo API do Github os dados
// do repositório. Imprimir no console

var usuarioGit = 'PedroOliveiraS';

console.log('\n\nExercício 04 e 05\nCarregando...');
axios.get('https://api.github.com/users/a'+ usuarioGit +'/repos')
.then(function(response){
    console.log('Carregado');

    var repositorios = [];
    for(let addRep of response.data){
        repositorios.push(addRep.name);
    }
    console.log('Repositórios desse usuário:');
    console.log(repositorios);
})
.catch(function(error){
    erro = error.message; // Coletando a mensagem de erro
    if(erro.includes(404)){
        console.log('Usuário não foi enocntrado')
    }
})
