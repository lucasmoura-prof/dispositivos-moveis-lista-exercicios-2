/* Lista 02

Exercício 03

*/

// Criar uma função que receba a idade de um usuário e retorne uma promessa depois de 5s, dizendo se o usuário é maior de idade ou não
// Se o usuário for maior de idade, cair no .then
// Se não, no .catch
console.log('Exercício 03');
var promessas = function(mutantes){
    return new Promise(function(resolve, reject){
        if(idade >= 18){
            resolve();
        } else{
            reject();
        }
    })   
};

var idade = 20;

console.log('Verificando a sua idade, meu caro amigo');
setInterval(function(){
    promessas(idade)
    .then(function(){
        console.log('\nResposta ex 03: Maior que 18 anos');
    });

    promessas(idade)
    .catch(function(){
     console.log('\nResposta ex 03: Menor que 18 anos');
    });
},5000);