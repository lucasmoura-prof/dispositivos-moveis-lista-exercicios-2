console.log(" \n Exercicio3");
var IdadeDaPessoa = function (idade) {
    return new Promise(function (resolve, reject) {
        if (idade >= 18) {
            resolve("Maior ou igual 18");
        }
        else {
            reject("Menor que 18");
        }


    });
}
setTimeout(() => {
    IdadeDaPessoa(21)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}, 5000); 
