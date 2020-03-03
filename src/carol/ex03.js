/*
3- Crie uma função que recebe a idade de um usuário
retorna uma Promise que depois de 5 segundos retornará
se usuário é maior ou não que 18 anos.
Se o usuário ter mais que 18 anos de idade o
resultado deve cair no .then, caso contrário,
no .catch Deverá imprimir a mensagem "Maior que 18"
caso a promise retorne um resultado positivo.
Deverá imprimir a mensagem "Menor que 18" caso a
promise retorne um resultado negativo.
*/

var myPromise = function (age){
    return new Promise(function (resolve, reject){
        if(age >= 18){
            resolve();
        }else{
            reject();
        }
    });
}

myPromise(20)
    .then(function (response) {
        setInterval(function() {
            console.log('maior que 18');
        }, 5000);
    })
    .catch(function (reject) {
        setInterval(function() {
            console.log('menor que 18');
        }, 5000);
    });
