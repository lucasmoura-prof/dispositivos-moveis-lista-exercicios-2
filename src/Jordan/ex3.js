function ex3() {
    console.clear();

    // Lista 2 - Exercício 3

    var cssEx = 'color: yellow; background-color: gray;';
    console.log('%c--------- Exercício 3 ---------', cssEx);

    var testeIdade = function (idade) {
        return new Promise(function (resolve, reject) {
            if (idade >= 18) {
                // Sucesso
                resolve('Maior ou igual a 18 anos. ✔');
            } else {
                // Erro
                reject('Menor que 18 anos. ✘');
            }
        }
            // Resolve -> função que será chamada se tiver sucesso
            // Reject -> função que será chamada se houver erros
        );
    }

    console.log('Verificando a idade...');

    setTimeout(() => {
        testeIdade(18)
            .then(function (response) {
                console.log(response);
                console.log('\n');
            })
            .catch(function (error) {
                console.log(error);
                console.log('\n');
            });
    }, 5000); // Tempo em milissegundos

}
